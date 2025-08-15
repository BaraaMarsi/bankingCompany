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
    });
    const [isOpen, setisOpen] = useState(false);
    const showFaqs = isOpen ? faqs : faqs.slice(0, 4);
    const buttonText = isOpen ? "Show Less" : "Load All FAQ's";

    const handleContainerClick = () => {
        navigate('/dashboard');
    }
    const faqRows = showFaqs.reduce((rows, faq, index) => {
        if (index % 2 === 0) {
            rows.push([faq]);
        } else {
            rows[rows.length - 1].push(faq);
        }
        return rows;
    }, []);

    return (
        <>
            <div className="Am-M container" onClick={handleContainerClick}>
                <div className="Am-faqTitle">
                    <Section
                        titleSpan={"Frequently"}
                        secTitle={" Asked Questions"}
                        desc={"Still you have any questions? Contact our Team via support@yourbank.com"}
                    />
                </div>

            
                <div className="faq-cards">
                    {showFaqs.length === 0 ? (
                        <p>There Is No Data</p>
                    ) : (
                        faqRows.map((row, rowIndex) => (
                            <div className="faq-row" key={rowIndex}>
                                {row.map((faq, i) => (
                                    <div className="faq-card" key={i}>
                                        <TitleDev title={faq.question} div1={faq.answer} />
                                    </div>
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </div>
<div className="FaqBtn">
<button onClick={() => setisOpen(!isOpen)} className="faq-button">
  {buttonText}
  <img
    src="public/assets/Faq-Icon.svg"
    alt="icon"
    className={`faq-img ${isOpen ? "rotated" : ""}`}
  />
</button>

</div>

           
        </>
    );
}

export default Faq;
