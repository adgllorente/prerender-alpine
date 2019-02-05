const prerender = require("prerender");
const server = prerender({
  chromeFlags: [
    "--no-sandbox",
    "--headless",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "--hide-scrollbars"
  ],
  forwardHeaders: true,
  chromeLocation: "/usr/bin/chromium-browser",
  waitAfterLastRequest: 1000,
  userAgent:
    "Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US) AppleWebKit/604.1.38 (KHTML, like Gecko) Chrome/68.0.3325.162"
});

server.use(require("prerender-request-blacklist"));
server.use(prerender.blacklist());
server.use(prerender.httpHeaders());

server.start();
