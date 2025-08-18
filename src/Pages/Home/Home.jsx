import Section from "../../Components/Section/Section";
import Start from "../../Components/Start/Start";
import TestiData from '../../Data/TestiData';
import Testimonials from "../../Components/Testimonials/Testimonials";
import Faq from "../../Components/Faq/Faq";
import HeroHome from "../../Components/HeroHome/HeroHome";
import Card from "../../Components/Card/Card";
import TitleDev from "../../Components/TitleDev/TitleDev";
import OurFeaturesData from "../../Data/OurFeaturesData";
import UseCasesData from "../../Data/UseCasesData";
import ProductsData from "../../Data/ProductsData";
import 'swiper/css';
import "./Home.css"
import { useState } from "react";
import Button from "../../Components/Button/Button";
if (!localStorage.getItem('Testimonials')) {
    localStorage.setItem('Testimonials', JSON.stringify(TestiData));
}
const Home = () => {
    const [selectedType, setSelectedType] = useState("online_Banking");
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

            <section className="use_cases container padding_Buttom">
                <Card section={{
                    titleSpan: "Use Cases",
                    desc: "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
                }} />
                <div>
                    <div className="container0">
                        <div className="container1">
                            {UseCasesData.filter((data) => data.type == "block1").map((data, index) => (
                            <Card
                                key= { index }
                                section={{
                                    imageUrl: data.imageUrl,
                                    imageAlt: data.imageAlt,
                                    title: data.title,
                                }}/>))}
                        </div>
                        <div className="container2">
                            <Card
                                section={{
                                    title: "For Individuals",
                                    desc: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
                                }}
                                customClass="container2_firstDiv" />
                            <div className="container2_secondDiv">
                                {UseCasesData.filter((data) => data.type == "block2").map((data, index) => (
                                <Card
                                    key= { index }
                                    section={{
                                        titleSpan: data.title,
                                        desc: data.desc,
                                    }}
                                    customClass={data.customClass}
                                    />))}
                            </div>
                            <TitleDev div1="Learn More" />
                        </div>
                    </div>
                    <div className="container0 flex_reverse">
                        <div className="container2">
                            <Card section={{
                                title: "For Business",
                                desc: " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them"
                            }}
                                customClass="container2_firstDiv" />
                            <div className="container2_secondDiv">
                                {UseCasesData.filter((data) => data.type == "block3").map((data, index) => (
                                <Card
                                    key= { index }
                                    section={{
                                        titleSpan: data.title,
                                        desc: data.desc,
                                    }}
                                    customClass={data.customClass}
                                    />))}
                            </div>
                            <TitleDev
                                div1="Learn More" />
                        </div>
                        <div className="container1">
                            {UseCasesData.filter((data) => data.type == "block4").map((data, index) => (
                            <Card
                                key= { index }
                                section={{
                                    imageUrl: data.imageUrl,
                                    imageAlt: data.imageAlt,
                                    title: data.title,
                                }}/>))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="our_features container padding_Buttom">
                <Card section={{
                    title: "Our ",
                    titleSpan: "Features",
                    desc: "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
                }}
                    customClass="first_card" />
                <div className="container0">
                    <div className="filtters">
                        <div onClick={() => setSelectedType("online_Banking")}>
                            <Card
                                customClass={selectedType == "online_Banking" ? "active" : ""}
                                titleDev={{ div1: "Online Banking" }}
                            />
                        </div>
                        <div onClick={() => setSelectedType("financial_Tools")}>
                            <Card
                                customClass={selectedType == "financial_Tools" ? "active" : ""}
                                titleDev={{ div1: "Financial Tools" }}
                            />
                        </div>
                        <div onClick={() => setSelectedType("customer_Support")}>
                            <Card
                                customClass={selectedType == "customer_Support" ? "active" : ""}
                                titleDev={{ div1: "Customer Support" }}
                            />
                        </div>
                    </div>
                    <div className="cards">
                        {OurFeaturesData.filter((data) => data.type == selectedType).map((data, index) => (
                            <Card
                                key= { index }
                                section={{
                                    imageUrl: "arrow.png",
                                    imageAlt: "arrow",
                                    flex: "flex",
                                    reverse: "reverse",
                                    title: data.title,
                                    desc: data.desc
                                }}
                                customClass="features_card" />))}
                    </div>
                </div>
            </section>
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
