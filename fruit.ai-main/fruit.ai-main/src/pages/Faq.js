import React, { useState } from 'react';
import './Faq.css'; 

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddFaq = () => {
    if (!question || !answer) {
      alert('Please fill in both question and answer fields.');
      return;
    }
    setFaqs([...faqs, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };

  const handleDeleteFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>FAQs</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
        />
        <textarea
          className="form-control mt-2"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter answer"
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleAddFaq}>
          Add FAQ
        </button>
      </div>

      <ul className="list-group mt-4">
        {faqs.map((faq, index) => (
          <li className="list-group-item" key={index}>
            <strong>Q: {faq.question}</strong>
            <p>A: {faq.answer}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteFaq(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
