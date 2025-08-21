import { useState, useEffect, useMemo } from "react";
import "./FaqDashboard.css";
import FaqData from "./../../Data/FaqData";
export default function FaqDashboard() {
    const [faqs, setFaqs] = useState(() => {
        const saved = localStorage.getItem('faqs');
        return saved ? JSON.parse(saved) : FaqData;
    });
    const [lastId, setLastId] = useState(() => {
        const saved = localStorage.getItem('lastId');
        return saved ? parseInt(saved) : FaqData.length;
    });
    const [editingId, setEditingId] = useState(null);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    useEffect(() => {
        localStorage.setItem('faqs', JSON.stringify(faqs));
    }, [faqs]);

    useEffect(() => {
        localStorage.setItem('lastId', lastId);
    }, [lastId]);

    const clearForm = () => { setQuestion(""); setAnswer(""); };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!question.trim() || !answer.trim()) return alert("Fill all fields");
        if (editingId) {
            setFaqs(faqs.map(f => f.id === editingId ? { ...f, question, answer } : f));
            setEditingId(null);
        } else {
            const newId = lastId + 1;
            setFaqs([...faqs, { id: newId, question, answer }]);
            setLastId(newId);
        }
        clearForm();
    };

    const filtered = useMemo(() => {
        let list = [...faqs];
        const q = search.toLowerCase();
        if (q) list = list.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
        if (sortBy === "oldest") list.sort((a, b) => a.id - b.id);
        else if (sortBy === "az") list.sort((a, b) => a.question.localeCompare(b.question));
        else if (sortBy === "za") list.sort((a, b) => b.question.localeCompare(a.question));
        else list.sort((a, b) => b.id - a.id);
        return list;
    }, [faqs, search, sortBy]);

    return (
        <div className="Am-faq-dashboard container">
            <h2>FAQ Dashboard</h2>

            <form onSubmit={handleSubmit} className="Am-form-card">
                <h3>{editingId ? "Edit FAQ" : "Add New FAQ"}</h3>
                <label>Question</label>
                <input value={question} onChange={e => setQuestion(e.target.value)} />
                <label>Answer</label>
                <textarea value={answer} onChange={e => setAnswer(e.target.value)} />
                <div className="Am-buttons">
                    <button type="submit">{editingId ? "Save" : "Add"}</button>
                    {editingId && <button type="button" onClick={() => { setEditingId(null); clearForm(); }}>Cancel</button>}
                </div>
            </form>

            <div className="Am-list-card">
                <div className="Am-list-header">
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                    </select>
                </div>

                <ul className="Am-faq-list">
                    {filtered.map(f => (
                        <li key={f.id} className="Am-faq-item">
                            <div>
                                <h4>Q: {f.question}</h4>
                                <p>A: {f.answer}</p>
                            </div>
                            <div className="Am-item-actions">
                                <button onClick={() => { setEditingId(f.id); setQuestion(f.question); setAnswer(f.answer); }}>Edit</button>
                                <button onClick={() => setFaqs(faqs.filter(x => x.id !== f.id))}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
