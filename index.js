const express = require("express");
const app = express();

// express.static is a built-in middleware function in express the format is express.static(root, [options]), so the root is your particular root directory (in this case __dirname is always the directory in which the currently executing script resides), like the place from where you'll be serving static assets

app.use(express.static(`${__dirname}/public`));

// [GET] home route
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

// [GET] about route
app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`);
});

// [GET] blog route
app.get("/blog", (req, res) => {
  res.sendFile(`${__dirname}/views/blog-directory.html`);
});

// listen to these GET'S baby
app.listen(8000, () => {
  console.log("listening to port 8000");
});
