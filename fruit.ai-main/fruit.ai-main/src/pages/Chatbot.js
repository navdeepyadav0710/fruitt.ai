import React from 'react';
import './Chatbot.css'; 

const fruits = [
  { id: 1, name: 'Apple', details: 'Apples are nutritious and good for health.' },
  { id: 2, name: 'Banana', details: 'Bananas are a great source of potassium.' },
];

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <h2>Fruits Information</h2>
      <div className="fruit-cards">
        {fruits.map((fruit) => (
          <div className="fruit-card" key={fruit.id}>
            <h5>{fruit.name}</h5>
            <p>{fruit.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
