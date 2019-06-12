import React from 'react'

const Dj = (props) => {
    let {color} = props
    return (
        <div className = 'board'>
            <h1>{color}</h1>
        </div>
    )
}

export default Dj