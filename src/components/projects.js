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
                            <div className="front">
                                <div className="text-shadow">PORTFOLIO</div>
                                <img className="tile" alt='dsantos' src={process.env.PUBLIC_URL + '/assets/projects/dsantos.png'}/>
                            </div>
                            <div className="back">
                                <div className="button" onClick={() => window.open('http://www.dmoleiro.com/danielasantos')}>
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
                            <div className="front">
                                <div className="text-shadow">PixiJS Game</div>
                                <img className="tile" alt='dsantos' src={process.env.PUBLIC_URL + '/assets/projects/unnamed.png'}/>
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
                </div>
            </div>
        );
    }
}

export default Projects;