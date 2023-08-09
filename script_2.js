
//  let done = true;
// let x = 0;
//  while ( done){
//  if (i[x] === undefined){
// done = false;
//  break;
//  }
//  console.log(i[x]);
//  x++;
//  }

// function myMap(arr, func){
// let result = [];
// let x = 0;
// let done = true;
// while (done){
// if (arr[x] === undefined){
// done = false;
// break;
// }
// result[x]=func(arr [x]);
// x++;
// }
// return result;
// }
// let newArr = myMap(i,(el)=> el*2);
// console.log(newArr);

// function myMap(arr, funk){
// let resArr = [];
// let done = true;
// for( let i = 0;done === true;i++){
// if (arr [i]===undefined){
// done === false;
// break;
// }
// resArr[i] = funk(arr[i]);
// }
// return resArr;
// }
// let c = myMap ( [1, 56, 879],(el)=> el*2);
// console.log(c);\

// let number = [2,6,9,4,0];
// function fung(arr, start, end){
// let resArr = [];
// let x =0;
// for (let i = start; i<end; i++){
// resArr[x] =arr[i];
// x++;
// }
// return resArr;
// }
// let d = fung([2,6,9,4,0],2,5);
// console.log(d);

let mass = [2,3,4,5,5,5,5,7];
function myFind(arr,value){
let key;
let done = true;
for(let i = 0;done;i++){
if (arr[i]===undefined){
done = false;
continue;
}
if(arr[i]===value){
key=i;
break;
}
}

return key;
}
console.log(myFind(mass,45));