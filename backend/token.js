// this is my token jwt
// a jwt token
const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "12345";
const app = express()

app.use(express.json());
const ALL_VALUES = [
    {
        username:"sangeeta123@gmail.com",
        password :"123",
        name:"sangeeta mishra"
    },
    {
        username:"Ram123@gmail.com",
        password :'12331',
        name:"sangeeta mishra"
    },
    {
        username:"priya123@gmail.com",
    password :'1234',
    name:"sangeeta mishra"
},

];
function userExit(username,password){
    // write the logic to return true or false if this user exit 
    // in all_users array
    // hard todo
    let userExit = false;
    for(let i = 0;i< ALL_VALUES.length;i++){
        if(ALL_VALUES[i].username == username && ALL_VALUES[i].password == password){
            userExit = true;
        }
    }
    return userExit;
}
app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;


    if(!userExit(username,password)){
        return res.status(403).json({
            msg:"user doesn't exit in our in memory db"
        })
    }
    var token = jwt.sign({username :username},jwtPassword);
    return res.json({
        token,
    })
}
);
app.get('/users',function(req,res){
    const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token.jwtPassword);
//         const username = decoded.username;
//         // return a list of users other than this users

//     }
//     catch(err){
// return res.status(403).json({
//     msg:"invalid token",
// })
    // }
    const decoded = jwt.verify(token,jwtPassword);
         const username = decoded.username;
         res.json({
            username:ALL_VALUES
         })
});
app.listen(3000)