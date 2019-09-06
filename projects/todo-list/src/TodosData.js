// import React from 'react'
// import axios from 'axios'



// class TodosData extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todo: []
//         }
//     }

//     componentDidMount = () => {
//         axios.get('https://api.vschool.io/thomas/todo')
//         .then(res => {
//             console.log(res)
//             this.setState( {
//                 todo: res.data
//             })
//         })
//     }

//     render() {
//         return(
//             <>
//                 <div className='return'>
//                     {this.state.todo.map(todo => <span>{todo.title}</span>)}
//                 </div>
//             </>
//         )
//     }
// }





// export default TodosData





class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hitList: []
        }
    }

    componentDidMount() {
        Axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            this.setState({hitList: response.data})
        })  
    }

    render() {
        console.log(this.state.hitList[0])
        return (