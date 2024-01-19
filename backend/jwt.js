const jwt = require("jsonwebtoken")


// decode,verify,generate
const value = {
    name:"sangeeta",
    accountnumber : 123123
}
// sign is not generate
const token = jwt.sign(value,"secret")
console.log(token);

// this token be generated using this secret and verified using this secret
// jwt 
// verify
const verifyvalue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FuZ2VldGEiLCJhY2NvdW50bnVtYmVyIjoxMjMxMjMsImlhdCI6MTcwNTU5MDA5Nn0.4IfmBy4s6_C1eEDcrAGfSdmnxm6GbYlxLxcPELbgRww","secret")
console.log(verifyvalue);
