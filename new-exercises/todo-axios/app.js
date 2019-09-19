const form = document.addTodo
let todoList = []



const starter = (updating) => {
    axios.get('https://api.vschool.io/thomas/todo/').then((response) => {
        displayTodos(response.data, updating);
        todoList = response.data
    })
}

starter()
const displayTodos = (todos, updated) => {
    if(updated === 'updating'){
        document.getElementById('main').innerHTML = ''
    }
    todos.forEach((todo)=>{
        let main = document.getElementById('main')
        let parentDiv = document.createElement('div')
        let titleh2 = document.createElement('h2')
        let checkBox = document.createElement("input")
        let deleteBtn = document.createElement("button")
    
        checkBox.addEventListener("click", function(){
            checkTodo(todo)
        })

        deleteBtn.innerText = "-"
        titleh2.innerText = todo.title;

        parentDiv.setAttribute("class", "todoBox")
        checkBox.setAttribute("type", "checkBox")

        deleteBtn.addEventListener("click", function(){
            parentDiv.style.display = 'none';
            axios.delete(`https://api.vschool.io/thomas/todo/${todo._id}`).then(()=> {
                todoList.splice(todoList.indexOf(todo._id), 1)
            })
        })

        

        if (todo.completed){
            checkBox.checked = true
            parentDiv.style.textDecoration = "line-through red"
            // parentDiv.style.color = "red"
        } else {
            parentDiv.style.textDecoration = "none"
        } 

    
        parentDiv.appendChild(titleh2)
        parentDiv.appendChild(checkBox)
        parentDiv.appendChild(deleteBtn)
        main.appendChild(parentDiv)
        
    })
}

const checkTodo = (oldTodo) => {
    axios.put(`https://api.vschool.io/thomas/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then((response) =>{
        starter('updating')
    })
}

form.addEventListener('submit', function(e){
        e.preventDefault()
        let title = form.title.value
        let newObject = {
            title
        }
        postTodo(newObject)
})


const postTodo = (newTodo) => {
        axios.post('https://api.vschool.io/thomas/todo/', newTodo).then( res => {
            todoList.push(res.data);
            displayTodos([res.data]);
        })
}


// const postTodo = axios.post('https://api.vschool.io/thomas/todo/', newTodo).then(function(response){
//     console.log(response.data);
//     }).catch(function(error){
//     console.log(error)
// });