import StartSection from "../../Components/StartSection/StartSection";
import TestiData from '../../Data/TestiData';
import Testimonials from "../../Components/Testimonials/Testimonials";
import Faq from "../../Components/Faq/Faq";
import HeroHome from "../../Components/HeroHome/HeroHome";
import "./Home.css"
import UseCases from "../../Components/UseCases/UseCases";
import OurFeatures from "../../Components/OurFeatures/OurFeatures";
import OurProducts from "../../Components/OurProducts/OurProducts";
if (!localStorage.getItem('Testimonials')) {
    localStorage.setItem('Testimonials', JSON.stringify(TestiData));
}
const Home = () => {
    return (
        <>
            <HeroHome />
            <OurProducts />
            <UseCases />
            <OurFeatures />
            <Faq />
            <div className="container">
                <Testimonials />
            </div>
                <StartSection/>
        </>
    );
}

export default Home;
