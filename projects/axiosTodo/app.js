
axios.get('https://api.vschool.io/tom/todo').then((response) => {
    displayTodos(response.data)
})

function displayTodos(todos) {
    todos.forEach((todo)=>{
        let parentDiv = document.createElement('div')
        const todoTitle = document.createElement('h2')
        todoTitle.innerText = todo.title
        parentDiv.appendChild(todoTitle)
        document.getElementById('main').appendChild(parentDiv)
    })
}







// // functions
// function aFunction (parameters){

// }

// aFunction(arguments)
// // methods

// const obj = {
//     name: 'tom',
//     age: 27,
//     changed: function(){
//         console.log('hello')
//     }
// }

// obj.changed()





// //the .then is the promise to make it live
// function displayTodos(todos) {
//     todo.forEach(
//         (todo) => {
//         console.log(todo)
//         //Each todo is an object of the incoming response.data

//         //Grab an element by ID
//         const main = document.getElementById('main')

//         //Create all the pieces you need
//         let parentDiv = newItem('div')
//         const todoTitle = document.createElement('h2')
//         // $('todoTitle').append('<p>');


//         //For every piece, add some functionality or text
//         todoTitle.innerText = todo.title

//         //append all the pieces together, parents and children
//         parentDiv.appendChild(todoTitle)
        
//         // let titleH2 = document.createElement('h2')
//         // const form = document.createElement('form')
        
//         //append the parent to the main div
//         main.appendChild(parentDiv)
//     })
// }