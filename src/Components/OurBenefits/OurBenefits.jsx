import Card from "../../Components/Card/Card.jsx";
import BenefitsData from "./../../Data/BenefitsData";
import { useState } from "react";
import "./OurBenefits.css"
import Section from '../Section/Section.jsx';

function OurBenefits() {
      const [benefits, setbenefits] = useState(() => {
        const storedBenefits = localStorage.getItem('benefits');
        if (storedBenefits) {
            return JSON.parse(storedBenefits);
        }
        return BenefitsData;
    });
  return (
      <section className="our_benefits container padding_Buttom">
        <div className="BL-head">
                <Section title={"Our "} titleSpan={"Benefits"} desc={"At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."} />
                </div>
                <div className="BL-benefits-container">
                    {
                        benefits.map((benefit, index) => (
                            <div className="BL-card" key={index}>
                                <Card key={index}
                                    section={{
                                        title: benefit.title,
                                        desc: benefit.desc,
                                        imageUrl: benefit.imageUrl,
                                        imageAlt: `Icon for ${benefit.title}`,
                                        flex: 'flex',
                                    }}
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
  );
}

export default OurBenefits;
