import React, { useState } from 'react';
import Section from '../Section/Section';
import Card from '../Card/Card';
import ProtectData from "./../../Data/ProtectData";
import "./Protect.css";
function Protect() {
    const [protect, setprotect] = useState(() => {
        const storedprotect = localStorage.getItem('protect');
        if (storedprotect) {
            return JSON.parse(storedprotect);
        }
        return ProtectData;
    });
    return (
        <section className="protect container padding_Buttom">
            <Section title={"How We "} titleSpan={"Protect You"} desc={"At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"} />
            <div className="BL-protect">
                {
                    protect.map((protect, index) => (
                        <div className="BL-protectcard" key={index}>
                            <Card key={index}
                                section={{
                                    title: protect.title,
                                    desc: protect.desc,
                                    imageUrl: protect.imageUrl,
                                    imageAlt: `Icon for ${protect.title}`,
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

export default Protect;
