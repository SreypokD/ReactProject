import React from 'react'
import "./ModalSignIn.css"
function ModalSignIn({ open, children, onClose }) {
    if (!open) return null
    // style modal
    const ModalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        backgroundColor: "#fff",
        transform: 'transtlate(-50%, -50%)',
        padding: '50px',
        zIndex: 1000,
        top:100,
    }
    // overlay syle 
    const OverLayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        zIndex: 1000

    }
    return (
        <>
            <div style={OverLayStyle} />
            <div style={ModalStyle}>
                {children}
                <form action="">
                    <div className="email">
                        <label htmlFor="">Email*</label> <br />
                        <input type="email" />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password*</label> <br />
                        <input type="password" />
                    </div>
                    <div className="btn">
                        <button className='btn-cancel' onClick={onClose}>Cancel</button>
                        <button className='button' >Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ModalSignIn
