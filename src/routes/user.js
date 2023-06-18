const express = require("express");
const router = express.Router();
const userController = require("../controller/user")

// REST APIs -- C R U D

// CREATE - POST , /product
//req.body se bhejre data
router.post("/",userController.create)
// READ - GET , /products ,read all products
router.get("/",userController.getAll)
//read one product, /products/:id , url params used
router.get("/:id",userController.getOne)
//UPDATE - PUT (overwrite with new data)
router.put("/:id",userController.replace)
//PATCH - modify the data partially
router.patch("/:id",userController.update)
//DELETE - DELETE 
router.delete("/:id",userController.delete)

//can chain them as they are all for productRouter

exports.router = router;