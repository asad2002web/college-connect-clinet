import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Main = () => {
    return (
        <div className='px-16'>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Main;