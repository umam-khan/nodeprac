const express = require("express");
const router = express.Router();
const productController = require("../controller/product")

//all our callback functions in controller folder

// REST APIs -- C R U D

// CREATE - POST , /product
//req.body to send data
router.post("/",productController.create)
// READ - GET , /products ,read all products
.get("/",productController.getAll)
//read one product, /products/:id , url params used
.get("/:id",productController.getOne)
//UPDATE - PUT (overwrite with new data)
.put("/:id",productController.replace)
//PATCH - modify the data partially
.patch("/:id",productController.update)
//DELETE - DELETE 
.delete("/:id",productController.delete)

//can chain them as they are all for productRouter

exports.router = router;