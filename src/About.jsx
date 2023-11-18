import React, { useState, useEffect } from 'react';
import './about.css';

function About() {
  const [animateAboutMe, setAnimateAboutMe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPosition = 400; // Adjust this value based on when you want the animation to trigger

      if (scrollY >= triggerPosition) {
        setAnimateAboutMe(true);
      } else {
        setAnimateAboutMe(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about ${animateAboutMe ? 'slide-up' : ''}`}>
      <h1 id="about-me">About Me</h1>
      <img id="marien" src="marien.jpeg" alt="Marien Castellanos" />
      <div className="about-text">
        <h2>"A UI is like a good joke. If you have to explain it, it's not that good."</h2>
        <p>
        My name is Marien Castellanos, I am a Full-Stack Developer. I used to be an electronics repair technician. I decided to join the coding bootcamp at the University of Miami to learn how to code quicker. I earned my associate degree, and I am working toward my bachelor's degree in Computer Science. I am ready to improve your business.
        </p>
      </div>
    </div>
  );
}

export default About;