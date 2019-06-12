import React from 'react'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './styles.css'
import TodoItem from './TodoItem'

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <MainContent/>
//             <Footer/>
//         </div>
//     )
// }

const App = () => {
    return (
        <div className='todo-list'>
            <TodoItem />
        </div>
    )
}

// const App = () => {
//     return (
//         <div>
//             <input type = 'checkbox' />
//             <p>text here</p>

//             <input type = 'checkbox' />
//             <p>text here</p>

//             <input type = 'checkbox' />
//             <p>text here</p>
//         </div>
//     )
// }



export default App