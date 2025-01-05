import React from 'react';
import Navbar from '../../components/navBar';
import Footer from '../../components/footer';
import './home.css';
import Jalennorris from '../../assets/images/jalennorris.jpeg'
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            {/* Helmet for SEO */}
            {/*<Helmet>
                <title>Home | Jalen Norris</title>
                  Meta tags for SEO 
                <meta name="description" content="Hi, I'm Jalen Norris, a Software Engineer based in Houston, TX. Explore my portfolio and get in touch!" />
                <meta name="keywords" content="Jalen Norris, Software Engineer, Houston, Texas, Portfolio, Contact" />
                <meta name="author" content="Jalen Norris" />
                <meta property="og:title" content="Jalen Norris - Software Engineer" />
                <meta property="og:description" content="Discover Jalen Norris' journey as a software engineer and connect today!" />
                <meta property="og:image" content="https://yourwebsite.com/path-to-image/jalennorris.jpeg" />
                <meta property="og:url" content="https://yourwebsite.com/home" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Jalen Norris - Software Engineer" />
                <meta name="twitter:description" content="Discover Jalen Norris' journey as a software engineer and connect today!" />
                <meta name="twitter:image" content="https://yourwebsite.com/path-to-image/jalennorris.jpeg" />
                <meta name="twitter:url" content="https://yourwebsite.com/home" />
                <meta name="linkedin:title" content="Jalen Norris - Software Engineer" />
                <meta name="linkedin:description" content="Discover Jalen Norris' journey as a software engineer and connect today!" />
                <meta name="linkedin:image" content="https://yourwebsite.com/path-to-image/jalennorris.jpeg" />
                 <meta name="linkedin:url" content="https://yourwebsite.com/home" />  
            </Helmet>
            */}

            <header className="introduction-section">
                
                <img src={Jalennorris} alt="Jalen Norris" className="profile-image" />
                <div>
                <p className="introduction-text">
                    Hi, I'm Jalen Norris.
                    <span className="introduction-text-span"> Software Engineer based in Houston, Tx.</span>
                    <p className="introduction-quote">
                    "In the world of code, complexity is the path to mastery; <br />
                    each line I write, each challenge I face, is a step closer to becoming the engineer I aspire to be."
                </p>
                    <div className='link-container'>
                    <Link to="/contact" className="link-contact" aria-label="Contact Me">
                    <p className="text-contact">Contact me</p>
                    </Link>
                    <Link className='link-contact' to='/resume'>
                    <p className="text-contact">Resume</p>
                    </Link>
                    </div>
                </p>
                </div>
                
            </header>
            
               

 <main className="skills-container">
  <h2 className="skills-header">My Skills</h2>
  <div className="skills-grid">
    <div className="skill-category">
      <h3>Programming</h3>
      <ul>
        <li>JavaScript</li>
        <li>Java</li>
        <li>TypeScript</li>
        <li>PHP</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
        <li>PSQL</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Frameworks</h3>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React Native</li>
        <li>SpringBoot</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Tools</h3>
      <ul>
        <li>Visual Studio</li>
        <li>PyCharm</li>
        <li>IntelliJ</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>XAMPP</li>
      </ul>
    </div>
  </div>
</main>


            <Footer />
        </div>
    );
};

export default Home;
