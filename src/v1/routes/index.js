// In src/v1/routes/index.js
const expressV1 = require("express");
const router = expressV1.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;