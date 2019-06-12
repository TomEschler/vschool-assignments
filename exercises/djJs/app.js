document.getElementById("box1").addEventListener ('mouseover', function() {
    this.style.backgroundColor = 'blue'
})

document.getElementById("box1").addEventListener ('mousedown', function() {
    document.getElementById('box1').style.backgroundColor = 'red'
})

document.getElementById("box1").addEventListener ('mouseup', function() {
    document.getElementById('box1').style.backgroundColor = 'yellow'
})

document.getElementById("box1").addEventListener ('dblclick', function() {
    document.getElementById('box1').style.backgroundColor = 'green'
})

window.addEventListener ('scroll', function() {
    document.getElementById('box1').style.backgroundColor = 'orange'
})

document.getElementById('first-name').value


let form= document.words

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let noun = form.noun.value
    let adverb = form.adverb.value
    let verb = form.verb.value
  let madLib= "The wonderful" + noun + " did" + adverb + " " + verb + " at Vschool"
})