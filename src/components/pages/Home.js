import React from "react";


function Home() {
    return (
        <div className="justify-content-start">
          <section className="home" id="home-section">
            <h1>REBECCA NGUYEN</h1>
            <div className="hero-bg pt-3 px-4">
              <div className="subheader">Building things for the internet
              <br /><br />
              Full-stack web developer based in Austin, Texas.
              </div>
              
            </div>
          </section>

        <section>
        <div className="justify-content-start pb-5 mb-5">
          <section className="home" id="work-section">
            <h2>Some things I've built</h2>
            <p>
              Check out my <a href="work.html">projects page</a> page for more!
            </p>
            
          <div className="row feat-project-container ">
          <div className="col-lg-5 col-sm-6 pt-5">
            <div className="card feat-project">
                <div className="card-header text-center feat-project-title">
                <img src={require('../../assets/images/movie-mixer-favicon.png').default} alt='movie-mixer'/>
                </div>
                <div className="card-body feat-project-info my-3 position-relative">
                  <h5>Movie Mixer</h5>
                  <p>A web app which selects a movie and drink based on user input.</p>

                  <div className="flex flex-wrap">
                    <div className="pb-3">
                      <span className="badge mx-1">JavaScript</span> 
                      <span className="badge mx-1">HTML</span> 
                      <span className="badge mx-1">CSS</span> 
                      <span className="badge mx-1">Bulma</span> 
                    </div>
                  </div>
                  <div className="work-links position-absolute bottom-0">
                    <a href="https://rtanguyen.github.io/MovieMixer/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" width="25" height="25">
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
            </div>
          </div>
          <div className="spacer"></div>


              <div className="col-lg-5 col-sm-6 pt-5">
                <div className="card feat-project">
                <div className="card-header text-center feat-project-title">
                  <img src={require('../../assets/images/miso-hungry-favicon.png').default} alt='miso-hungry'/>
                </div>
                <div className="card-body feat-project-info my-3 position-relative">
                  <h5>Miso Hungry</h5>
                  <p>An app where users can explore and save new recipes and review the content.</p>
                  <div className="flex flex-wrap">
                    <div className="pb-3">
                      <span className="badge mx-1">JavaScript</span> 
                      <span className="badge mx-1">Node.js</span> 
                      <span className="badge mx-1">Express</span> 
                      <span className="badge mx-1">Bootstrap</span> 
                      <span className="badge mx-1">Handlebars</span> 

                      
                    </div>
                    <div className="work-links position-absolute bottom-0">
                      <a href="https://intense-temple-14332.herokuapp.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" width="25" height="25">
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                </div>
              </div>
          </div>
          </div>
          </div>
          </section>
        </div>
        </section>

        <footer>
        <div id="contact" className="py-4 pt-5">
            <div className="copyright">
            </div>
            <div  className="contact-info pt-3 row">
                <div >

                <ul id="contactBtns">
                <li className="contact-list px-5">
                    <a href="https://github.com/rtanguyen" aria-label="GitHub" target="_blank" rel="noreferrer" className="contact-link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="transparent" stroke="#83837C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" style={{background: 'transparent'}} id="svg-github" width="50" height="50">
                        <defs>
                            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                            <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                            <stop offset="50%" style={{stopColor:'#00fff5'}} />
                            <stop offset="100%" style={{stopColor:'#952491'}} />
                            </linearGradient>
                            <mask id="github-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                            </mask>
                            </defs>
                            <g mask="url(#github-icon-mask)">
                            <rect x="0" y="0" width="50" height="50" fill="#83837C" />
                            <rect className="svg-gradient" x="0" y="0" width="50" height="50" fill="url(#gradient)" />
                            </g>
                        </svg>
                    </a>
                </li>
    
                <li className=" contact-list px-5">
                <a href="https://www.linkedin.com/in/rtanguyen" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="transparent" stroke="#83837C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin" style={{backgroundColor: "transparent"}} id="svg-linkedin" width="50" height="50">
                    <defs>
                        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                        <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                        <stop offset="50%" style={{stopColor:'#00fff5'}} />
                        <stop offset="100%" style={{stopColor:'#952491'}} />
                        </linearGradient>
                        <mask id="linkedin-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2" />
                        </mask>
                        </defs>
                        <g mask="url(#linkedin-icon-mask)">
                        <rect x="0" y="0" width="50" height="50" fill="#83837C" />
                        <rect className="svg-gradient" x="0" y="0" width="50" height="50" fill="url(#gradient)" />
                        </g>
                    </svg>
                </a>
            </li>


            <li className="contact-list px-5">
                <a href="mailto:rtanguyen@gmail.com">
                <svg id="svg-email" viewBox="0 0 24 24" fill="transparent" stroke="#83837C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail" style={{background: 'transparent'}} width="50" height="50">
                    <defs>
                    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                        <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                        <stop offset="50%" style={{stopColor:'#00fff5'}} />
                        <stop offset="100%" style={{stopColor:'#952491'}} />
                    </linearGradient>
                    <mask id="email-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </mask>
                    </defs>
                    <g mask="url(#email-icon-mask)">
                    <rect x="0" y="0" width="50" height="50" fill="#83837C" />
                    <rect className="svg-gradient" x="0" y="0" width="50" height="50" fill="url(#gradient)"/>
                    </g>
                </svg>
                </a>
            </li>
                </ul>
            </div>
            </div>
            </div>
            <div className="footer-text-container">
                <p className="footer_text justify-content-center">Copyright &amp; Design © Rebecca Nguyen 2021</p>
            </div>
      </footer>
        </div>
    );
}

export default Home;