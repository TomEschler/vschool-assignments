// Reduce

// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const shoppingSpree = wishlist.reduce((a, b) => {
//     return {price: a.price + b.price}
// })


// console.log(shoppingSpree);

// Map()

// var arr = [1,2,3,4];

// const x = arr.map(function(item){

//     return item + 1;
// })
// console.log(x)

// // Object Literals


// const largestSwap = (num) => Number(num.toString().split('').reverse().join('')) <= num;

// const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"] 

// function myFunc(param1) {
//     let count=0
//     for (i=0; i< param1.length; i++){
//         if (param1[i] === "computer") {
//             count++
//         }
//     }
//     return count
// }

// console.log(myFunc(officeItems))

// const peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

// function people(hello) {
//     for(i=0; i < hello.length; i++) {
//         if (hello[i].age < 18) {
//             if(hello[i].gender === "male") {
//                 console.log(hello[i].name + " he cannot go")
//             } else {
//                 console.log(hello[i].name + " she cannot go")
//             }
//         } else if(hello[i].gender==="female") {
//             console.log(hello[i].name + " she can go") 
//             }
//             else {
//                 console.log(hello[i].name + " he can go")
//             }
//         } 

//     }


// people(peopleWhoWantToSeeMadMaxFuryRoad)



// var sequence = [1, 1, 2, 3, 5, 8, 13];
// for (var i = 0; i < sequence.length; i++) {
//   console.log(sequence[i]);
// }

// let fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"] 
// function myFunc(x) {
//   for(i=0; i< x.length; i++) {
//   }
// }

// console.log(myFunc(fruit))

// for (i=0; i <= 100; i++) {
//   if (i % 2){
//       console.log('even')
//   } else {
//       console.log('odd')
//   }  
//   console.log(i)

  // var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]; 

// for (i=0; i<officeItems.length; i++) {
//     if (officeItems[i]==='computer'; i++);

//     console.log(officeItems[i])
// }

// function funcName (parameters){
//   // code block
//   console.log(parameters)

// }

// // call function || run function
// // let parameters = 'Hello'
// funcName(parameters)
// // funcName(34)
// // funcName('whats up')
// // funcName([2,3,4,5])

// const animals = ['marcus', 'sam', 'tom', 'john']

// animals.forEach((animal)=> {
//   console.log(person)
// })

//for loops

// function people(hello) {
//   for(i=0; i < hello.length; i++) {
//       if (hello[i].age < 18) {
//           if(hello[i].gender === "male") {
//               console.log(hello[i].name + " he cannot go")
//           } else {
//               console.log(hello[i].name + " she cannot go")
//           }
//       } else if(hello[i].gender==="female") {
//           console.log(hello[i].name + " she can go") 
//           }
//           else {
//               console.log(hello[i].name + " he can go")
//           }
//       } 

//      }

// for (i=0; i <= 100; i++) {
//   if (i % 2){
//       console.log('even')
//   } else {
//       console.log('odd')
    
  // for (let i=0; i<10; i++) {
  //   console.log('hello', i)
  // }

  // let i = 0;
  // while (i<10) {
  //   console.log(i)
  //   i += 1
  // }

//  const array = [
//    'Diana',
//    'Jeff',
//    'Eric'
//  ]

//  for (let i = 0; array.length; i++) {
   
//    if( array[i] === 'Jeff') {
//      return 
//    }
//  }

const eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for(let i=0; i < eventsAtWork.length; i++) {
  if( eventsAtWork[i] === "party"){
    console.log('hooray')
  }
}

// https://repl.it/@ThomasWolfgangW/BronzeRealBackup-2m = 10;


// objects this and function:

// let person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     console.log(this.firstName + " " + this.lastName);
//     }
// }

// var person = {
//   firstName  : "John",
//   lastName   : "Doe",
//   id         : 5566,
//   myFunction : function() {
//     return this;
//   }
// };

// console.log(person.myFunction())
// this calls on the function which returns what 'this' is. this is the global object

var person = {
    name: 'The Joker',
    type: 'evil',
    enemy: 'Batman',
    speak: function () {
        console.log('Why so serious?');
    }
};

console.log(person.speak);  // tells you that this is a Function type in the console since we're not executing it with the () yet.
person.speak();

//add property to object

const person = {
    name: 'Harry',
    age: 11,
    birthday: function () {
        this.age++;
    }
};
person.hair = 'bald';
console.log(person)
