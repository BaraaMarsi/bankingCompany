import { useState } from "react";
import Card from "../../Components/Card/Card";
import Faq from "../../Components/Faq/Faq";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import ProtectData from "./../../Data/ProtectData";
import "./Security.css"
const Security = () => {
     const [protect, setprotect] = useState(() => {
        const storedprotect = localStorage.getItem('protect');
        if (storedprotect) {
            return JSON.parse(storedprotect);
        }
        return ProtectData;
    });
    return (
        <>
            <Hero image="assets/images/HeroImage3.webp" 
                textAlt="Hero Secuirty Image"
                yourTitle = "Your Security is Our "
                yourTitleSpan= "Top Priority"
                yourDesc= "At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
            />
              <section className="container padding_Buttom">
                <Section title={"How We "} titleSpan={"Protect You"} desc={"At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"} />
                <div className="BL-protect">
                    {
                        protect.map((protect, index) => (
                            <div className="BL-protectcard" key={index}>
                                <Card key={index}
                                    section={{
                                        title: protect.title,
                                        desc: protect.desc,
                                        imageUrl: protect.imageUrl,
                                        imageAlt: `Icon for ${protect.title}`,
                                        flex: 'flex',
                                    }}
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
            <Faq />
        </>
    );
}

export default Security;
