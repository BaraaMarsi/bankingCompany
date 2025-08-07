
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

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
                    <button className="Am-btn-outline">Sign Up</button>
                    <button className="Am-btn-filled">Login</button>
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
                        <button className="Am-btn-outline" onClick={() => setOpen(false)}>Sign Up</button>
                        <button className="Am-btn-filled" onClick={() => setOpen(false)}>Login</button>
                    </div>
                </div>

                <div className="Am-burger" onClick={() => setOpen(!open)}>
                    <img src="./assets/images/Burger.svg" alt="Burger" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
