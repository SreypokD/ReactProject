import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import ModalSignIn from '../sign in/ModalSignIn';

const Header = () => {
    const navStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
        };
    };

    const [openSignIn, setOpenSignIn] = useState(false); // Move the useState hook outside the OpenSignIn function

    const handleOpenSignIn = () => {
        setOpenSignIn(true);
        console.log("he");
    };

    return (
        <>
            <section className="h-wapper flexCenter">
                <div className="h-container">
                    <img src="../../assets/pok-pok-logo-2.png" alt="logo" width={100} />
                </div>
                <div className="h-menu">
                    <NavLink to="/" style={navStyle}>
                        Home
                    </NavLink>
                    <NavLink to="/about" style={navStyle}>
                        About us
                    </NavLink>
                    <NavLink to="/contact" style={navStyle}>
                        Contact
                    </NavLink>
                    <NavLink to="/shopping" style={navStyle}>
                        Shop
                    </NavLink>
                    <NavLink to="/cart" style={navStyle}>
                        <i className="material-icons">shopping_cart</i>
                    </NavLink>
                    <button className="button " onClick={handleOpenSignIn}> 
                     SIGN IN 
                     {/* <i className="material-icons">system_update</i> */}
                    </button>


                    {/* <button className="button">SIGN UP</button> */}


                </div>
            </section>
            <ModalSignIn open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <h3>SIGN IN</h3>
            </ModalSignIn>
        </>
    );
};

export default Header;