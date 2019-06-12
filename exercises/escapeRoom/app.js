const readlineSync = require('readline-sync');


var name= readlineSync.question("what is your name?");
console.log('hi ' + name + '!', ' you are trapped in a room with a locked door and a hole in the wall beside it.');

const options=['put hand in hole', 'find the key', 'open the door']
let gameOver=false
    while(!gameOver) {
        let index=readlineSync.keyInSelect(options, ' what should you do?');
        if (options[index] === 'open the door') {
            console.log('the door is locked dummy, try something else')
        } else if(options[index] === 'find the key') {
            gameOver=true
            console.log('you escaped death!')
        } else {
            gameOver=true
            console.log('you died!')
        }
}