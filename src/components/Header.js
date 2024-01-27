import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "../css/Header.css";

function Header() {
    const [isMessageOpen, setMessageOpen] = useState(false);
  
    const toggleMessage = () => {
      setMessageOpen(!isMessageOpen);
    };
  
    return (
      <div className="bruh">
        <h1>Wordle</h1>
        <div className="message-icon" onClick={toggleMessage}>
          <FaEnvelope />
        </div>
        <div className={`message-container ${isMessageOpen ? 'active' : ''}`}>
          <p>This application is dedicated to my Girlfriend. I appreciate her and everything she does. I believe she has been blessing to my life and many others. This small project not only counts as a significant milestone between us, but a reminder of how dedicated I am to her. I am glad to have met her and look forward to many more memories. Thank you from the bottom of my heart, for helping me be who I am today.</p>
          {/* Add more message content as needed */}
        </div>
      </div>
    );
  }
  

export default Header