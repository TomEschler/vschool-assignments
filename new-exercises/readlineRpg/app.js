const readline = require('readline-sync')

//////////////////
// Global Variables
let gameOver = false

const player = {
    name: "",
    health: 100
}



////////////////////
// Game Functions //
function walk(){
    console.log("I Went Walking")

    // random number between 0 - 2
    const randomNum = Math.floor(Math.random() * 3) 
    // random number bewteen 25 - 49
    // const randomNum = Math.floor(Math.random() * (50 - 25) + 25) 
 
    if(randomNum === 0){ // an enemy appears
        // const enemy = generateEnemy()
        // fight(enemy)
    }
}


/////////////
// Game 
console.log("Welcome to my game!")

player.name = readline.question("What is your name?: ")

console.log(`Thank you ${player.name}`)


while(!gameOver){
    const userChoice = readline.keyInSelect(["walk"], "What would you like to do?")

    if(userChoice === 0){
        walk()
    } else if(userChoice === -1){
        console.log("You cant cancel")
    }

}

//

const ask = require('readline-sync');


let username = ask.question(`You're so tired... 
    you might not even remember your own name.. 
        ..what is your name? 
        
        `);

let individual = new Person(username);

function Person(name) {
    this.name = name;
    this.hp = 1000;
    this.inventory = [];
    this.hasEnergy = true;
    this.isHome = false;
    this.talk = function () {
        return Math.floor(Math.random() * 70)
    }
}

function Enemy(name, hp, num, sh) {
    this.name = name;
    this.hp = hp;
    this.sh = sh
    this.talk = function () {
        return Math.floor(Math.random() * num)
    }
}

const closeFriend = new Enemy('Close friend', 500, 50, 500)
const oldFriend = new Enemy('An old high-school friend', 400, 150, 400)
const coWorker = new Enemy('A co-worker', 250, 75, 250)
const niceStranger = new Enemy('A nice old person', 75, 25, 100)
const lostStranger = new Enemy('A tourist', 100, 125, 100)
const crazyStranger = new Enemy('A ...wtf is that ?...', 125, 200, 100)

const enemies = [closeFriend, oldFriend, coWorker, niceStranger, lostStranger, crazyStranger]

let className = ask.keyIn(`    ..${individual.name} 
..Okay it's definitely ${individual.name}... 
    well, do you remember what kind of person you are? 
press [I] for Introvert
press [E] for Extrovert
press [O] for Omnivert
press [V] for Vegan-cross-fit `, {
    limit: 'ieov'
})

function inventory() {
    if (className === "i") {
        individual.inventory = [hideAttack, hideAttack, hideAttack,]
        individual.hp -= 600
    } else if (className === "e") {
        individual.inventory = [phoneCall]
        individual.hp += 100
    } else if (className === "o") {
        individual.inventory = [phoneCall, hideAttack]
        individual.hp -= 100
    } else if (className === "v") {
        individual.inventory = [gloatHard, gloatHard]
        individual.hp -= 200
    }
}
inventory()


function gameStart() {
    let effIt = ask.keyIn(`
Okay ${individual.name} let's just try to get to the crib
*press [w] to walk down the block or [q] to quit*`, {
        limit: 'wq'
    })
    if (effIt === 'q') {
        individual.hasEnergy = false
        console.log(`
            game over.
        you've become a hermit for a week`)
    }
}
gameStart()

function walk() {
    let random = Math.floor(Math.random() * 4) + 1
    if (random < 3 && individual.hp > 0) {
        console.log(`
        You made it passed another block`)
    } else if (random >= 3 && individual.hp > 0) {
        interaction()
    } else if (random >= 0 && individual.hp < 0) {
        individual.hasEnergy = false
        console.log(`you're too tired for life right now
        game over.
            you've become a hermit for a week.`)
    }
}

function interaction() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]
    enemy.hp = enemy.sh
    let action = ask.keyIn(`
    ${enemy.name} is walking towards you. Seems like his energy is at ${enemy.hp}
            would you like to talk [t] ? 
        your energy for this shit is at ${individual.hp} `, {limit: 't'})
    if (action === 't') { //then
        while (enemy.hp > 0 && individual.hp > 0) {
            let random = Math.floor(Math.random() * 4)

            if (individual.hp <= 0) {
                individual.hasEnergy = false
                console.log(`you're too tired for life right now
                game over.
                    you've become a hermit for a week.`)
            } else {talk(enemy)}

            let question = ask.keyIn(`
                    keep talking [t], try your ability [s] you have
                ${individual.inventory.length} remaining `, {limit: 'tsp'})

            if (question === 't') {
                if (individual.hp <= 0) {
                    individual.hasEnergy = false
                    console.log(`you're too tired for life right now
                    game over.
                        you've become a hermit for a week.`)
                } else {talk(enemy)}
            } else if (question === 's') {
                    specialAttack(enemy)
            }
            if (enemy.hp <= 10 && random === 2) {
                console.log(`your energy is at: ${individual.hp}
                conversation was not bad + 150`)
                individual.hp += 150
                console.log(`
                    ${enemy.name} gave you the confidence for a special attack `)
                individual.inventory.push(individual.inventory[0])
                console.log(`you have ${individual.inventory.length} now
            and your energy for this shit is at ${individual.hp}`)
            }
        }
    }
    else if (individual.hp <= 0) {
        individual.hasEnergy = false
        console.log(`Whatever
            game over...`)
    }
}


















