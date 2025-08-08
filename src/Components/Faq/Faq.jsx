import { useState } from "react";
import Section from "../Section/Section";
import TitleDev from "../TitleDev/TitleDev";
import "./Faq.css";
import { useNavigate } from "react-router-dom";

const Faq = () => {
    const navigate = useNavigate();
    const [faqs, setfaqs] = useState(() => {
        const storedFaqs = localStorage.getItem('faqs');
        return storedFaqs ? JSON.parse(storedFaqs) : [];
    })
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShow = () => {
        setIsExpanded(prevStatus => !prevStatus);
    }
    const showFaqs = isExpanded ? faqs : faqs.slice(0, 4);
    const buttonText = isExpanded ? "Show Less" : "Show More";

    const handleContainerClick = () => {
        navigate('/dashboard');

    }
    return (
        <>
            <div className="BL-M container" onClick={handleContainerClick}>
                <Section titleSpan={"Frequently"} secTitle={" Asked Questions"} desc={"Still you have any questions? Contact our Team via support@yourbank.com"} />
                {
                    showFaqs.length === 0 ?
                        <p> There Is No Data</p> :
                        showFaqs.map((faq, index) => (
                            <TitleDev key={index} title={faq.question} div1={faq.answer} />
                        ))
                }
            </div>
            <button onClick={handleShow}>{buttonText}</button>
        </>

    );
}

export default Faq;
