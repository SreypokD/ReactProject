import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <section className='h-wapper flexCenter'>
            <div className="h-container">
                <img src="../../assets/pok-pok-logo-2.png" alt="logo" width={100} />
            </div>
            <div className="h-menu">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Contact</a>
                <a href="">Get Started</a>
                <button className='button'><a href="">Contact me</a></button>
            </div>
        </section>
    )
}

export default Header
