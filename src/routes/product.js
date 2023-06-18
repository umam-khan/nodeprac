const express = require("express");
const router = express.Router();
const productController = require("../controller/product")

// REST APIs -- C R U D
// CREATE - POST , /product
//req.body se bhejre data
router.post("/product",productController.createProduct)
// READ - GET , /products ,read all products
router.get("/products",productController.getAll)
//read one product, /products/:id , url params used
router.get("/products/:id",productController.getAproduct)
//UPDATE - PUT (overwrite with new data)
router.put("/products/:id",productController.replaceProduct)
//PATCH - modify the data partially
router.patch("/products/:id",productController.updateProduct)
//DELETE - DELETE 
router.delete("/products/:id",productController.deleteProduct)

//can chain them as they are all for productRouter

exports.router = router;