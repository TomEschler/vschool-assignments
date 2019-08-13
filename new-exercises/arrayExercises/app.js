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

// Object Literals


const largestSwap = (num) => Number(num.toString().split('').reverse().join('')) <= num;