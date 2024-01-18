const express = require('express');
const app = express()
// function that return age of the person is greater than 14
// function isAge(age){
//     if(age >= 14){
//         return true
//     }
//     else {
//         return false
//     }
// }


// using middleware
function isOldMiddleware(req,res,next){
const age = req.query.age;
if(age >= 14){
    next()
}
else{
    res.status(401).json({
        msg:"you are not allowed"
    })
}
}
app.use(isOldMiddleware)
app.get('/ride2',function(req,res){
    
        res.json(
            {
                msg:"you have successfully ride the ride2"
            }
        )}
)
app.get('/ride1',function(req,res){
   
        res.json(
            {
                msg:"you have successfully ride the ride1"
            }
        )}
        
    
)
app.listen(3000);