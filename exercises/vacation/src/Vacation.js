import React from 'react'



const Vacation = (props) => {
    let {place, price, timeToGo} = props
    return (
            <div className="idaho" style = { { backgroundImage: "url('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiX3a_XzJ7iAhUrrFQKHbRPDqIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.ldsliving.com%2FChurch-Releases-First-Look-Inside-Meridian-Idaho-Temple%2Fs%2F86671&psig=AOvVaw0qZI4BQDu-WMdyzVMUgxFw&ust=1558046235380117')"}}></div>
        <div>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <p>{timeToGo}</p>
        </div>
    )
}




export default Vacation 