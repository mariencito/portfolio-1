import React from 'react';
import './header.css';

function Header() {
  

  return (
    <>
      <header>
      <p id="name">Marien</p>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1J2h0SK9jItp-v-TNPXizZ7fZdNKN8Owy/view?usp=sharing" target="_blank">Resume</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
