import twitter from './twitter.png'
import linkedin from './linkedin.png'
import github from './github.png'
import github2 from './github-mark.png'
import linklogo from './link-logo.png'
import resume from './resume.png'
import resumefile from './Praneeth_Resume_USA.pdf'
import './index.css';
import './App.css';

function App() {
  
  function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('datetime').innerText = `Last login: ${formattedDateTime}`;
}

setInterval(updateDateTime, 1000);  

  return (
    <div className="App">
      <div className="header">
        <div className="nav">
          <div className="home"><a href="portfolio.html">H O M E</a></div>
          <div className="blogs"><a href="#">B L O G</a></div>
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
        <a href="#about-me">
            <div className="scroll-down"></div>
          </a>
      </div>

        <section className="about-me" id="about-me">
          <div className="title-bar">
            <div className="mac-buttons">
              <a href="portfolio.html"><button className="close"></button></a>
              <button className="minimize" id="minimize"></button>
              <button className="maximize"></button>
            </div>
            <span className="title"></span>
          </div>
          <div className="content">
            <div id="terminal" className="terminal">
              <p id="datetime" className="datetime"></p>
            </div>
            <div className="input-statement"> &gt; Praneeth.currentLocation <br /></div>
            <div className="output">"Jersey City, NJ";</div>
            <br />
            <div className="input-statement">&gt; Praneeth.mail <br /></div>
            <div className="output">
              <a href="mailto: praneethregonda28@gmail.com">"praneethregonda28@gmail.com"</a>
            </div>
            <br />
            <div className="input-statement"> &gt; Praneeth.social <br /></div>
            <div className="output">
              [<a href="https://twitter.com/PraneethSays">"&nbsp;Twitter&nbsp;"</a>&nbsp;,
              <a href="https://www.linkedin.com/in/praneeth-regonda/">"&nbsp;LinkedIn&nbsp;"</a>&nbsp;,
              <a href="https://github.com/rpraneeth5225">"&nbsp;GitHub&nbsp;"</a>];
            </div>
            <br />
            <div className="input-statement"> &gt; Praneeth.interests <br /></div>
            <div className="output">
              ["&nbsp;Web Development&nbsp;",&nbsp; "&nbsp;Formula-1&nbsp;",&nbsp; "&nbsp;E-Commerce&nbsp;"];
            </div>
            <br />
            <div className="input-statement"> &gt; Praneeth.education <br /></div>
            <div className="output">
              "Master's in Information Systems - Pace University,&nbsp; New York"
            </div>
            <br />
            <div className="input-statement"> &gt; Praneeth.skills <br /></div>
            <div className="output">
              ["&nbsp;JavaScript&nbsp;",&nbsp; "&nbsp;React&nbsp;",&nbsp; "&nbsp;npm&nbsp;",&nbsp; "&nbsp;git&nbsp;",&nbsp; "&nbsp;HTML5&nbsp;",&nbsp; "&nbsp;CSS3&nbsp;"];
            </div>
          </div>
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
                    <div id="email-contact">
                      <h3 class="email-contact">E M A I L 📧 &nbsp; &mdash;</h3>
                    <a class="email-address" href="mailto:praneethregonda28@gmail.com" target="_blank" rel="nofollow noopener noreferrer">praneethregonda28@gmail.com</a>
                    </div>
              
                    <div id="phone-contact">
                    <h3 class="phone-contact">P H O N E 📞&nbsp; &mdash;</h3>
                    <a class="phone-number" href="tel: 551-229-8332" target="_blank" rel="nofollow noopener noreferrer">+1 (551)-229-8332</a>
                    </div>
                </section>

                <footer class="footer" id="footer">
                <h5 class="praneeth-regonda"> &nbsp; © 2 0 2 4 &nbsp; P R A N E E T H &nbsp; R E G O N D A</h5>
            </footer>
      </div>
  );
}

export default App;
