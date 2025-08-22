import React, { useState, useEffect } from 'react'; 
import './WelcomeScreen.css';

const WelcomeScreen = () => {
    const [show, setShow] = useState(localStorage.getItem('welcomeScreenSeen') !== 'true');
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                localStorage.setItem('welcomeScreenSeen', 'true'); 
                setShow(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show]);
    if (!show) {
        return null;
    }
    return (
        <div className="welcome-screen">
            <div className="welcome-content">
                <h1>Welcome to our Banking Company</h1>
                <p>Happy to have you join us!</p>
            </div>
        </div>
    );
}

export default WelcomeScreen;