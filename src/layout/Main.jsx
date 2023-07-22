import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Main = () => {
    return (
        <div className='md:px-16 px-4 lg:px-20'>
            <Navbar></Navbar>
            <div>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Main;