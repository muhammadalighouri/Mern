const express = require("express");
const app = express();
const products = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
app.get("/", (req, res) => {
    res.send("api is running");
});
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.get("/api/products/:id", (req, res) => {
    const product = products.find((pro) => pro.id == req.params.id);
    res.send(product);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log("started"));
