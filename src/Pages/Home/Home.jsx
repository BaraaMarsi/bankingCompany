import Section from "../../Components/Section/Section";
import Start from "../../Components/Start/Start";
import TestiData from '../../Data/TestiData';
import Testimonials from "../../Components/Testimonials/Testimonials";
import Faq from "../../Components/Faq/Faq";
import HeroHome from "../../Components/HeroHome/HeroHome";
if (!localStorage.getItem('Testimonials')) {
  localStorage.setItem('Testimonials', JSON.stringify(TestiData));
}
const Home = () => {
    return (
        <>
            <HeroHome/>
            <Faq/>
            <Testimonials/>
            <Start 
            title="Start your financial journey with " titlespan="Your Bank today!"
            description="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
            buttonText="Open Account"
            buttonTo="/signup"
            buttonClass="Na-openaccount"
            />
        </>
    );
}

export default Home;
