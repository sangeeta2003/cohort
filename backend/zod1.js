// if there is a array of string atleast 1 input ,return true ,else false
// function validInput(array){
//         if(typeof array == "object" && array.length >=1 && array[0] == "number"){

//         }
// }


// const zod = require('zod');
// function validInput(array){
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(array);
//     console.log(response)
// }
// validInput([1,2,3]);
 

// email and password
const zod = require('zod');
function validInput(object){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
     const response = schema.safeParse(object);
    console.log(response)
}
validInput ({
    email:"sangeeta944@gmail.com",
    password:"12345678"
})
