import Hero from "../../Components/Hero/Hero.jsx";
import "./Careers.css"
import Section from "../../Components/Section/Section.jsx";
import Start from "../../Components/Start/Start";

import Faq from "../../Components/Faq/Faq.jsx";
import Card from "../../Components/Card/Card.jsx";
import BenefitsData from "./../../Data/BenefitsData";
import OurJobData from './../../Data/OurJobData';
import TitleDev from '../../Components/TitleDev/TitleDev';
import TitleUlBtn from '../../Components/TitleUlBtn/TitleUlBtn.jsx';
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
            <div className="ourValues container padding_Buttom">
                <Section 
                    title={"Our "}
                    titleSpan={"Values"}
                    desc={"At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."}
                />
                <div className="ourCards ">
                    <div className="leftCards">
                        <Section
                            title={"Integrity "}
                            desc={"We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."}
                    />
                        <Section
                            title={"Collaboration "}
                            desc={"We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."}
                        />
                    </div>
                    <div className="rightCards">
                        <Section
                            title={"Customer Centricity "}
                            desc={"Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."}
                    />
                        <Section
                            title={"Innovation "}
                            desc={"We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."}
                        />
                    </div>
                </div>
            </div>
            <section className="container padding_Buttom">
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
            </section>
            <div className="job container ">
                <div className="jobHead">
                < Section
                    titleSpan={"Job Openings"}
                    desc={"Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"}
                /></div>
            <div className="career-section">
            {OurJobData.map((job) => (
                <div key={job.id} className="career-card">
                <TitleDev
                   title={job.title}
                    div1={`Location: ${job.location}`}
                    div2={`Department: ${job.department}`}
                />

                <Section
                    title="About This Job"
                    desc={job.description}
                />

                <TitleUlBtn
                title="Requirements & Qualifications"
                ul={job.requirements} 
                 btn={job.buttonText} 
                 btnClass={"Na-applynow"}/>
                </div>
            ))}
            </div>
            </div>


            <Faq />
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
