const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.NODE_ENV || 3000;
app.use(cors());
app.use(express.static(__dirname));

app.route("/").get((req, res) => {
  console.log("server pinged");
  res.sendFile(`${__dirname}/subhra.html`);
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
