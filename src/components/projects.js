import React, {Component} from 'react';
import '../styles/projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="projectsMainContainer">
                <div className="projectTitle">
                    Projects
                </div>
                <div className="projects">
                    <div className="projectsContainer">
                        <div className="flip">
                            <div className="front lightOrange">
                                <div className="text-shadow">React Game</div>
                                <img className="tile" alt='flippairs' src={process.env.PUBLIC_URL + '/assets/projects/flip_pairs.png'}/>
                            </div>
                            <div className="back">
                                <div className="button" onClick={() => window.open('https://dmoleiro.github.io/flip-pairs/')}>
                                    <span>Visit site</span>
                                    <svg>
                                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projectsContainer">
                        <div className="flip">
                            <div className="front lightBlue">
                                <div className="text-shadow">Portfolio</div>
                                <img className="tile" alt='dsantos' src={process.env.PUBLIC_URL + '/assets/projects/dsantos.png'}/>
                            </div>
                            <div className="back">
                                <div className="button" onClick={() => window.open('http://www.danielasantos.work')}>
                                    <span>Visit site</span>
                                    <svg>
                                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="projects">
                    <div className="projectsContainer">
                        <div className="flip">
                            <div className="front darkBlue">
                                <div className="text-shadow">PixiJS Game</div>
                                <img className="tile" alt='unnamed' src={process.env.PUBLIC_URL + '/assets/projects/unnamed.png'}/>
                            </div>
                            <div className="back">
                                <div className="button" onClick={() => window.open('https://dmoleiro.github.io/UnNamed/')}>
                                    <span>Visit site</span>
                                    <svg>
                                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projectsContainer">
                        <div className="flip">
                            <div className="front lightOrange">
                                <div className="text-shadow">Multi Tool Web</div>
                                <img className="tile" alt='multitool' src={process.env.PUBLIC_URL + '/assets/projects/multi_tool.png'}/>
                            </div>
                            <div className="back">
                                <div className="button" onClick={() => window.open('https://dmoleiro.github.io/multi-tool-web/')}>
                                    <span>Visit site</span>
                                    <svg>
                                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="projectsContainer">
                        <div className="flip">
                            <div className="front darkOrange">
                                <div className="text-shadow">Coming Soon</div>
                                <img className="tile" alt='comingsoon' src={process.env.PUBLIC_URL + '/assets/projects/coming_soon.png'}/>
                            </div>
                            <div className="back">
                                <div className="button">
                                    <span>Coming Soon</span>
                                    <svg>
                                        <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                        <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Projects;