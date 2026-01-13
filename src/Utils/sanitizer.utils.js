const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");
const turndownService = new TurndownService();

function sanitizeData(data) {
  // Converting incoming marked data to html
  const html = marked.parse(data);

  // Cleaning html data
  const clean = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });

  //   Converting clean html data to markdow
  const markdown = turndownService.turndown(clean);
  return markdown;
}

module.exports = sanitizeData;
