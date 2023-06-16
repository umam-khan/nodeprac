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

app.get("/",(req,res)=>{
  // res.send("hello")
  res.json(data);
})

app.listen(3000,()=>{
  console.log("server started")
})