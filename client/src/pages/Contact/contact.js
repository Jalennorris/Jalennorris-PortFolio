import React from "react";
import "./contact.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <section className="contact">
        <h1>Contact Me</h1>
        
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>If you need help or want to reach out, feel free to contact me!</p>
          
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Jalentnorris@gmail.com">Jalentnorris@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+13182904446">318-290-4446</a>
          </p>
          
          <div className="availability">
            <h4>Availability</h4>
            <p>Monday to Sunday: 9 AM - 6 PM (CST)</p>
          
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
