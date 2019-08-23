
let goomba = document.getElementById('goombas')
let bobomb = document.getElementById('bobombs')
let cheep = document.getElementById('cheepcheeps')

    


document.getElementById('sum').addEventListener('submit', function(e) {
    e.preventDefault()
    const total = (goomba.value * 5) + (bobomb.value * 7) + (cheep.value * 11);
    
    
    let answer = document.getElementById('numberTotal');
    answer.innerText = "total is: " + total;
    
    console.log(total)

    goomba.value = "";
    bobomb.value = "";
    cheep.value = "";
})
