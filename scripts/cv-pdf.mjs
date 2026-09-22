// Regenerates the one-page CV PDFs with headless Chrome.
//   public/cv/*.pdf        linked from /cv/, committed
//   private/*-full.pdf     with phone and references, only if src/data/private.local.json exists (gitignored)
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const pages = { EN: 'cv/', AR: 'ar/cv/', TR: 'tr/cv/' };

const build = (outDir, env = {}) =>
  execFileSync('npx', ['astro', 'build', '--outDir', outDir], { stdio: 'inherit', env: { ...process.env, ...env } });

async function print(dir, target, suffix = '') {
  const server = spawn('python3', ['-m', 'http.server', '4399', '--bind', '127.0.0.1', '--directory', dir], { stdio: 'ignore' });
  await sleep(1000);
  try {
    mkdirSync(target, { recursive: true });
    for (const [lang, path] of Object.entries(pages)) {
      const out = `${target}/Mohamed-Mereyani-CV-${lang}${suffix}.pdf`;
      execFileSync(chrome, ['--headless=new', '--no-pdf-header-footer', '--virtual-time-budget=5000', `--print-to-pdf=${out}`, `http://127.0.0.1:4399/${path}`], { stdio: 'ignore' });
      const count = (readFileSync(out, 'latin1').match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
      console.log(`${out}: ${count} page(s)`);
      if (count !== 1) process.exitCode = 1; // the CV must fit on one A4 page
    }
  } finally {
    server.kill();
  }
}

build('dist');
await print('dist', 'public/cv');
if (existsSync('src/data/private.local.json')) {
  build('.private-dist', { CV_PRIVATE: '1' });
  await print('.private-dist', 'private', '-full');
}
build('dist'); // so dist/ ships the fresh public PDFs
