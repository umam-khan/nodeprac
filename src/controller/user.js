const fs = require("fs");

const data = JSON.parse(fs.readFileSync('C:\\Users\\MUBEEN K.000\\Desktop\\nodeprac\\customers\\src'+"\\data.json","utf-8"))
//we got string data, so we do JSON.parse() to convert string to JSON
console.log(typeof data);
const users = data.users;

exports.create = (req,res)=>{
    users.push(req.body)
     res.send(req.body);
   }
   exports.getAll = (req,res)=>{
    res.send(users);
  }
  exports.getOne = (req,res)=>{
    // console.log(req.params)
    const id = +req.params.id; // to make it into number from string
    const user = users.find( p => p.id === id)
    console.log(user);
    res.send(user);
  }
  exports.replace = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id===id)
    // we will do this in db but in dealing with arrays
    //.splice(startindex, deletecount, items to be added)
    users.splice(userIndex, 1 , {...req.body,id:id})
    res.status(201);
  }
  exports.update = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id===id)
    const user = users[userIndex]
    //spread operator is {...original, toBeReplaced}
    users.splice(userIndex,1,{...user, ...req.body})
  }
  exports.delete = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id===id)
    const user = users[userIndex]
    //spread operator is {...original, toBeReplaced}
    users.splice(userIndex,1)
    res.send("done");
  }

 