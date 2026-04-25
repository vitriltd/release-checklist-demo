const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "release-checklist-demo" });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`release-checklist-demo listening on :${port}`);
  });
}

module.exports = app;
