// creating an http server
const express = require('express');
const app = express();

function sum(n){
    let ans = 0;
for(let i= 0;i<=n;i++){
ans = ans+i;
}
}
app.get('/',function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("hy there" + ans)
})
app.listen(3000);
console.log("run the server")