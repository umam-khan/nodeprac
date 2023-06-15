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

app.get("/",(req,res)=>{
  res.send(myFile);
})


app.listen(3000,()=>{
  console.log("server started")
})