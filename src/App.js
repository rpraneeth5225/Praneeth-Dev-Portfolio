import twitter from './twitter.png'
import linkedin from './linkedin.png'
import github from './github.png'
import github2 from './github-mark.png'
import linklogo from './link-logo.png'
import resume from './resume.png'
import { Skills } from './Skills';
import resumefile from './Praneeth_Resume_USA.pdf'
import SplitType from 'split-type'
import gsap from "gsap";

// import { useState, useEffect } from 'react'


import './index.css';
import './App.css';

function App() {
    // Split text using SplitType
const loadingText = new SplitType(".loading-text.initial", { types: "chars" });
const completeText = new SplitType(".loading-text.complete", {
  types: "chars"
});
const titleText = new SplitType(".content h1", { types: "chars" });
const paragraphText = new SplitType(".content p", { types: "chars" });

gsap.set(".loading-text.complete", { y: "100%" });
gsap.set(loadingText.chars, { opacity: 0, y: 100 });
gsap.set(completeText.chars, { opacity: 0, y: 100 });

gsap.to(loadingText.chars, {
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.05,
  ease: "power2.out"
});

const colorStages = [
  { bg: "rgb(30, 35, 25)", text: "rgb(130, 125, 115)" },  
  { bg: "rgb(120, 100, 80)", text: "rgb(30, 35, 25)" },   
  { bg: "rgb(130, 125, 115)", text: "rgb(30, 35, 25)" },    
  { bg: "rgb(60, 70, 60)", text: "rgb(130, 125, 115)" }     
];

function updateColors(progress) {
  const stage = Math.floor(progress / 25);
  if (stage < colorStages.length) {
    document.querySelector(".preloader").style.backgroundColor =
      colorStages[stage].bg;
    document.querySelector(".progress-bar").style.backgroundColor =
      colorStages[stage].text;
    document
      .querySelectorAll(".loading-text .char, .percentage")
      .forEach((el) => {
        el.style.color = colorStages[stage].text;
      });
  }
}

const tl = gsap.timeline();

tl.to(".progress-bar", {
  width: "100%",
  duration: 5,
  ease: "power1.inOut",
  onUpdate: function () {
    const progress = Math.round(this.progress() * 100);
    document.querySelector(".percentage").textContent = progress;
    updateColors(progress);
  }
})
  .to(".loading-text.initial", {
    y: "-100%",
    duration: 0.5,
    ease: "power2.inOut"
  })
  .to(
    ".loading-text.complete",
    {
      y: "0%",
      duration: 0.5,
      ease: "power2.inOut"
    },
    "<"
  )
  .to(
    completeText.chars,
    {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.out"
    },
    "<0.2"
  )
  .to(".preloader", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  })
  .set(".content", { visibility: "visible" }, "=1")  
  .to(
    [titleText.chars, paragraphText.chars],
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power4.out"
    },
    "-=0.5"
  )
  .set(".preloader", { display: "none" }); 


  return (
    <div className="App">
       <div className="preloader">
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
        <div className="text-container">
        <div className="loading-text initial">Loading</div>
        <div className="loading-text complete">Complete</div>
      </div>
      <div className="percentage">0</div>
    </div>
      <div className="content">
      <div className="header">
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
      </div>

      <div className="banner">
        <section className="one">
          <p className="dev-container">DEV</p>
          <h2 className="hi-there">HI THERE, I'M 👋</h2>
          <h2 className="praneeth-text">Praneeth Regonda.</h2>
          <h2 className="dev">D E S I G N E R + D E V E L O P E R</h2>
          <h3 className="dev-2">
            I'm a front end developer based in New Jersey, USA.
          </h3>
          <a href="#footer"><button class="hire-me">hire me</button></a>
          
         
        </section>
        <a href="#about-me" class>
            <div className="scroll-down"></div>
          </a>
      </div>

      <section className="about-me" id="about-me">

        <div class="about-me-text">
        <h4>I love coding</h4>
        <h4>I use my passion and skills to build digital products and experiences</h4>
        <h4>I'm passionate building highly performant websites. </h4>
        
        </div>

        <section div="tech-stack">
        <Skills />
        </section>
      </section>

        <section id="projects" class="project">
                    <h5 class="featured-projects">F E A T U R E D  &nbsp; P R O J E C T S   -</h5>
                    <h2 class="heading-2">Stuff I have worked on 📁</h2>
                    <div class="project-box__wrapper">
                        <div class="project-box">
                            <div class="project-box__link">
                                <a href="https://github.com/rpraneeth5225/Weather-App" target="_blank" rel="noopener noreferrer"><img src={github2} class="github-black-logo" alt="GitHub Black"></img> </a>
                                <a href="https://weather-app-ten-coral-63.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={linklogo} class="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div class="project-box__content">
                                <h3 class="heading-3">Weather <br/>App.</h3>
                                <h5 class="heading-5">API &nbsp; HTML/SCSS &nbsp; JS</h5>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-box__link">
                            <a href="https://github.com/rpraneeth5225/Praneeth-Dev-Portfolio" target="_blank" rel="noopener noreferrer"><img src={github2} class="github-black-logo" alt="GitHub Black"></img></a>
                                <a href="https://praneeth-dev-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={linklogo} class="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div class="project-box__content">
                                <h3 class="heading-3">Personal <br/> Portfolio.</h3>
                                <h5 class="heading-5">HTML/CSS &nbsp; JS &nbsp; REACT</h5>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-box__link">
                                <a href="https://github.com/rpraneeth5225/Spotify-Clone" target="_blank" rel="noopener noreferrer"><img src={github2} class="github-black-logo" alt="GitHub Black"></img></a>
                                <a href="https://gudfood.netlify.app" target="_blank" rel="noopener noreferrer"><img src={linklogo} class="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div class="project-box__content">
                                <h3 class="heading-3">Spotify <br/>Clone.</h3>
                                <h5 class="heading-5">API &nbsp; HTML/SCSS &nbsp; JS</h5>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-box__link">
                                {/* <a href="Folio" target="_blank" rel="noopener noreferrer"><img src={github2} id="github-black-logo"  alt="GitHub Black"></img></a> */}
                                <a href="https://moderntrendystore.com/" target="_blank" rel="noopener noreferrer"><img src={linklogo} class="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div class="project-box__content">
                                <h3 class="heading-3">Modern Trendy<br/> Store.</h3>
                                <h5 class="heading-5">E-COM &nbsp; REACT</h5>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-box__link">
                                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer"><img src={github2} id="github-black-logo" alt="GitHub Black"></img></a>
                            </div>
                            <div class="project-box__content">
                                <h3 class="heading-3">Brand Identity.</h3>
                                <h5 class="heading-5">AI &nbsp; PS5</h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" class="contact">
                    <h5 class="heading-contact">C O N T A C T &mdash;</h5>
                    <div class="email-phone">
                    <div id="email-contact">
                      <h3 class="email-contact">E M A I L 📧 &nbsp; &mdash;</h3>
                    <a class="email-address" href="mailto:praneethregonda28@gmail.com" target="_blank" rel="nofollow noopener noreferrer">praneethregonda28@gmail.com</a>
                    </div>
              
                    <div id="phone-contact">
                    <h3 class="phone-contact">P H O N E 📞&nbsp; &mdash;</h3>
                    <a class="phone-number" href="tel: 551-229-8332" target="_blank" rel="nofollow noopener noreferrer">+1 (551)-229-8332</a>
                    </div>
                    </div>
                    
                </section>

                <footer class="footer" id="footer">
                <h5 class="praneeth-regonda"> &nbsp; © 2 0 2 4 &nbsp; P R A N E E T H &nbsp; R E G O N D A</h5>
            </footer>
      </div>
      </div>
  );
}

export default App;


