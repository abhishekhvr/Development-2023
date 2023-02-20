const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(0,0, "coconut", "grapes", "Plum");

for (let index = 0; index < fruits.length; index++) {
   console.log(fruits[index]);
   
}

fruits.splice(0, 3);
console.log();
console.log("After removing elemnts");
console.log();

for (let index = 0; index < fruits.length; index++) {
   console.log(fruits[index]);
   
}