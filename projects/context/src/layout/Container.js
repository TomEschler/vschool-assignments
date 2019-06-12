import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

const Container = () => {
    return (
        <div className='container'>
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}
export default Container
