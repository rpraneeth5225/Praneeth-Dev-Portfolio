import React from 'react';
import twitter from '../images/social/twitter.png';
import linkedin from '../images/social/linkedin.png';
import resume from '../images/social/resume.png';
import github from '../images/social/github.png';
import resumefile from '../Praneeth_Resume_USA.pdf'


export const Header = () => {
    return (

        <>
            <div className="nav">
          <div className="home"><a href="portfolio.html">H O M E</a></div>
          <div className="blogs"><a href="https://medium.com/@praneethregonda" target="_blank" rel="nofollow noopener noreferrer">B L O G</a></div>
        </div>
        <div className="social-links">
        <div className="resume">
            <a href={resumefile} target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="Twitter Logo" />
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/PraneethSays" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter Logo" />
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/rpraneeth5225" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Logo" />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/praneeth-regonda/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
        </>

    )
}