const readlineSync = require('readline-sync')

// console.log(readlineSync)

// let answer= readlineSync.keyInYN('Don you like tacos with nutella')

// let crazy;
// if(answer) {
//    crazy = readlineSync.keyInYN('Are you cray cray')
// } else {
//     console.log('bye')
// }

// if(crazy) {
//     console.log('Me too')
// }



const states = ['California', 'Oregon', 'Wyoming','Hawaii']

let gameOver= false
while(!gameOver) {
    let index = readlineSync.keyInSelect(states,'Which stat should we sell to Canada?')
    if(states[index] !== 'Oregon') {
        console.log('Wrong answer, guess again')
        
    } else {
        gameOver = true
        console.log('good idea. bye')
    }
    
}

