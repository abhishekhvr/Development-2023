/* 

Define a function that can answer role of a user 

A user can have following roles:
admin - with all access
subadmin - with access to create/delete course
testprep - get access to create/delete any test
user - get access to consume content
other - trial , user .

input: GetUserRole(name, role) 

*/

function roleFunction(name, role) {
   switch (role) {
      case "admin":
    console.log(name + ", You gets the full access");
    break;
  case "subadmin":
    console.log(name + ", You gets access to create/delete any course");
    break;
  case "testprep":
    console.log(name + ", You gets access to create/delete any test");
    break;
  case "user":
    console.log(name + ", You gets access to consume content");
    break;

  default:
    break;
   }
}


let printRole = roleFunction ("Abhish", "admin");