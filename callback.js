function square(n){
return n*n;
} 
function cube(n){
    return n*n*n;
}
function sumOfSquare(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return  square1 + square2;
}
let result = sumOfSquare(2,3);
console.log(result);