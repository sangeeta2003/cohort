const express = require('express');
const app = express();
app.use(express.json());

app.post('/health-checkup',function(req,res){
    // do something with kidneys here
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;
    res.send("your kidney length is" + kidneylength +"kidneys")
})
// global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with our server"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
