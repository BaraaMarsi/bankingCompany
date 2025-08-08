import { useState, useEffect } from "react";
import { FaqData } from "./../../Data/FaqData";

const FaqDashboard = () => {
    const [faqs, setFaqs] = useState(() => {
        const storedFaqs = localStorage.getItem('faqs');
        if (storedFaqs) {
            return JSON.parse(storedFaqs);
        }
        return FaqData;
    });

    const [lastId, setLastId] = useState(() => {
        const storedLastId = localStorage.getItem("faqs_lastId");
        if (storedLastId) {
            return parseInt(storedLastId);
        }
        return 0;
    });

    const [editingId, setEditingId] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        localStorage.setItem('faqs', JSON.stringify(faqs));
    }, [faqs]);

    useEffect(() => {
        localStorage.setItem('faqs_lastId', lastId.toString());
    }, [lastId]);

    const clearForm = () => {
        setQuestion('');
        setAnswer('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question || !answer) {
            alert('Please fill in both the question and the answer.');
            return;
        }

        if (editingId !== null) {
            setFaqs(faqs.map(faq =>
                faq.id === editingId ? { ...faq, question, answer } : faq
            ));
            setEditingId(null);
        } else {
            const newId = lastId + 1;
            const newFaq = {
                id: newId,
                question,
                answer
            };
            setFaqs(prevFaqs => [...prevFaqs, newFaq]);
            setLastId(newId);
        }

        clearForm();
    };

    const handleEdit = (faqToEdit) => {
        setEditingId(faqToEdit.id);
        setQuestion(faqToEdit.question);
        setAnswer(faqToEdit.answer);
    };

    const handleDelete = (idToDelete) => {
        if (window.confirm('Are you sure you want to delete this FAQ?')) {
            setFaqs(faqs.filter(faq => faq.id !== idToDelete));
        }
    };

    return (
        <div>
            <h2>FAQ Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Question</label>
                <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <label htmlFor="answer">Answer</label>
                <textarea
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />

                <input type="submit" value={editingId !== null ? 'Update FAQ' : 'Add FAQ'} />
            </form>
            <hr />
            <h3>Saved FAQs</h3>
            <div>
                {faqs.length > 0 ? (
                    faqs.map(faq => (
                        <div key={faq.id}>
                            <h4>Q: {faq.question}</h4>
                            <p>A: {faq.answer}</p>
                            <div>
                                <button className="edit-btn" onClick={() => handleEdit(faq)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(faq.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No FAQs added yet.</p>
                )}
            </div>
        </div>
    );
};

export default FaqDashboard;