const express = require("express");

const app = express();
//Embedded JavaScript templates ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//making a maine page not from views
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/about", (req, res) => {
  res.render("about");
});

//making about page
// app.get("/about", (req, res) => {
//   res.send("About");
// });

app.get("/user/:username", (req, res) => {
  let data = {
    username: req.params.username,
    hobbies: ["football", "scate", "bascketball"],
  };
  res.render("user", data);
});

//watchind dinamick name of url
// app.get("/user/:username/:id", (req, res) => {
//   res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`);
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});
