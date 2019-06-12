// function myFunc (param1, param2) {
// console.log(param1 + param2)
    
// }

// myFunc(1,2)

// function myfunc2(slotOne,slotTwo) {
//     return slotOne  + slotTwo
// }
// console.log(myfunc2('hello ', 'there'))




// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]; 

// for (i=0; i<officeItems.length; i++) {
//     if (officeItems[i]==='computer'; i++);

//     console.log(officeItems[i])
// }



const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];


const newArr= vegetables.pop();
fruit.shift();
const index=fruit.indexOf("orange");
fruit.push(index)
const indexVegetables=vegetables.length;
vegetables.push(indexVegetables);
const food= fruit.concat(vegetables);
food.splice(4,2)
food.reverse();
food.join(',');


console.log(food)







//  Find the index of "orange."
// const newArr= fruit.indexOf('orange',0)
// // console.log(newArr)

// // Add that number to the end of the fruit array.
// // console.log(newArr)
// // console.log(fruit)

// const newArr= fruit.length
// const newArr=vegetables.push(4)

// // Put the two arrays together into one array. Fruit first. Call the new Array "food".
// const food= fruit.concat(vegetables);//


// console.log(food)
// console.log(fruit)
// console.log(vegetables)


