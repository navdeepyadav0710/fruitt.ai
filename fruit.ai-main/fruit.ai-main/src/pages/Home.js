import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Fruit.ai Services</h2>
      <div className="home-services">
        <Link to="/chatbot" className="home-service">
          <img src="/assets/robotic.png" alt="Chatbot" />
          <p>Chatbot</p>
        </Link>
        <Link to="/translator" className="home-service">
          <img src="/assets/translation.png" alt="Translator" />
          <p>Translator</p>
        </Link>
        <Link to="/faq" className="home-service">
          <img src="/assets/faq.png" alt="FAQ" />
          <p>FAQ</p>
        </Link>
        <Link to="/about" className="home-service">
          <img src="/assets/info.png" alt="About" />
          <p>About</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
