import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="/about" aria-label="About Page">About</a>
      <a href="/contact" aria-label="Contact Page">Contact</a>
    
    </div>
    <div className="social-icons">
      <a href="https://github.com/Jalennorris" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/jalen-norris-623284247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
        <FaLinkedin size={24} />
      </a>
    </div>
    <div className="copyright">
      © 2025 Jalen Norris. All rights reserved.
    </div>
  </footer>
);

export default Footer;
