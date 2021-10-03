var nameVar = "mohsen";

var nameVar = "mike";
console.log("nameVar", nameVar);

let nameLet = "jen";

nameLet = "ali";

console.log("nameLet", nameLet);

const nameConst = "frank";

console.log("nameConst", nameConst);

// Block scoping

const fullName = "jen Mead";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
