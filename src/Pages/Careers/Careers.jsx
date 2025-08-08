import Hero from "../../Components/Hero/Hero.jsx";
import "./Careers.css"
import Section from "../../Components/Section/Section.jsx";
import Start from "../../Components/Start/Start";

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
            <div>
               <Start
                title="Start your financial journey with " titlespan="Your Bank today!"
                description="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
                buttonText="Open Account"
                buttonTo="/signup"
                buttonClass="Na-openaccount"/>
                
            </div>
        </>
    );
}

export default Careers;
