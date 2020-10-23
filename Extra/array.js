//1st Create an Array

let hobbies = ['cricket', 'travelling']
console.log("Array elements : ", hobbies );
console.log("Length of given array: ",hobbies.length)
console.log();

//2nd Access an Array item using the index position

console.log("Item at first index :",hobbies[0]);
console.log("Item at last index :",hobbies[hobbies.length - 1]);
console.log();

//3rd Loop over an Array, We can use forEach for hobbies

hobbies.forEach(function(item, index, array) {
console.log(item, index)
})
console.log();

//4th Add an item to the end of an Array

console.log("Add an new hobby using push operation", hobbies.push('Cycling'));
console.log("Pushed element :", hobbies[2]);
console.log();

//5th Remove an elemet using pop

hobbies.pop();
console.log(hobbies);
console.log();

//6th Remove and Add an element at beginning

hobbies.shift();
console.log(hobbies);
hobbies.unshift('cricket');
console.log(hobbies);
console.log();

//7th find the index of an item in the array

let pos= hobbies.indexOf("Delhi");
console.log("index of delhi is",pos);
console.log();

//8th remove an item by index position

let removeditem = hobbies.splice(1, 1);
console.log("removed item", removeditem);
console.log(hobbies);
console.log();

//9th remove items from an index position

let removeditems=hobbies.splice(1,2);
console.log("removed items ", removeditems);
console.log(hobbies);
console.log();

//10th to sort an array
hobbies.sort();
console.log("after sorting = ",hobbies);
console.log();

//11th to concatinate two array

let a=[1,2,3,4];
let b=["R","A","V","I"];
let c= a.concat(b);
console.log("concatinated",a +" and",b + " resulted in", c);
console.log();