import React from 'react';
import Header from '../Header/header';
import '../Login/Login.css';
import Footer from '../Footer/footer';
export const Register = () => {
    return (
        <>
            <Header/>
            <div className="bg-content">
            <div className="container">
            <div className="overlay"></div>
            <div className="Signup-box">
                <h2><b>Sign up</b></h2>
                <form action="#" method="post">
                    <input type="text" name="Username" placeholder="Username" required />
                    <input type="email" name="Email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input id="confirmP" type="password" name="Confirm password" placeholder="Confirm password" required />
                    <button type="submit">Sign up</button>
                </form>
                <p class="small-text">Already have an account? <a href="signup.html" target="_blank">Login</a></p>
            </div>
            </div>
            </div>
            <Footer/>
            </>
    );
};