const input = [1,2,3,4,5];
// solution
// const newarray = [];
// for(let i = 0;i<input.length;i++){
//     newarray.push(input[i] * 2);
// }
// console.log(newarray);
// given an array which value is multiply with 2

function transform(i){
return i * 2;
}
const result = input.map(transform);
console.log(result);