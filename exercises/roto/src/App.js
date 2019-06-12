import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import About from './About'
import Services from './Services'


import{Switch, Route} from 'react-router-dom'
const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path = '/' component = {Main}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/services' component = {Services}/>
            </Switch>
            <Footer />
        </>
    )
}



export default App



