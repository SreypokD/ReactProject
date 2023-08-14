import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = ({isActive})=>{
        return {
            textDecoration : isActive ? 'underline' : 'none',
        }
    }
    return (
        <section className='h-wapper flexCenter'>
            <div className="h-container">
                <img src="../../assets/pok-pok-logo-2.png" alt="logo" width={100} />
            </div>
            <div className="h-menu">        
                <NavLink to="/" style={navStyle}>Home</NavLink>
                <NavLink to="/about" style={navStyle}>About us</NavLink>
                <NavLink to="/contact" style={navStyle}>Contact</NavLink>
            </div>
        </section>
    )
}

export default Header
