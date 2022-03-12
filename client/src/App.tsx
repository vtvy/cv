import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div translate="no">
                <nav id="navbar" className="nav">
                    <ul className="nav-list">
                        <li>
                            <a href="#welcome-section">About</a>
                        </li>
                        <li>
                            <a href="#projects">Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <section id="welcome-section" className="welcome-section">
                    <h1>Hey I am Mimic</h1>
                    <p>a web developer</p>
                </section>

                <section id="projects" className="projects-section">
                    <h2 className="projects-section-header">
                        These are some of my projects
                    </h2>

                    <div className="projects-grid">
                        <a
                            href="https://codepen.io/freeCodeCamp/full/zNqgVx"
                            target="_blank"
                            className="project project-tile"
                        >
                            <img
                                className="project-image"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg"
                                alt="project"
                            />
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Tribute Page
                                <span className="code">/&gt;</span>
                            </p>
                        </a>
                        <a
                            href="https://codepen.io/freeCodeCamp/full/qRZeGZ"
                            target="_blank"
                            className="project project-tile"
                        >
                            <img
                                className="project-image"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png"
                                alt="project"
                            />
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Random Quote Machine
                                <span className="code">/&gt;</span>
                            </p>
                        </a>
                        <a
                            href="https://codepen.io/freeCodeCamp/full/wgGVVX"
                            target="_blank"
                            className="project project-tile"
                        >
                            <img
                                className="project-image"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png"
                                alt="project"
                            />
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                JavaScript Calculator
                                <span className="code">/&gt;</span>
                            </p>
                        </a>
                        <a
                            href="https://codepen.io/freeCodeCamp/full/mVEJag"
                            target="_blank"
                            className="project project-tile"
                        >
                            <img
                                className="project-image"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/map.jpg"
                                alt="project"
                            />
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Map Data Across the Globe
                                <span className="code">/&gt;</span>
                            </p>
                        </a>
                        <a
                            href="https://codepen.io/freeCodeCamp/full/wGqEga"
                            target="_blank"
                            className="project project-tile"
                        >
                            <img
                                className="project-image"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/wiki.png"
                                alt="project"
                            />
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Wikipedia Viewer
                                <span className="code">/&gt;</span>
                            </p>
                        </a>
                        <a
                            href="https://codepen.io/freeCodeCamp/full/KzXQgy"
                            target="_blank"
                            className="project project-tile"
                        >
                            <img
                                className="project-image"
                                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tic-tac-toe.png"
                                alt="project"
                            />
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Tic Tac Toe Game
                                <span className="code">/&gt;</span>
                            </p>
                        </a>
                    </div>

                    <a
                        href="https://codepen.io/FreeCodeCamp/"
                        className="btn btn-show-all"
                        target="_blank"
                    >
                        Show all<i className="fas fa-chevron-right"></i>
                    </a>
                </section>

                <section id="contact" className="contact-section">
                    <div className="contact-section-header">
                        <h2>Let's work together...</h2>
                        <p>How do you take your coffee?</p>
                    </div>
                    <div className="contact-links">
                        <a
                            href="https://facebook.com/freecodecamp"
                            target="_blank"
                            className="btn contact-details"
                        >
                            <i className="fab fa-facebook-square"></i> Facebook
                        </a>
                        <a
                            id="profile-link"
                            href="https://github.com/freecodecamp"
                            target="_blank"
                            className="btn contact-details"
                        >
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a
                            href="https://twitter.com/freecodecamp"
                            target="_blank"
                            className="btn contact-details"
                        >
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a
                            href="mailto:example@example.com"
                            className="btn contact-details"
                        >
                            <i className="fas fa-at"></i> Send a mail
                        </a>
                        <a
                            href="tel:555-555-5555"
                            className="btn contact-details"
                        >
                            <i className="fas fa-mobile-alt"></i> Call me
                        </a>
                    </div>
                </section>

                <footer>
                    <p>
                        **This is just a fake portfolio. All the projects and
                        contact details given are not real.
                    </p>
                    <p>
                        © Created for
                        <a href="https://www.freecodecamp.com/" target="_blank">
                            freeCodeCamp{" "}
                            <i className="fab fa-free-code-camp"></i>
                        </a>
                    </p>
                </footer>

                <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>

                <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
                <div id="fcc_test_suite_wrapper"></div>
                <script id="rendered-js"></script>
            </div>
        </div>
    );
}

export default App;
