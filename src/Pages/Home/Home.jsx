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
if (!localStorage.getItem('Testimonials')) {
    localStorage.setItem('Testimonials', JSON.stringify(TestiData));
}
const Home = () => {
    const [productType, setproductType] = useState('individual');
    return (
        <>
            <HeroHome />
            <section className="our_products container padding_Buttom">
                <div className="BL-products-head">
                    <Section title={"Our "} titleSpan={"Products"} desc={"Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"} />
                    <div className="BL-products-buttons">
                        <Button
                            text={"For Individuals"}
                            className={`Na-forindividuals ${productType === 'individual' ? 'active-button' : ''}`}
                            onClick={() => setproductType('individual')}
                        />
                        <Button
                            text={"For Businesses"}
                            className={`Na-forbusinesses ${productType === 'business' ? 'active-button' : ''}`}
                            onClick={() => setproductType('business')}
                        />
                    </div>
                </div>
                <div className="BL-products-container">
                    {ProductsData
                        .filter((product) => product.type === productType)
                        .map((product, index) => (
                            <Card
                                key={index}
                                section={{
                                    title: product.title,
                                    desc: product.description,
                                    imageUrl: product.icon,
                                    imageAlt: `Icon for ${product.title}`,
                                    flex: 'flex'
                                }}
                                customClass="BL-product-card"
                            />
                        ))}
                </div>
            </section>
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
