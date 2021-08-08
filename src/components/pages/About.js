import React from 'react';
import Footer from './Footer';
import bioimage from '../../assets/images/bioimage.png'

function About() {
    return (
        <div className="justify-content-start about" id="about-section">
                <h2 className="about-header">A bit about me</h2>
                <div className="container mb-5 about-container">
                    <div className="row info-container pt-3 ">
                    <div id="img-container" className="col-xl-5">
                        <div className="inner-img-container">
                        <img src={bioimage} className="bio-img img-fluid" alt="bio-img"/>
                        </div>
                    </div>
                    <div className="col-xl-7">    
                        <p id="about-me-text" className="py-5 mb-5">
                            Hello World! I'm Rebecca Nguyen, a Full Stack Web Developer living in Austin, Texas. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /><br />
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    </div>                          
                </div>
            <div className="pt-5 row ts-padding">
                <h3 className="skills-header skills-container">My Toolkit</h3>
            </div>
            <div className="row technical-skills">
                <div className="col-3">
                <h6 className="pt-3">Programming Languages</h6>
                <ul className="px-4">
                    <li className="list">JavaScript (ES6+)</li>
                    <li className="list">SQL</li>
                    <li className="list">R</li>
                    <li className="list">Visual Basic</li>
                </ul>
                </div>
                <div className="col-3">
                <h6 className="pt-3">Libraries & Frameworks</h6>
                <ul className="px-4">
                    <li className="list">Node.js</li>
                    <li className="list">React</li>
                    <li className="list">Express</li>
                    <li className="list">jQuery</li>
                    <li className="list">Webpack</li>
                </ul>
                </div>
                <div className="col-3">
                <h6 className="pt-3">Databases</h6>
                <ul className="px-4">
                    <li className="list">MongoDB</li>
                    <li className="list">Mongoose</li>
                    <li className="list">MySQL</li>
                    <li className="list">Sequelize</li>

                </ul>
                </div>
            </div>

            {/* <!-- RESUME BUTTON --> */}
            <div className="row py-5">
                <div className="res-btn-container container">
                <div className="row pt-3">                                
                        <a href="assets/files/RebeccaNguyen-Resume.pdf" target="_blank" className="res-btn">
                            <svg width="235" height="62">
                                <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" style={{stopColor:'#71f9c8'}} />
                                <stop offset="50%" style={{stopColor:'#A4EAF1'}} />
                                <stop offset="100%" style={{stopColor:'#EBC4EA'}} />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="225" height="50"></rect>
                        </svg>
                        <span>resume</span>
                    </a>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default About;