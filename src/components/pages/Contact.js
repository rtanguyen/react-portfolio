import React from 'react';
import ContactForm from '../pages/ContactForm'

function Contact() {
    return(
        <section>
            <div className="justify-content-start ">
                <section className="contact" id="home-section">
                    <h1 className="contact-header">Say hello.</h1>
                </section>
                
                <ContactForm></ContactForm>

                <section className="contact-btns-container">
                    <div className="btnContainer py-2">
                        <ul id="contactBtns">
                          <li className="contact-list">
                            <a href="https://github.com/rtanguyen" aria-label="GitHub" target="_blank" rel="noreferrer" className="contact-link">
                              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="transparent" stroke="#83837C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" style={{background: 'transparent'}} id="svg-github" width="40" height="40">
                                  <defs>
                                    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                                        <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                                        <stop offset="50%" style={{stopColor:'#00fff5'}} />
                                        <stop offset="100%" style={{stopColor:'#952491'}} />
                                    </linearGradient>
                                    <mask id="github-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                    </mask>
                                    </defs>
                                    <g mask="url(#github-icon-mask)">
                                      <rect x="0" y="0" width="40" height="40" fill="#83837C" />
                                      <rect className="svg-gradient" x="0" y="0" width="40" height="40" fill="url(#gradient)" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        
                        <li className=" contact-list clbtns">
                          <a href="https://www.linkedin.com/in/rtanguyen/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="transparent" stroke="#83837C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin" style={{background: 'transparent'}} id="svg-linkedin" width="40" height="40">
                              <defs>
                                <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                                    <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                                    <stop offset="50%" style={{stopColor:'#00fff5'}} />
                                    <stop offset="100%" style={{stopColor:'#952491'}} />
                                </linearGradient>
                                <mask id="linkedin-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2" />
                                </mask>
                                </defs>
                                <g mask="url(#linkedin-icon-mask)">
                                  <rect x="0" y="0" width="40" height="40" fill="#83837C" />
                                  <rect className="svg-gradient" x="0" y="0" width="40" height="40" fill="url(#gradient)" />
                                </g>
                            </svg>
                          </a>
                      </li>
            
            
                      <li className="contact-list clbtns">
                        <a href="mailto:rtanguyen@gmail.com">
                          <svg id="svg-email" viewBox="0 0 24 24" fill="transparent" stroke="#83837C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail" style={{background: 'transparent'}} width="40" height="40">
                            <defs>
                              <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                                <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                                <stop offset="50%" style={{stopColor:'#00fff5'}} />
                                <stop offset="100%" style={{stopColor:'#952491'}} />
                              </linearGradient>
                              <mask id="email-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </mask>
                            </defs>
                            <g mask="url(#email-icon-mask)">
                              <rect x="0" y="0" width="40" height="40" fill="#83837C" />
                              <rect className="svg-gradient" x="0" y="0" width="40" height="40" fill="url(#gradient)"/>
                            </g>
                          </svg>
                        </a>
                      </li>
                        </ul>
                      </div>
                </section>
            {/* <ContactForm></ContactForm> */}
            </div>

        </section>
    )
}

export default Contact;