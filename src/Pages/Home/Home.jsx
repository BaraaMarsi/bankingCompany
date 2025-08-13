import Section from "../../Components/Section/Section";
import Start from "../../Components/Start/Start";
import TestiData from '../../Data/TestiData';
import Testimonials from "../../Components/Testimonials/Testimonials";
import Faq from "../../Components/Faq/Faq";
import Card from "../../Components/Card/Card";
import TitleDev from "../../Components/TitleDev/TitleDev";
import "./Home.css"
if (!localStorage.getItem('Testimonials')) {
    localStorage.setItem('Testimonials', JSON.stringify(TestiData));
}
const Home = () => {
    return (
        <>
            <section className="use_cases container padding_Buttom">
                <Card section = {{
                    titleSpan: "Use Cases",
                    desc: "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"}}/>
                    <div>
                        <div className="container0">
                            <div className="container1">
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon1.png",
                                imageAlt: "use_cases_icon1",
                                title: "Managing Personal Finances"}}/>
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon2.png",
                                imageAlt: "use_cases_icon2",
                                title: "Saving for the Future"}}/>
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon3.png",
                                imageAlt: "use_cases_icon3",
                                title: "Homeownership"}}/>
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon4.png",
                                imageAlt: "use_cases_icon4",
                                title: "Education Funding"}}/>
                        </div>
                        <div className="container2">
                                <Card 
                                section={{
                                    title: "For Individuals",
                                    desc: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"}}
                                customClass= "container2_firstDiv"/>
                                <div className="container2_secondDiv">
                                    <Card section={{
                                        titleSpan: "78%",
                                        desc: "Secure Retirement Planning"}}
                                    customClass= "container2_secondDiv_children"/>
                                    <Card section={{
                                        titleSpan: "63%",
                                        desc: "Manageable Debt Consolidation"}}
                                    customClass= "container2_secondDiv_children middle"/>
                                    <Card section={{
                                        titleSpan: "91%",
                                        desc: "Reducing financial burdens"}}
                                        customClass= "container2_secondDiv_children"/>
                                </div>
                                <TitleDev div1="Learn More"/>
                        </div>
                        </div>
                        <div className="container0 flex_reverse">
                            <div className="container2">
                                <Card section={{
                                    title: "For Individuals",
                                    desc: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"}}
                                    customClass= "container2_firstDiv"/>
                                <div className="container2_secondDiv">
                                    <Card section={{
                                        titleSpan: "78%",
                                        desc: "Secure Retirement Planning"}}
                                    customClass= "container2_secondDiv_children"/>
                                    <Card section={{
                                        titleSpan: "63%",
                                        desc: "Manageable Debt Consolidation"}}
                                    customClass= "container2_secondDiv_children middle"/>
                                    <Card section={{
                                        titleSpan: "91%",
                                        desc: "Reducing financial burdens"}}
                                        customClass= "container2_secondDiv_children"/>
                                </div>
                                <TitleDev 
                                div1="Learn More"/>
                            </div>
                            <div className="container1">
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon1.png",
                                imageAlt: "use_cases_icon1",
                                title: "Managing Personal Finances"}}/>
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon2.png",
                                imageAlt: "use_cases_icon2",
                                title: "Saving for the Future"}}/>
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon3.png",
                                imageAlt: "use_cases_icon3",
                                title: "Homeownership"}}/>
                            <Card 
                            section={{
                                imageUrl: "UseCasesSection/use_cases_icon4.png",
                                imageAlt: "use_cases_icon4",
                                title: "Education Funding"}}/>
                            </div>
                        </div>
                    </div>
            </section>
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
