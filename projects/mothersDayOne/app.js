const ask = require('readline-sync')
const c = console.log
const space = `\n`
let username = ask.question('What is your name?',space);

c(space,'Hello ' + username + '!',space);

function Player(name) {
    this.name = name;
    this.heart = 1;
    this.family = ['Matt']
}

const mom = new Player(username);

function Family (name,lovePoint,love) {
    this.name = name;
    this.love = love;
    this.lovePoint = function() {
        return Math.floor(Math.random() * lovePoint) +1
    };
}


const nephi = new Family('Nephi', 1, '"You are alwys really positive and I love how excited you get when you see me."');
const sariah = new Family('Sariah', 1, '"You are always willing to listen to me ramble on the phone for hours. It makes me feel special."');
const austin = new Family('Austin', 1, '"You are cool, calm and collected."');
const audrey = new Family('Audrey', 1, '"You are so beautiful and full of light"');
const wolf = new Family('wolf', 1, '"I can always tell that you love me. People come and go but moms last forever."');
const kids = [nephi, audrey, sariah, austin, wolf];


c(space,"You got pretty drunk off of soup last night.",space);

familyList();

function familyList() {
    let question = ask.keyIn("Do you remember who's in your family? -Check family press [f]", {limit: 'f'},space)
        if(question === 'f') {
            c(space, mom.family, "Heart Level: ",mom.heart,space);
        } 
}
c("It looks like you're missing your favorite child!",space, "and your heart level is only at 1!",space,space, "let's go find your family.",space);

searchQuestion()

function searchQuestion() {
    let question = ask.keyIn('enter [s] to search for kids', {limit: 's'})
    if( question === 's'){
        search()
    }
}
function search() {
    let chance = Math.random()*4;
    if(chance < 2) {
        searchQuestion()
    } else {
        c(space, '"Hello Mom!"',space)
        who()
    }
}

function who() {
    // let kid = kids[Math.floor(Math.random()*kids.length)];
    let question = ask.keyIn('-ask Who are you? [a]', {limit: 'a'},space);
    if(question === 'a') {
        confront()
    }
}

function confront() {
    // let kid = kids[Math.floor(Math.random()*kids.length)];
    c(space,"Its me wolf")
    c('"can I tell you why I love you as my mom?"',space)
    
    let hello = ask.keyIn( ` -enter [y] yes or [n] no! get lost weirdo`, {limit:"yn"});
        if(hello === 'y') {
            c(space,` ${wolf.love}`,space);
            keep()
            
        } else {
            search()
        }
        
    }
    
    function keep() {
        const speech = ['wolf', 'sariah', 'nephi','all are my favorite']
        let q=ask.keyInSelect(speech,'who is your favorite child?',{limit:[1]});
    
        if(speech === 'wolf') {
            c('you are correct!');
            
} else {
    keep()
}
       }