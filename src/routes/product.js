const express = require("express");
const router = express.Router();
const productController = require("../controller/product")

// REST APIs -- C R U D

// CREATE - POST , /product
//req.body se bhejre data
router.post("/",productController.create)
// READ - GET , /products ,read all products
router.get("/",productController.getAll)
//read one product, /products/:id , url params used
router.get("/:id",productController.getOne)
//UPDATE - PUT (overwrite with new data)
router.put("/:id",productController.replace)
//PATCH - modify the data partially
router.patch("/:id",productController.update)
//DELETE - DELETE 
router.delete("/:id",productController.delete)

//can chain them as they are all for productRouter

exports.router = router;