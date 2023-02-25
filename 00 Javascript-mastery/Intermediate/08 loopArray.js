let arrayFruit = ["mango", "grapes", "Apple", "Orange"];

for (let index = 0; index < arrayFruit.length; index++) {
   console.log("Fruits number " + index +  " is " + arrayFruit[index]);
   
}

Array.isArray(arrayFruit);
console.log("Yessss this is "+ Array.isArray(arrayFruit));


console.log(arrayFruit.toString());
console.log(arrayFruit.join());

console.log(arrayFruit.length);
arrayFruit.shift();

for (let index = 0; index < arrayFruit.length; index++) {
   console.log("Fruits number " + index +  " is " + arrayFruit[index]);
   
}

console.log();
arrayFruit.unshift("coconut");
console.log("After shift");
console.log();
for (let index = 0; index < arrayFruit.length; index++) {
   console.log("Fruits number " + index +  " is " + arrayFruit[index]);
   
}