var user = {
   firstName : "Abhishek",
   lastName : "Kumar",
   role : "Admin",
   loginCount : 32,
   facebookSignedIn : true,
};

console.log(user.firstName);
console.log(user["role"]);

console.log(user.loginCount);

user.loginCount = 50;
console.log(user.loginCount);

console.log(user.firstName)


console.log(user.lastName)