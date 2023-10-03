const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const JsonUrl = "./list.json";

const port = 8081;

const fs = require("fs");

const app = express(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);

app.use(bodyParser.json());

app.get("/list", (req, res) => {
  fs.readFile(JsonUrl, (err, data) => {
    if (err) throw err;
    const list = JSON.parse(data);
    res.send(list);
    console.log("GET", 200);
  });
});

app.post("/list", (req, res) => {
  fs.writeFile(JsonUrl, JSON.stringify(req.body), (err) => {
    if (err) throw err;
    res.status(200);
    res.send({ message: "list updated" });
    console.log("POST", 200);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
