const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("This is home page");
});
app.get("/about", (req, res) => {
  res.send("About");
});

//watchind dinamick name of url
app.get("/user/:username/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});
