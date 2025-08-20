import Section from "../../Components/Section/Section";
import Start from "../../Components/Start/Start";
import TestiData from '../../Data/TestiData';
import Testimonials from "../../Components/Testimonials/Testimonials";
import Faq from "../../Components/Faq/Faq";
import HeroHome from "../../Components/HeroHome/HeroHome";
import Card from "../../Components/Card/Card";
import ProductsData from "../../Data/ProductsData";
import 'swiper/css';
import "./Home.css"
import { useState } from "react";
import Button from "../../Components/Button/Button";
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
