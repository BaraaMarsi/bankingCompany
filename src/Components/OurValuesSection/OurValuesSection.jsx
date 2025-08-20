import Section from "../../Components/Section/Section.jsx";
import './OurValuesSection.css';

const OurValuesSection = () => {
    return(
           <div className="ourValues container padding_Buttom">
                <Section 
                    title={"Our "}
                    titleSpan={"Values"}
                    desc={"At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."}
                />
                <div className="ourCards ">
                    <div className="leftCards">
                        <Section
                            title={"Integrity "}
                            desc={"We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."}
                    />
                        <Section
                            title={"Collaboration "}
                            desc={"We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."}
                        />
                    </div>
                    <div className="rightCards">
                        <Section
                            title={"Customer Centricity "}
                            desc={"Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."}
                    />
                        <Section
                            title={"Innovation "}
                            desc={"We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."}
                        />
                    </div>
                </div>
            </div>
    )
}
export default OurValuesSection
