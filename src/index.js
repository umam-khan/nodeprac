const express = require("express");
const cors = require("cors");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

//db connection

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://umamkhan:nP2oomDs61COw0tj@cluster0.6umualh.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

connectDB();

//built in middleware, bodyParser type
app.use(cors()); // for CORS, you can also manually set the cors headers
app.use(express.json());
// router set up instead of using app
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

// all files from "public" folder can be accessed by static
// app.use(express.static("public"));

mongoose.connection.once("open", () => {
  console.log("connected to db");
  app.listen(3001, () => {
    console.log("server started");
  });
});

// NOTES :
//making middleware, this1 acts as a logger of sorts, jo bhi request data aa raha hai
// app.use((req,res,next)=>{
//   console.log(req.method,req.url,req.hostname,req.ip,req.get("User-Agent"), new Date());
//   next();
// })

//4 WAYS to send data with request - ?query, /urlparams, req.body, or even thru req.headers !!

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

//middleware put in the middle below
//sending req data via URL params
// app.get("/product/:id",auth,(req,res)=>{
//   console.log(req.params)
//   res.send("hello params");
// })
//sending req data via ?query
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// //sending using req.body,needs express.json() type body parser
// app.get("/demo",(req,res)=>{
//   console.log(req.body);
//   res.send(req.body);
// })

// SEND YOUR response as an object, easier to extract!!
// var answerObject = {
//   sum: calculatedSum,
// };
// res.status(200).send(answerObject);
