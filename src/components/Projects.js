import React from 'react';

import github2 from '../images/social/github-mark.png';
import linklogo from '../images/social/link-logo.png';


export const Projects = () => {
    return (
        <>
         <h5 className="featured-projects">F E A T U R E D  &nbsp; P R O J E C T S   -</h5>
                    <h2 className="heading-2">Stuff I have worked on 📁</h2>
                    <div className="project-box__wrapper">
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://github.com/rpraneeth5225/Weather-App" target="_blank" rel="noopener noreferrer"><img src={github2} className="github-black-logo" alt="GitHub Black"></img> </a>
                                <a href="https://weather-app-ten-coral-63.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={linklogo} className="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3">Weather <br/>App.</h3>
                                <h5 className="heading-5">API &nbsp; HTML/SCSS &nbsp; JS</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                            <a href="https://github.com/rpraneeth5225/Praneeth-Dev-Portfolio" target="_blank" rel="noopener noreferrer"><img src={github2} className="github-black-logo" alt="GitHub Black"></img></a>
                                <a href="https://praneeth-dev-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={linklogo} className="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3">Personal <br/> Portfolio.</h3>
                                <h5 className="heading-5">HTML/CSS &nbsp; JS &nbsp; REACT</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://github.com/rpraneeth5225/Spotify-Clone" target="_blank" rel="noopener noreferrer"><img src={github2} className="github-black-logo" alt="GitHub Black"></img></a>
                                <a href="https://gudfood.netlify.app" target="_blank" rel="noopener noreferrer"><img src={linklogo} className="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3">Spotify <br/>Clone.</h3>
                                <h5 className="heading-5">API &nbsp; HTML/SCSS &nbsp; JS</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                {/* <a href="Folio" target="_blank" rel="noopener noreferrer"><img src={github2} id="github-black-logo"  alt="GitHub Black"></img></a> */}
                                <a href="https://moderntrendystore.com/" target="_blank" rel="noopener noreferrer"><img src={linklogo} className="logo-link" alt="Link-Logo"></img></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3">Modern Trendy<br/> Store.</h3>
                                <h5 className="heading-5">E-COM &nbsp; REACT</h5>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="project-box__link">
                                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer"><img src={github2} id="github-black-logo" alt="GitHub Black"></img></a>
                            </div>
                            <div className="project-box__content">
                                <h3 className="heading-3">Brand Identity.</h3>
                                <h5 className="heading-5">AI &nbsp; PS5</h5>
                            </div>
                        </div>
                    </div>

        </>
    )
}