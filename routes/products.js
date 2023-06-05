var express = require('express');
var router = express.Router();
module.exports = router;
var productController = require("../controllers/productController")

const mongoose = require("mongoose");

router.get("/", (req, res) => {
    productController.get().then(result => res.send(result));
});

router.get("/product/:id", (req, res) => {
    productController.getOne(req.params).then(result => res.send(result));
});

router.post("/new", (req, res) => {
    productController.create(req.body).then(result => res.send(result));
});


router.patch("/update", (req, res) => {
    productController.update(req.body).then(result => res.send(result));
});

router.delete("/delete", (req, res) => {
    productController.delete(req.body).then(result => res.send(result));
});