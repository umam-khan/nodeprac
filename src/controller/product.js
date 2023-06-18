const fs = require("fs");

const data = JSON.parse(fs.readFileSync('C:\\Users\\MUBEEN K.000\\Desktop\\nodeprac\\customers\\src'+"\\data.json","utf-8"))
//we got string data, so we do JSON.parse() to convert string to JSON
// console.log(typeof data);
const products = data.products;

exports.create = (req,res)=>{
    products.push(req.body)
     res.send(req.body);
   }
   exports.getAll = (req,res)=>{
    res.send(products);
  }
  exports.getOne = (req,res)=>{
    // console.log(req.params)
    const id = +req.params.id; // to make it into number from string
    const product = products.find( p => p.id === id)
    console.log(product);
    res.send(product);
  }
  exports.replace = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id===id)
    // we will do this in db but in dealing with arrays
    //.splice(startindex, deletecount, items to be added)
    products.splice(productIndex, 1 , {...req.body,id:id})
    // res.send(products[productIndex])
    res.status(201).send("done");
  }
  exports.update = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id===id)
    const product = products[productIndex]
    //spread operator is {...original, toBeReplaced}
    products.splice(productIndex,1,{...product, ...req.body})
    res.status(201).send("done");
  }
  exports.delete = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id===id)
    const product = products[productIndex]
    //spread operator is {...original, toBeReplaced}
    products.splice(productIndex,1)
    res.send("done");
  }

 //exporting all of these