
import SplitType from 'split-type'
import gsap from "gsap";
import { LoadingAnimation } from './components/LoadingAnimation';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import {Contact} from './components/Contact';
import { Footer} from './components/Footer';


// import { useState, useEffect } from 'react'


import './index.css';
import './App.css';

function App() {

  const loadingText = new SplitType(".loading-text.initial", { types: "chars" });
const completeText = new SplitType(".loading-text.complete", { types: "chars" });

  const titleText = new SplitType(".content h1", { types: "chars" });
  const paragraphText = new SplitType(".content p", { types: "chars" });
  
  // Initial states
  gsap.set(".loading-text.complete", { y: "100%" });
  gsap.set(loadingText.chars, { opacity: 0, y: 100 });
  gsap.set(completeText.chars, { opacity: 0, y: 100 });
  
  // Animate in loading text
  gsap.to(loadingText.chars, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out"
  });
  
  const colorStages = [
    { bg: "rgb(60, 66, 55)", text: "rgb(230, 225, 215)" },
    { bg: "rgb(200, 180, 160)", text: "rgb(60, 66, 55)" },
    { bg: "rgb(230, 225, 215)", text: "rgb(60, 66, 55)" },
    { bg: "rgb(100, 110, 90)", text: "rgb(230, 225, 215)" }
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
      y: "-100vh",
      duration: 1,
      ease: "power2.inOut",
      delay: 0.8
    })
    .set(
      ".content",
      {
        visibility: "visible"
      },
      "-=1"
    )
    .to(
      [titleText.chars, paragraphText.chars],
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power4.out"
      },
      "-=1"
    )
    .set(".preloader", {
      display: "none"
    });

  return (
    <div className="App">
      <div className="preloader">
        < LoadingAnimation/>
      </div>
    
      <div className="content">
        <div className="header">
          < Header/>
        </div>

        <div className="banner">
          < Banner/>
          <a href="#about-me" class>
            <div className="scroll-down"></div>
          </a>
        </div>

        <section className="about-me" id="about-me">
          < AboutMe/>
          <section div="tech-stack">
            <Skills />
          </section>
        </section>

        <section id="projects" class="project">
          < Projects/>
        </section>
        <section id="contact" class="contact">
           < Contact/>
        </section>

        <footer class="footer" id="footer">
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default App;


