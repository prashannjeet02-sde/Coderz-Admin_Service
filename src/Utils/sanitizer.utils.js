const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");
const turndownService = new TurndownService();

function sanitizeData(data) {
  // Converting incoming marked data to html
  const html = marked.parse(data);

  // Cleaning html data
  const clean = sanitizeHtml(html, {
    allowedTags: [
      "p",
      "b",
      "i",
      "em",
      "strong",
      "a",
      "ul",
      "ol",
      "li",
      "code",
      "pre",
      "blockquote",
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "br",
    ],
    allowedAttributes: {
      a: ["href", "title"],
      img: ["src", "alt", "title"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
  });

  //   Converting clean html data to markdow
  const markdown = turndownService.turndown(clean);
  return markdown;
}

module.exports = sanitizeData;
