import React from "react";
import Footer from "./Footer";
import FeatProjects from "./FeatProjects";
import OtherProjects from "./OtherProjects";

function Projects() {
  // const [featured] = [
  //   {
  //     title: "Beyond Us",
  //     techs: [
  //       "JavaScript",
  //       "Node.js",
  //       "Express",
  //       "React",
  //       "Mongoose",
  //       "MongoDB",
  //       "Cloudinary",
  //     ],
  //     description: `A full stack application which provides users a platform to voice their opinions and bring awareness to various causes, connect with non-profits  organizations, and discover opportunities to help make a difference.`,
  //     link: "https://young-taiga-79587.herokuapp.com/",
  //     github: "https://github.com/rtanguyen/beyond-us",
  //     img: "../../assets/images/beyond-us-favicon.png",
  //   },
  //   {
  //     title: "Miso Hungry",
  //     techs: [
  //       "JavaScript",
  //       "Node.js",
  //       "Express.js",
  //       "MySql",
  //       "Sequelize",
  //       "Bootstrap",
  //       "Cloudinary",
  //       "Handlebars.js",
  //     ],
  //     description: `Web application to browse, review, and favorite recipes.`,
  //     link: "https://intense-temple-14332.herokuapp.com/",
  //     github: "https://github.com/rtanguyen/miso-hungry",
  //     img: "../../assets/images/miso-hungry-favicon.png",
  //   },
  //   {
  //     title: "Movie Mixer",
  //     techs: ["JavaScript", "HTML", "CSS", "Bulma"],
  //     description: `An application designed to help select a movie and a drink based on user input.`,
  //     link: "https://rtanguyen.github.io/MovieMixer/",
  //     github: "https://github.com/rtanguyen/MovieMixer",
  //     img: "../../assets/images/movie-mixer-favicon.png",
  //   },
  // ];

  // const otherProjects = [
  //   {
  //     title: "Weather Dashboard",
  //     techs: ["JavaScript", "Bootstrap"],
  //     description: `7 day weather forecast.`,
  //     link: "https://rtanguyen.github.io/weatherdashboard/",
  //     github: "https://github.com/rtanguyen/weatherdashboard",
  //     img: "../../assets/images/weather-favicon.jpg",
  //   },
  //   {
  //     title: "E-Commerce",
  //     techs: ["Node.js", "Express", "MySql", "Sequelize"],
  //     description: `Backend architecture for an e-commerce website.`,
  //     github: "https://github.com/rtanguyen/e-commerce",
  //     img: "../../assets/images/ecommerce-favicon.jpg",
  //   },
  //   {
  //     title: "Hangman",
  //     techs: ["JavaScript", "Bootstrap"],
  //     description: `The classic word guessing game.`,
  //     link: "https://rtanguyen.github.io/hangman/",
  //     github: "https://github.com/rtanguyen/hangman",
  //     img: "../../assets/images/hangman.png",
  //   },
  // ];

  return (
    <div className="justify-content-center">
      <section className="about" id="home-section">
        <h2 className="about-header">My work</h2>

        {/* <!-- =======FEAT WORKS======= --> */}
        {/* <div className="row feat-project-container m-5">
            {featured.map((projects) => (
              <FeatProjects key={projects.title} items={projects} />
            ))}
          </div> */}
        <div className="row feat-project-container m-5">
          <div className="col-4 col-sm-6 mb-2">
            <div className="card feat-project">
              <div className="card-header text-center feat-project-title">
                <img
                  src={
                    require("../../assets/images/beyond-us-favicon.png").default
                  }
                  alt="beyond-us"
                  className="img-fluid"
                />
              </div>
              <div className="card-body feat-project-info my-3 position-relative">
                <h5>Beyond Us</h5>
                <p>
                  A full stack application which provides users a platform to
                  voice their opinions and bring awareness to various causes,
                  connect with non-profits organizations, and discover
                  opportunities to help make a difference.
                </p>
                <div className="flex flex-wrap mb-2">
                  <div className="pb-3">
                    <span className="badge mx-1">JavaScript</span>
                    <span className="badge mx-1">React</span>
                    <span className="badge mx-1">Node.js</span>
                    <span className="badge mx-1">Express</span>
                    <span className="badge mx-1">Mongoose</span>
                    <span className="badge mx-1">MongoDB</span>
                    <span className="badge mx-1">Cloudinary</span>
                  </div>
                </div>
                <div className="work-links position-absolute bottom-0">
                  <a
                    href="https://github.com/rtanguyen/beyond-us"
                    aria-label="External Link"
                    className="external"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-external-link"
                      width="25"
                      height="25"
                    >
                      <title>External Link</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>

                  <a
                    href="https://young-taiga-79587.herokuapp.com/"
                    aria-label="External Link"
                    className="external"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-external-link"
                      width="25"
                      height="25"
                    >
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

          <div className="col-4 col-sm-6 mb-2">
            <div className="card feat-project">
              <div className="card-header text-center feat-project-title">
                <img
                  src={
                    require("../../assets/images/miso-hungry-favicon.png")
                      .default
                  }
                  alt="miso-hungry"
                  className="img-fluid"
                />
              </div>
              <div className="card-body feat-project-info my-3 position-relative">
                <h5>Miso Hungry</h5>
                <p>Web application to browse, review, and favorite recipes.</p>
                <div className="flex flex-wrap mb-2">
                  <div className="pb-3">
                    <span className="badge mx-1">JavaScript</span>
                    <span className="badge mx-1">Node.js</span>
                    <span className="badge mx-1">Express</span>
                    <span className="badge mx-1">MySql</span>
                    <span className="badge mx-1">Sequelize</span>
                    <span className="badge mx-1">Bootstrap</span>
                    <span className="badge mx-1">Handlebars</span>
                  </div>
                  <div className="work-links position-absolute bottom-0">
                    <a
                      href="https://github.com/rtanguyen/miso-hungry"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
                        <title>External Link</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    <a
                      href="https://intense-temple-14332.herokuapp.com/"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
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

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4 col-sm-6 mb-2">
                <div className="card feat-project">
                  <div className="card-header text-center feat-project-title">
                    <img
                      src={
                        require("../../assets/images/movie-mixer-favicon.png")
                          .default
                      }
                      alt="movie-mixer"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body feat-project-info my-3 position-relative">
                    <h5>Movie Mixer</h5>
                    <p>
                      Web application which generates a movie and drink based on
                      user input.
                    </p>
                    <div className="flex flex-wrap mb-2">
                      <div className="pb-3">
                        <span className="badge mx-1">JavaScript</span>
                        <span className="badge mx-1">HTML</span>
                        <span className="badge mx-1">CSS</span>
                        <span className="badge mx-1">Bulma</span>
                      </div>
                    </div>
                    <div className="work-links position-absolute bottom-0">
                      <a
                        href="https://github.com/rtanguyen/MovieMixer"
                        aria-label="External Link"
                        className="external"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-external-link"
                          width="25"
                          height="25"
                        >
                          <title>External Link</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>

                      <a
                        href="https://rtanguyen.github.io/MovieMixer/"
                        aria-label="External Link"
                        className="external"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-external-link"
                          width="25"
                          height="25"
                        >
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
        </div>

        {/* <!-- =======OTHER WORKS======= --> */}
        <div className="row m-5">
          {/* {otherProjects.map((projects) => (
              <OtherProjects key={projects.title} items={projects} />
            ))} */}
          <div className="col-2 col-sm-4 pt-5">
            <div className="card other-project">
              <div className="card-header text-center other-project-title">
                <svg
                  data-v-b8dd9ac6=""
                  width="80px"
                  height="80px"
                  viewBox="0 0 148 148"
                  className="owm-weather-icon"
                >
                  <path
                    d="M121.66 68.27c0 14.186-11.5 25.687-25.687 25.687-14.187 0-25.687-11.5-25.687-25.688 0-14.186 11.5-25.687 25.687-25.687 14.187 0 25.688 11.5 25.688 25.687"
                    fill="#f15d46"
                  ></path>
                  <path
                    d="M42.82 72.456c.76 0 1.505.07 2.24.17a18.256 18.256 0 01-.41-3.833c0-10.112 8.2-18.31 18.313-18.31 9.838 0 17.842 7.765 18.269 17.5a10.938 10.938 0 017.366-2.853c6.067 0 10.987 4.922 10.987 10.989 0 1.383-.267 2.7-.731 3.918a12.966 12.966 0 012.561-.255c7.081 0 12.82 5.738 12.82 12.817 0 7.078-5.739 12.82-12.82 12.82H42.82c-9.103 0-16.48-7.38-16.48-16.484 0-9.1 7.377-16.48 16.48-16.48"
                    fill="#efefed"
                  ></path>
                </svg>
              </div>
              <div className="card-body feat-project-info my-3 position-relative">
                <h5>Weather Dashboard</h5>
                <p>7 day weather forecast.</p>
                <div className="flex flex-wrap mb-2">
                  <div className="pb-3">
                    <span className="badge mx-1">JavaScript</span>
                    <span className="badge mx-1">Bootstrap</span>
                  </div>
                  <div className="work-links position-absolute bottom-0 ">
                    <a
                      href="https://github.com/rtanguyen/weatherdashboard"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
                        <title>External Link</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    <a
                      href="https://rtanguyen.github.io/weatherdashboard/"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
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

          <div className="col-2 col-sm-4 pt-5">
            <div className="card other-project">
              <div className="card-header text-center other-project-title my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
              <div className="card-body feat-project-info my-3 position-relative">
                <h5>E-Commerce</h5>
                <p>Backend architecture for an e-commerce website.</p>
                <div className="flex flex-wrap mb-2">
                  <div className="pb-3">
                    <span className="badge mx-1">Node.js</span>
                    <span className="badge mx-1">Express</span>
                    <span className="badge mx-1">MySql</span>
                    <span className="badge mx-1">Sequelize</span>
                  </div>
                  <div className="work-links position-absolute bottom-0 ">
                    <a
                      href="https://github.com/rtanguyen/e-commerce"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
                        <title>External Link</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-4 pt-5">
            <div className="card other-project">
              <div className="card-header text-center other-project-title my-auto justify-content-center">
                <img
                  src={require("../../assets/images/hangman.png").default}
                  alt="movie-mixer"
                  className="img-fluid"
                />
              </div>

              <div className="card-body feat-project-info my-3 position-relative">
                <h5>Hangman</h5>
                <p>The classic word guessing game.</p>
                <div className="flex flex-wrap mb-2">
                  <div className="pb-3">
                    <span className="badge mx-1">JavaScript</span>
                    <span className="badge mx-1">Bootstrap</span>
                  </div>
                  <div className="work-links position-absolute bottom-0 ">
                    <a
                      href="https://github.com/rtanguyen/hangman"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
                        <title>External Link</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    <a
                      href="https://rtanguyen.github.io/hangman/"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-external-link"
                        width="25"
                        height="25"
                      >
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
      <Footer></Footer>
    </div>
  );
}

export default Projects;
