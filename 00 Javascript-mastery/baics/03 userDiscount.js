// we are going to use Operators in this Program 

let prize = 1000;
let discountPrize =  734.50;

let discountPercentage = (prize - discountPrize)/prize *100;


let roundDiscountPercentage = Math.round(discountPercentage); 

console.log("We got a Discount of total:", roundDiscountPercentage);