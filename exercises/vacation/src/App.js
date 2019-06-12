import React from 'react'
import Vacation from './Vacation'



const App = () => {
    const vacationSpots = [
        {   
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
        }, {
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
        },{
            place: "China",
            price: 1200,
            timeToGo: "Fall"
        },{
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
        },{
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
        }
    ]
    const mappedVacationSpots = vacationSpots.map(vacationSpot => {
        return <Vacation price = {vacationSpot.price} place = {vacationSpot.place} timeToGo = {vacationSpot.timeToGo} />})
            return (
                <div>
                    {mappedVacationSpots}
                </div>
            )
}



export default App
