import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest news and updates straight to your inbox.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
