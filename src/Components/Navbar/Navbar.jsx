import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from '../Button/Button';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = [
        { to: "/", label: "Home" },
        { to: "/careers", label: "Careers" },
        { to: "/about", label: "About" },
        { to: "/security", label: "Security" },
    ];

    return (
        <div className="container">
            <div className="Am-NAV">
                <nav className="Am-navbar">
                    <div className="Am-logo">
                        <img className="Am-logo_img" src="./assets/images/Logo.svg" alt="YourBanK Logo" />
                    </div>

                    <div className="Am-links-large">
                        <div className="Am-nav-links">
                            {links.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    className={({ isActive }) => (isActive ? "Am-active-link" : "")}
                                    onClick={() => setOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="Am-button Am-button-large">
                        <Button text="Sign Up" to="/signup" className={` ${active === "signup" ? "active Na-login" : "Na-signup"}`} onClick={() => setActive("signup")} />
                        <Button text="Login" to="/login" className={` ${active === "login" ? "active Na-login" : "Na-signup"}`} onClick={() => setActive("login")} />
                    </div>

                    <div className={`Am-nav-mobile ${open ? "Am-active" : ""}`}>
                        {links.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) => (isActive ? "Am-active-link" : "")}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <div className="Am-button-mobile">
                            <Button
                                text="Sign Up"
                                to="/signup"
                                className={` ${active === "signup" ? "active1 Na-login" : "Na-signup"}`}
                                onClick={() => {setOpen(false);setActive("signup")}}
                            />
                            <Button
                                text="Login"
                                to="/login"
                                className={` ${active === "login" ? "active1 Na-login" : "Na-signup"}`}
                                onClick={() => {setOpen(false);setActive("login")}}
                            />
                        </div>

                    </div>

                    <div className="Am-burger" onClick={() => setOpen(!open)}>
                        <img src="./assets/images/Burger.svg" alt="Burger" />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
