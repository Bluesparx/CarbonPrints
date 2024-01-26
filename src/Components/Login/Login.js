import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Login.css';
export const Login = () => {
    return (
        <>
        <Header/>
        <div className="bg-content">
        <div className="container-l">
        <div className="overlay"></div>
        <div class="login-box">
            <h2><b>Login</b></h2>
            <form action="#" method="post">
                <input type="text" placeholder="Username" required />
                <input type="text" name="Password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
                <p class="small-text">Don't have an account? <a href="signup.html" target="_blank">Sign Up</a></p>      
        </div>
        </div>
    </div>
    <Footer/>
    </>
    );
};