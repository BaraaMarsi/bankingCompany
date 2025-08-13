import Hero from "../../Components/Hero/Hero.jsx";
import "./Careers.css"
import Section from "../../Components/Section/Section.jsx";
import Start from "../../Components/Start/Start";
import Faq from "../../Components/Faq/Faq.jsx";
import Card from "../../Components/Card/Card.jsx";
import BenefitsData from "./../../Data/BenefitsData";
import { useState } from "react";
const Careers = () => {
    // const info = {
    //     title: "Welcome to ",
    //     titleSpan: "YourBank ",
    //     secTitle: "Careers!",
    //     desc: "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.",
    //     isShow: {isTitle: true, isTitleSpan: false, isSecTitle: true}
    // }
    // let isShow = {
    //     isTitle: true, isTitleSpan: true, isSecTitle: true
    // }
    const [benefits, setbenefits] = useState(() => {
        const storedBenefits = localStorage.getItem('benefits');
        if (storedBenefits) {
            return JSON.parse(storedBenefits);
        }
        return BenefitsData;
    });
    return (
        <>
            <Hero image="assets/images/HeroImage1.webp"
                textAlt="Hero Carreers Image"
                yourTitle="Welcome to "
                yourTitleSpan="YourBank "
                yourSecTitle="Careers!"
                yourDesc="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
            />
            <div className="container padding_Buttom">
                <Section title={"Our "} titleSpan={"Benefits"} desc={"At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."} />
                <div className="BL-benefits-container">
                    {
                        benefits.map((benefit, index) => (
                            <div className="BL-card" key={index}>
                                <Card key={index}
                                    section={{
                                        title: benefit.title,
                                        desc: benefit.desc,
                                        imageUrl: benefit.imageUrl,
                                        imageAlt: `Icon for ${benefit.title}`,
                                        flex: 'flex',
                                    }}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <Faq /> */}
            <div>
                <Start
                    title="Start your financial journey with " titlespan="Your Bank today!"
                    description="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
                    buttonText="Open Account"
                    buttonTo="/signup"
                    buttonClass="Na-openaccount" />
            </div>
        </>
    );
}

export default Careers;
