//const i = 10;
//const t = 20;

/*
function multifyNum(a : number, b : number){
  return a * b;
}

console.log(multifyNum(10,20));

function divideNum(c : number, d : number){
 return c / d;
}

console.log(divideNum(50,10));
*/

function exampleOne(object : object){
  let value : Array<string> = [];
  for(let key in object){
    //value += object[key];
    value.push(key);
  }
  return value;
}

let test = {
  name : 'jin',
  age : 25,
  job : 'developer'
}


console.log(exampleOne(test));