import Faq from "../../Components/Faq/Faq";
import Hero from "../../Components/Hero/Hero";
import "./Security.css"
import Protect from "../../Components/Protect/Protect";
import { useEffect } from "react";
const Security = () => {
    useEffect(() => {
        document.title = "Banking Company / Security Page"
    }, [])
    return (
        <>
            <Hero image="assets/images/HeroImage3.webp" 
                textAlt="Hero Secuirty Image"
                yourTitle = "Your Security is Our "
                yourTitleSpan= "Top Priority"
                yourDesc= "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
            />
            <Protect />
            <Faq />
        </>
    );
}

export default Security;
