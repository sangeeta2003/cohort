const express = require('express');
const app = express();
// rate limiting
let numberOfRequest = 0;
function calculateRequest(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next()
}
app.use(express.json())
app.use(calculateRequest)
app.post('/health-checkup2',function(req,res){
    res.json({
        msg:"hi there"
    })
})

app.get('/health-checkup1', function (req, res) {
    
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
