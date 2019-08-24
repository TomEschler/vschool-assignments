let name = 'Freedrick'

console.log(name.slice(-2))

console.log(name.slice(0, name.indexOf('d')))

console.log(name.lastIndexOf('Freedrick'))


// ARRAY METHODS

.pop() //removes last element of string
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.pop(); 

.push() //method adds a new element to an array (at the end)
console.log(fruits.push("Kiwi"))

.shift() //Shifting is equivalent to popping, working on the first element instead of the last.
 //method removes the first array element and "shifts" all other elements to a lower index.

.unshift() //method adds a new element to an array (at the beginning), and "unshifts" older elements
//it also a method that returns the new array length when putting in an existing element

.splice() //method can be used to add new items to an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.

//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

.join() // method returns the array as a string.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let energy = fruits.join(" and ");

.indexOf()

.slice() // method returns the selected elements in an array, as a new array object.
// method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);

.concat() // method is used to join two or more arrays.
// This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
let hege = ["Cecilie", "Lone"];
let stale = ["Emil", "Tobias", "Linus"];
let children = hege.concat(stale);

// Join three arrays

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai);

.split()
// method is used to split a string into an array of substrings, and returns the new array.
let str = "How are you doing today?";
let res = str.split(" ");

// the return gets put into a new array

string.split(separator, limit)
// separator	Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)
// limit	Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array

// MAP

let numbers = [65, 44, 12, 4];
let newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}