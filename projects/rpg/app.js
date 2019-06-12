const ask=require('readline-sync')
console.log ('welcome to STAR STRIKERS! Celebrity Gold Version.')

let username = ask.question('which celebrity actor should play as you on this journey? ');

console.log('Welcome ' + username + '!', 'you have just been nominated for an Oscar! However other celebrities are upset with your success and they will do anything to prevent you from making it to the Oscar ceremony.');

function player(name) {
    this.name = name;
    this.hp = 12;
    this.inventory = ["acceptance speech"];
    attackSlap = function() {
        return Math.floor(Math.random() * 10)
    }
    attackFlash = function() {
        return Math.floor(Math.random()* 5)
    }
}

let mainPlayer = new player (username);



function Enemy (name, hp, num) {
    this.name = name;
    this.hp = hp;
    this.attack = function() {
        return Math.floor(Math.random()*num)
    }
}

const diCaprio = new Enemy('Leonardo DiCaprio', 15, 8);
const willSmith = new Enemy('Will Smith', 8, 8);
const streep = new Enemy('Meryl Streep', 15, 9);
const enemies = [diCaprio, willSmith, streep];
const gameEnd = false;


function walk() {
    let action = ask.keyIn('Press [w] to walk, [i] to check inventory.', {limit: 'wi'})
        if(action === 'w') {
            celebrityEncounter()
        } else if (action === 'i') {
            console.log(`${player.inventory}`)
        }
}

function celebrityEncounter() {
    let chance = Math.random() * 4;
    if (chance <3) {
        walk();
    } else {
        confront()
    }
}

function confront() { 
    console.log(enemies)
    let fighter = enemies[Math.floor(Math.random()* enemies.length)];
    let hello = ask.keyIn(`'"Hello ' ${player.name} it is I ${fighter.name}, do you wish to run [r], or fight me?" [f] `, {limit: 'rf'});
    if (hello === 'f') {
        fight()
    } else if (let === 'r') {
        console.log(`'unfortunately ${fighter.name} is to famous to run away from, thus you must fight'`) 
        fight()
    }
}

function fight(fighter) {
    console.log(fighter)
    while (fighter.hp >0 && gameEnd ===false) {
        if (mainPlayer.hp <= 0) {
            console.log("you lose")
            gameEnd
        } 
        let attackAction = ask.keyIn('attack: [s] slap, [f] flash famous smile', {limit: 'sf'});
        if (attackAction === 's') {
            fighter.hp -= mainPlayer.attackSlap;
            mainPlayer.hp -= fighter.attack;
            console.log(`enemy hp now ${enemy.hp} your hp: \n${mainPlayer.hp}`)
        } else if (attackAction === 'f') {
            enemy.hp -= mainPlayer.attackFlash;
            mainPlayer.hp -= fighter.attack;
            console.log(`enemy hp now ${fighter.hp} your hp: \n${mainPlayer.hp}`)
        } 

        if (fighter.hp <= 0) {
            console.log(`you killed ${fighter.name} and added an item to your bag`)
            finish()
        }
    }
}

function finish() {
    mainPlayer.inventory.push(" and Ray Bans")
    let final= ask.keyIn(`You made it to the Oscars! Check your bag [b] to make sure you have everything you need. `, {limit: 'b'})
    if(final === 'b')
    console.log(`You have: ${mainPlayer.inventory} looks like you have all you need!`)
    winner()
}

function winner() {
    let acceptance = ask.keyIn('"And the award for best actor goes to... ' +username+ ` do you accept the oscar [y]`, {limit: 'y'})
    if (acceptance === 'y') {
        endingSpeech()
    }
}

function endingSpeech() {
    const speech = ['God', 'Mom', 'Wonderful cast', 'Myself']
    let gameOver=false
    while(!gameOver) {
        let index=ask.keyInSelect(speech, ' You won the Oscar! who do you to thank in your acceptance speech?');
        if (speech[index] === 'Myself') {
            gameOver=true
            console.log('you win!')
        } else {
            gameOver=true
            console.log('Kanye jumps on the stage and steals your Oscar')
        }
    }
}

// let random = Math.floor(Math.random()* 6)
// if(random === 1) {
//     console.log('you missed')
// } else {
//     fighter.hp -= mainPlayer.attack()
//     mainPlayer.hp -= fighter.attack()
//     console.log(` ${fighter.name} slapped you. \n${username}'s hp is now ${mainPlayer.hp} \n ${username} threw a punch \n${fighter.name}'s hp is now ${fighter.hp}`)
// } if(fighter.hp <= 0) {
//     console.log(`you killed ${fighter.name} and added an item to your bag`)
//     return finish()
// } else if (mainPlayer.hp <= 0){
//     console.log('you lose')
//     return  false;
    
// }