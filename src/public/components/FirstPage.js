import React from 'react'
import LogIn from './LogIn'
import { Register } from './Register'
import "./FirstPage.css"

export const FirstPage = () => {
    return (
        <div className="first-page">  
            <div className="register">
                <Register />
            </div>
            <div className="login">
                <LogIn />
            </div>
        </div>
    )
}