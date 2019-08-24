// MAPPING METHOD

// Multiply all the values in array with 10

let numbers = [65, 44, 12, 4];
let newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}




// Get the full name for each person in the array of Objects:

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  
  function getFullName(item) {
    let fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }
  
  function myFunction() {
    return persons.map(getFullName);
  }
  
  console.log(myFunction())