import { useState } from "react";


const Faq = () => {
    const [faqs, setfaqs] = useState(() => {
        const storedFaqs = localStorage.getItem('faqs');
        return storedFaqs ? JSON.parse(storedFaqs) : [];
    })
    return (
        <div>
            {
                faqs.length === 0 ?
                    <p> There Is No Data</p> :
                    faqs.map((faq, index) => (
                        <div key={index}>
                            <h2>{faq.question}</h2>
                            <p>{faq.answer}</p>
                        </div>

                    ))

            }
        </div>
    );
}

export default Faq;
