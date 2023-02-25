// Create an application with following rules
// admin - gets full access
// subadmin - get access to create/delete any course
// testprep - get access to create/delete any test
// user - get access to consume content

let role = "user";
switch (role) {
  case "admin":
    console.log("You gets the full access");
    break;
  case "subadmin":
    console.log("You gets access to create/delete any course");
    break;
  case "testprep":
    console.log("You gets access to create/delete any test");
    break;
  case "user":
    console.log("You gets access to consume content");
    break;

  default:
    break;
}
