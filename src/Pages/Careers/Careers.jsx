import Hero from "../../Components/Hero/Hero.jsx";
import "./Careers.css"
import Section from "../../Components/Section/Section.jsx";
import StartSection from "../../Components/StartSection/StartSection";
import Faq from "../../Components/Faq/Faq.jsx";
import Card from "../../Components/Card/Card.jsx";
import OurValuesSection from "../../Components/OurValuesSection/OurValuesSection.jsx";
import JobOpenings from "../../Components/JobOpenings/JobOpenings.jsx";
import Faq from "../../Components/Faq/Faq.jsx";
const Careers = () => {
    return (
        <>
            <Hero image="assets/images/HeroImage1.webp"
                textAlt="Hero Carreers Image"
                yourTitle="Welcome to "
                yourTitleSpan="YourBank "
                yourSecTitle="Careers!"
                yourDesc="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
            />
            <OurValuesSection/>
            <OurBenefits/>
            <JobOpenings/>
            <Faq />
            <StartSection/>
        </>
    );
}

export default Careers;
