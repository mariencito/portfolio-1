import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import './index.css'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
        <Header />
        <About/>
        <Portfolio />
        <Contact/>
        <Footer />
   
     
   
  </React.StrictMode>,
);
