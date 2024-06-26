//create an array to store companies.

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

//remove the first company from the array.
companies.shift();
console.log(companies);

//remove Uber & add Ola in its place.
companies.splice(1,1,"Ola");
console.log(companies);

//add Amazon at the end
companies.push("Amazon");
console.log(companies);