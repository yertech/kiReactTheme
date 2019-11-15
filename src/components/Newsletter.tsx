import React from "react";
import "./Newsletter.css";

interface Props {}

const Newsletter: React.FC<Props> = () => {
  return (
    <div className="Newsletter">
      <div className="form-subscribe">
        <div className="input-box">
          <input
            id="newsletter"
            name="contact[email]"
            type="text"
            placeholder="Email pour newsletter..."
            title="EMAIL POUR NEWSLETTERS"
            className="input-text"
          />
          <button
            type="submit"
            name="subscribe"
            title="Subscribe"
            className="button newsletter"
          >
            <span>
              <span>ENVOYER</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
