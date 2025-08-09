import Hero from "../../Components/Hero/Hero.jsx";
import "./Careers.css"
import Section from "../../Components/Section/Section.jsx";
import Start from "../../Components/Start/Start";
import Faq from "../../Components/Faq/Faq.jsx";

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
    return (
        <>
            <Hero image="assets/images/HeroImage1.webp" 
                textAlt="Hero Carreers Image"
                yourTitle = "Welcome to "
                yourTitleSpan= "YourBank "
                yourSecTitle= "Careers!"
                yourDesc= "Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
                
            />
            <Faq/>
                <Start 
                title="Start your Career with " titlespan="Your Bank today!"
                description="Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus."
                buttonText="Open Accout"
                buttonTo="/signup"
                />
        </>
    );
}

export default Careers;
