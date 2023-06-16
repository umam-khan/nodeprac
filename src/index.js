const express = require("express");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync(__dirname+"\\data.json","utf-8"))

//we got string data, so we do JSON.parse() to convert string to JSON
console.log(typeof data);
const products = data.products;


//example of fs module
// const myFile = fs.readFileSync(__dirname+"\\index.html","utf-8",(err,data)=>{
//   if(err)
//   {
//     console.log(err)
//   }
//   return data;
// })

const app = express();
//built in middleware, bodyParser type
app.use(express.json());

// all files from "public" folder can be accessed by static
// app.use(express.static("public"));


//making middleware, this1 acts as a logger of sorts, jo bhi request data aa raha hai 
// app.use((req,res,next)=>{
//   console.log(req.method,req.url,req.hostname,req.ip,req.get("User-Agent"), new Date());
//   next();
// })



//3 WAYS to send data with request - ?query, /urlparams, req.body !!


// can use middleware at application level, or route level also
// const auth =(req,res,next)=>{
  // console.log(req.query); // it returns an object in express
  // if(req.params == 123){
    // next()
  // }
  // else{
  //   res.send("unauthorized")
  // }
// };

// apis - endpoints
//middleware middle mei dala idhar

//sending req data via URL params
// app.get("/product/:id",auth,(req,res)=>{
//   console.log(req.params)
//   res.send("hello params");
// })
// //sending req data via ?query
// app.get("/",(req,res)=>{
//   console.log(req.query);
//   res.send("hello");
// })
// //sending using req.body,needs express.json() type body parser
// app.get("/demo",(req,res)=>{
//   console.log(req.body);
//   res.send(req.body);
// })

// REST APIs -- C R U D

// CREATE - POST , /product
//req.body se bhejre data
app.post("/product",(req,res)=>{
 products.push(req.body)
  res.send(req.body);
})


// READ - GET , /products ,read all products
app.get("/products",(req,res)=>{
  res.send(products);
})
//read one product, /products/:id , url params used
app.get("/products/:id",(req,res)=>{
  // console.log(req.params)
  const id = +req.params.id; // to make it into number from string
  const product = products.find( p => p.id === id)
  console.log(product);
  res.send(product);
})

//UPDATE - PUT (overwrite with new data)
app.put("/products/:id",(req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id===id)
  // we will do this in db but in dealing with arrays
  //.splice(startindex, deletecount, items to be added)
  products.splice(productIndex, 1 , {...req.body,id:id})
  // res.send(products[productIndex])
  res.status(201);
})
//PATCH - modify the data partially
app.patch("/products/:id",(req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id===id)
  const product = products[productIndex]
  //spread operator is {...original, toBeReplaced}
  products.splice(productIndex,1,{...product, ...req.body})
})

//DELETE - DELETE 
app.delete("/products/:id",(req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id===id)
  const product = products[productIndex]
  //spread operator is {...original, toBeReplaced}
  products.splice(productIndex,1)
  res.send("done");
})
app.listen(3000,()=>{
  console.log("server started")
})