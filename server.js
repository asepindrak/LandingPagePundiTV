const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync(
    dev
      ? "./certificates/localhost.key"
      : "/etc/letsencrypt/live/punditv.com/privkey.pem"
  ),
  cert: fs.readFileSync(
    dev
      ? "./certificates/localhost.crt"
      : "/etc/letsencrypt/live/punditv.com/fullchain.pem"
  ),
};

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:3000`);
  });
});
