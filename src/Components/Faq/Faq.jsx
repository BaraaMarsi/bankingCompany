import { useState } from "react";
import Section from "../Section/Section";
import TitleDev from "../TitleDev/TitleDev";
import "./Faq.css";
import { useNavigate } from "react-router-dom";
import FaqData from "./../../Data/FaqData";


const Faq = () => {
    const navigate = useNavigate();
    const [faqs, setfaqs] = useState(() => {
        const storedFaqs = localStorage.getItem('faqs');
        return storedFaqs ? JSON.parse(storedFaqs) : FaqData;
    })
    const [isOpen, setisOpen] = useState(false);
    const showFaqs = isOpen ? faqs : faqs.slice(0, 4);
    const buttonText = isOpen ? "Show Less" : "Show More";

    const handleContainerClick = () => {
        navigate('/dashboard');

    }
    return (
        <>
            <div className="Am-M container" onClick={handleContainerClick}>
                <div className="Am-faqTitle">
                    <Section titleSpan={"Frequently"} secTitle={" Asked Questions"} desc={"Still you have any questions? Contact our Team via support@yourbank.com"} />
                </div>
                {
                    showFaqs.length === 0 ?
                        <p> There Is No Data</p> :
                        showFaqs.map((faq, index) => (
                            <TitleDev key={index} title={faq.question} div1={faq.answer} />
                        ))
                }

            </div>
            <button onClick={() => setisOpen(!isOpen)}>{buttonText}</button>
        </>

    );
}

export default Faq;