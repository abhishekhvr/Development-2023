/* const objectSocials = [
   "Facebook",
   "Google",
   "Instagram",
   "Twitter"
]

for (const i of objectSocials){
   console.log(i);
}

*/

const symbols = {
   yt: "Youtube",
   ig: "Instagram",
   tw: "Twitter",
   fb: "Facebook"
}

for (const i in symbols){
   console.log(`keys of symbols are: ${i} and Objects are: ${symbols[i]}`);
}