// src/pages/about/About.js
import React from 'react';
import Navbar from '../../components/navBar';
import Footer from '../../components/footer';
import './about.css';

const About = () => (
  <div className='about-container'>
    <Navbar />
    <div className="about-content">
      <h1>About Me</h1>
      
      {/* Introduction */}
      <section className="intro">
      <p>
  Hi, I'm Jalen Norris, a software engineer with a focus on full-stack development using JavaScript and Java. My passion lies in creating dynamic web applications, utilizing front-end technologies like React and JavaScript, alongside robust back-end solutions built with Java and Spring Boot. With a deep understanding of both front-end and back-end development, I’m able to design seamless, scalable solutions that enhance the user experience and drive efficiency. I’m always exploring new ways to improve my development practices and stay ahead of the latest trends in web development.
</p>
<p>
  Throughout my career, I've worked on projects that range from building intuitive user interfaces to designing powerful server-side applications. My experience with JavaScript allows me to create responsive, interactive front-end components, while my knowledge of Java and Spring Boot enables me to develop secure, performant back-end systems. I thrive in environments where I can solve complex technical challenges and contribute to the growth of the products I work on. As I continue to develop my skills, I’m eager to tackle new projects that combine the best of both front-end and back-end technologies, ultimately building applications that have a real impact on users and businesses.
</p>


      </section>

      {/* Education and Degree */}
      <section className="education">
        <h2>Education</h2>
        <div className='education-content'>
        <p className='education-description'>
          I earned my degree in Computer Science from Wilmington University, where I gained hands-on experience in various programming languages, frameworks, and software development practices. I also participated in coding competitions and projects that helped me develop a deeper understanding of software engineering.
        </p>
        <ul className='education-description'>
          <li>Degree:Computer Science</li>
          <li>Institution: Wilmington University</li>
          <li>Graduation Year: Decemeber 2024</li>
        </ul>
        </div>
      </section>

      {/* Life Story Section */}
      <section className="life-story">
        <h2>My Journey</h2>
        <p>
          My journey into software engineering started with a fascination for technology and problem-solving. Growing up, I loved taking things apart and figuring out how they worked. Over time, this curiosity led me to explore programming, starting with basic HTML, CSS, and JavaScript.
        </p>
        <p>
          After completing my degree, I learned to build web applications, develop full-stack systems, and collaborate with teams to create scalable, efficient software solutions. Along the way, I encountered challenges that pushed me to grow as a developer and to always be curious about new technologies and methods.
        </p>
        <p>
          Now, I’m focusing on continuing to grow as a full-stack software engineer, exploring new languages, frameworks, and cloud technologies to enhance the user experience and improve performance. I’m always open to learning and contributing to exciting new projects!
        </p>
      </section>

      {/* Skills & Technologies */}
      <section className="concentrations">
  <h2>Concentrations</h2>
  <div className="concentration-grid">
    <div className="concentration-item">
      <i className="icon">💻</i>
      <p>Software Engineering</p>
    </div>
    <div className="concentration-item">
      <i className="icon">🎨</i>
      <p>Frontend Development</p>
    </div>
    <div className="concentration-item">
      <i className="icon">⚙️</i>
      <p>Backend Development</p>
    </div>
    <div className="concentration-item">
      <i className="icon">🌐</i>
      <p>Web Development</p>
    </div>
    <div className="concentration-item">
      <i className="icon">🗄️</i>
      <p>Database Management</p>
    </div>
    <div className="concentration-item">
      <i className="icon">📱</i>
      <p>Mobile Development</p>
    </div>
  </div>
</section>
<section className="timeline">
  <h2>Timeline</h2>
  <div className="timeline-container">
    <div className="timeline-item left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>March 2019</h3>
        <p>Started exploring web development with HTML, CSS, and JavaScript.</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>August 2021</h3>
        <p>Enrolled in Computer Science at Wilmington University.</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>December 2021</h3>
        <p>Completed online courses in React.js, Node.js, and PostgreSQL on platforms like Coursera and Udemy.</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>May 2023</h3>
        <p>Worked independently on full-stack web development projects, gaining experience in building scalable web applications.</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>August 2023</h3>
        <p>Sharpened debugging and problem-solving skills by resolving challenging issues in my personal projects and learning through trial and error.</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>January 2024</h3>
        <p>Began learning React Native to develop mobile applications, gaining experience in cross-platform development.</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>March 2024</h3>
        <p>Explored Java with Spring Boot to build robust and scalable backend services.</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3> Decemeber 2024</h3>
        <p>Graduating with a Computer Science degree from Wilmington University.</p>
      </div>
    </div>
  </div>
</section>




    </div>

    <Footer />
  </div>
);

export default About;
