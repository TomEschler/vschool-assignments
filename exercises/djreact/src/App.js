import React from 'react'
import Dj from './Dj'
import './styles.css'

const App = () => {
    const squareColors = [
        {   
            color: 'white',
        }, {
            color: 'white',
        },{
            color: 'white',
        },{
            color: 'white'
        }
    ]
    const mappedSquareColors = squareColors.map(squareColor => {
        return <Dj color = {squareColor.color}/>})
            return (
                <div>
                    {mappedSquareColors}
                </div>
            )
}





export default App