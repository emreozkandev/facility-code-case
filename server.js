const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const routingConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "routing.json"), "utf8"));

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Check if the pathname matches any of our routing patterns
    const matchHotelListing = pathname.match(/^\/(tr|en)\/([\w-]+)-(otelleri|hotels)$/);

    if (matchHotelListing) {
      // Rewrite the URL to our dynamic facility page with locale
      const [, locale, slug] = matchHotelListing;
      console.log("matchHotelListing", matchHotelListing);
      app.render(req, res, `/${locale}/facility`, { ...parsedUrl.query, slug });
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
