const express = require("express");
const app = express();

// tell express that we're going to use
// ejs as the view engine
app.set("view engine", "ejs");

// [GET] home route
app.get("/", (req, res) => {
  // express will look inside views by defualt for an ejs file with this name
  res.render("index", { name: "Godfrey The Yummy", age: 69 });
  // res.sendFile(`${__dirname}/views/index.html`);
});

// [GET] about route
app.get("/about", (req, res) => {
  res.render("about", {
    fave: ["Chicken Feet", "Wuxia Novels", "Homies of 713"],
  });
  // res.sendFile(`${__dirname}/views/about.html`);
});

// [GET] blog route
app.get("/blog", (req, res) => {
  res.render("blog-directory");
  // res.sendFile(`${__dirname}/views/blog-directory.html`);
});

// listen to these GET'S baby
app.listen(8000, () => {
  console.log("listening to port 8000");
});
