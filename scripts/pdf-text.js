// Prints the text layer of a PDF as PDFKit extracts it: osascript -l JavaScript scripts/pdf-text.js file.pdf
ObjC.import('Quartz');
function run(argv) {
  const doc = $.PDFDocument.alloc.initWithURL($.NSURL.fileURLWithPath(argv[0]));
  return doc.string.js;
}
