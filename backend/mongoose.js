const express = require('express')
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

const User = mongoose.model('Users',{ name: String,email:String ,password:String});

app.post("/signup",function(req,res){
    const username = req.body.username;
    const email= req.body.email;
    const password=req.body.password;
    const exituser = User.findOne({email:username});
    if(exituser){
        return res.status(400).send("username already exists")
    }
})

const user= new User({name : username,
email:email,
password:password});
user.save();
res.json({
msg:"username created successfully"
})
.then(() => {
    console.log('User saved successfully');
    mongoose.connection.close(); // Close the connection after saving
  })
  .catch((error) => {
    console.error('Error saving user:', error);
    mongoose.connection.close(); // Close the connection in case of an error
  });
