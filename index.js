const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Hello world");
});

app.listen(process.env.PORT || 80, () => {
  console.log("Listening on port 80");
});
