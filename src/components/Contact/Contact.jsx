import React, { useEffect } from 'react';
import './Contact.css';

function Contact({ setTitle }) {
  useEffect(() => {
    setTitle('Contact');
  }, []);
  return (
    <div className="page">
      <div className="contact">
        <div>.</div>
      </div>
    </div>
  );
}

export default Contact;
