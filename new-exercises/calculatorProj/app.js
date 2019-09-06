let addition1 = document.getElementsById('add1');
let addition2 = document.getElementById('add2');


document.getElementsById('add').addEventListener('click', function(e) {
    e.preventDefault()
    const total = (addition1.value) + (addition2.value);
    
    let answer = document.getElementById('numberTotal');
    answer.innerText = 'total is:' + total;
    
    
    add1.value = 0;
    add2.value = 0;

})

