import React, { useState, useEffect } from 'react';
import './portfolio.css';

function Portfolio() {
  const [animatePortfolio, setAnimatePortfolio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutMeSectionHeight = document.getElementById('about-me').clientHeight;
      const triggerPosition = aboutMeSectionHeight; // Trigger animation when the about me section is out of view

      if (scrollY >= triggerPosition) {
        setAnimatePortfolio(true);
      } else {
        setAnimatePortfolio(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="portfolio" className={animatePortfolio ? 'slide-in-from-bottom animated' : 'slide-in-from-bottom'}>
      <h1 id="title">Portfolio</h1>
      <div className="projects">
        <div className="project-container" id="pawgress">
          <h2>Pawgress</h2>
          <h3>This is a social media site for dogs!</h3>
          <a href="https://github.com/mariencito/pawgress1"><img id="git" src="github.png"></img></a>
          <a href="https://pawgress1-64f30b8d2b8e.herokuapp.com/"><img id="git" src="doggo.png"></img></a>
        </div>
        <div className="project-container" id="sports-quiz">
          <h2>Sports Quiz</h2>
          <h3>This is a sports quiz using an API to generate the questions!</h3>
          <a href="https://github.com/mariencito/Sports-Quiz"><img id="git" src="github.png"></img></a>
          <a href="https://mariencito.github.io/Sports-Quiz/"><img id="launch" src="trivia.png"></img></a>
        </div>
        <div className="project-container" id="JATE">
          <h2>Just Another Text Editor</h2>
          <h3>This is an installable text editor! Its used to type and edit text.</h3>
          <a href="https://github.com/mariencito/text-editor"><img id="git" src="github.png"></img></a>
          <a href="https://text-editor-mcg-5c1011001da7.herokuapp.com/"><img id="jate" src="JATE.png"></img></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio