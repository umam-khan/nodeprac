const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const Customer = require("./models/Customer")

if(process.env.NODE_ENV !== 'production')
{
    dotenv.config();
}


const app = express(); // creating an instance of it
mongoose.set('strictQuery', false)
//to make sure all our data is parsed and body is not undefined, do this
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//mongodb+srv://umamkhan:<password>@cluster0.qhqamwv.mongodb.net/?retryWrites=true&w=majority
const PORT = process.env.PORT || 3000;
const CONNECT = process.env.CONNECT;

const json = {
	"name": "miles",
	"surname": "morales",
	"powers": {
		"ingame": "all",
		"movie": ["venom", "smart"]
	}
}

const customer = new Customer({
    name: "2099",
    power: "timetravel"
});


app.get('/api/spidey' , async (req, res) => {
    try {   
        const result = await Customer.find();
        res.send({"data" : result } );
        }
        catch(e)
        {
            res.status(500).json({errorM : e.message})
        }
 
})
app.get('/', (req, res) =>{
    res.send("welcome !")
})
// by DEFAULT browser uses GET
//res is the response object of the current request, and res.send() is used to send the response can contain text, html ,json 
// when GET req is made at "/" url, then the callback function is executed
// to check POST or other methods, we use postman 

app.post("/", (req,res) => {
    res.send("this is a post request");
})
// we can send data in the POST req body
app.post("/api/spidey", (req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

const start = async() => {
    try {await mongoose.connect(CONNECT);
// we have to NOT show our connection string
// we should read it from a file locally on our system so that not everyone can see it 
    app.listen(PORT, ()=> {
        console.log(`app listening on port ${PORT}`);
    })}
    catch(err)
    {
        console.log(err.message)
    }
}

start();