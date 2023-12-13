function square(n){
return n*n;
} 
function cube(n){
    return n*n*n;
}
// generic
function sumOfSquare(a,b,fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return  square1 + square2;
}
function sumofQube(a,b,fncallback){
    let cube1 = fncallback(a);
    let cube2 = fncallback(b);
    return cube1 + cube2;
}
// passing the function as argument
let result1 = sumofQube(1,2,cube)
console.log(result1);
// functional arguments
let result = sumOfSquare(2,3,square);
console.log(result);