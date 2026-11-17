// Regenerates the one-page CV PDFs with headless Chrome (macOS, Windows or Linux).
//   public/cv/*.pdf        linked from /cv/, committed
//   private/*-full.pdf     with phone and references, only if src/data/private.local.json exists (gitignored)
// Set CHROME to the browser binary if it is not in a standard place.
import { execFile, execFileSync } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { extname, join, normalize, resolve } from 'node:path';

const candidates = {
  darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
  win32: [
    `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['PROGRAMFILES(X86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
  ],
  linux: ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'],
};
const chrome = process.env.CHROME ?? (candidates[process.platform] ?? []).find((p) => existsSync(p));
if (!chrome) throw new Error('Chrome not found: set CHROME to the browser binary.');

const pages = { EN: 'cv/', AR: 'ar/cv/', TR: 'tr/cv/' };
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.pdf': 'application/pdf' };

const build = (outDir, env = {}) =>
  execFileSync('npx', ['astro', 'build', '--outDir', outDir], { stdio: 'inherit', shell: process.platform === 'win32', env: { ...process.env, ...env } });

/** Serves `dir` on 127.0.0.1 so the page loads its fonts and styles as on the live site. */
function serve(dir) {
  const root = resolve(dir);
  const server = createServer((req, res) => {
    let path = normalize(join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname)));
    if (!path.startsWith(root)) return res.writeHead(403).end();
    if (!extname(path)) path = join(path, 'index.html');
    if (!existsSync(path)) return res.writeHead(404).end();
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' }).end(readFileSync(path));
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)));
}

async function print(dir, target, suffix = '') {
  const server = await serve(dir);
  const { port } = server.address();
  const profile = mkdtempSync(join(tmpdir(), 'cv-chrome-'));
  try {
    mkdirSync(target, { recursive: true });
    for (const [lang, path] of Object.entries(pages)) {
      const out = resolve(`${target}/Mohamed-Mereyani-CV-${lang}${suffix}.pdf`);
      // Own throwaway profile: with the default one, an open Chrome window swallows the job and it never returns.
      // Async: a sync call would block this process's own server and Chrome would wait forever.
      await promisify(execFile)(chrome, ['--headless=new', `--user-data-dir=${profile}`, '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=5000', `--print-to-pdf=${out}`, `http://127.0.0.1:${port}/${path}`]);
      const count = (readFileSync(out, 'latin1').match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
      console.log(`${out}: ${count} page(s)`);
      if (count !== 1) process.exitCode = 1; // the CV must fit on one A4 page
    }
  } finally {
    server.close();
    rmSync(profile, { recursive: true, force: true, maxRetries: 5 });
  }
}

build('dist');
await print('dist', 'public/cv');
if (existsSync('src/data/private.local.json')) {
  build('.private-dist', { CV_PRIVATE: '1' });
  await print('.private-dist', 'private', '-full');
}
build('dist'); // so dist/ ships the fresh public PDFs
