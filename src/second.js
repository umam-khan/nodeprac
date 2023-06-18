fetch("https://localhost:3000", (result)=>{
    result.json().then((jbody)=>{
        console.log(jbody);
    })
})