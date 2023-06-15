const express = require("express");
const fs = require("fs");

const myFile = fs.readFileSync(__dirname+"\\index.html","utf-8",(err,data)=>{
  if(err)
  {
    console.log(err)
  }

  return data;
})
const app = express();
//built in middleware, bodyParser type
app.use(express.json());
// app.use(express.static());
//making middleware, this1 acts as a logger of sorts, jo bhi request data aa raha hai 
// app.use((req,res,next)=>{
//   console.log(req.method,req.url,req.hostname,req.ip,req.get("User-Agent"), new Date());
//   next();
// })

//3 WAYS to send data with request - ?query, /urlparams, req.body !!


// can use middleware at application level, or route level also
const auth =(req,res,next)=>{
  // console.log(req.query); // it returns an object in express
  // if(req.params == 123){
    
  // }
  // else{
  //   res.send("unauthorized")
  // }
  next();
};

// apis - endpoints
//middleware middle mei dala idhar
app.get("/product/:id",auth,(req,res)=>{
  console.log(req.params)
  res.send("hello");
})


app.listen(3000,()=>{
  console.log("server started")
})