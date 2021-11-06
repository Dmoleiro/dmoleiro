import React, {Component} from 'react';
import '../styles/workHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faUsers, faFutbol, faBriefcaseMedical, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class WorkHistory extends Component {
    render() {
        return (
            <div className="workHistoryContainer" id="history">
                <div className="workHistoryTitle">Work History</div>
                <div className="workHistory">
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                        <FontAwesomeIcon icon={faHeartbeat} />
                        </div>
                        <div className="workHistoryItemDate">
                            06/21 - present
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Typescript Developer (React) @lifebit
                            </div>
                            <div className="workHistoryItemDescription">
                                Integrated with a backend / frontend team responsible for developing and maintaning a 
                                web federated AI-powered platform for streamlined FAIR omics and biomedical analysis.
                                Key technologies are typescript, react, redux and tests using jest, enzyme and RTL
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon ">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/18 - 06/21
                        </div>
                        <div className="workHistoryItemContent ">
                            <div className="workHistoryItemTitle">
                                Team Leader / Javascript Developer @e.near
                            </div>
                            <div className="workHistoryItemDescription">
                                Managed team of 5 elements until November 2019 with 2 backend devs, 2 frontend devs and 1 qa, enforcing scrum, developing delivery plans and creating tech designs.
                                Team Lead functions are carried out while still holding javascript developer functions.
                                Deployment and load test in qa / production ready environments.
                                Key technologies are Ansible, Docker, ReactJS and Redux.
                            </div>
                            <br></br>
                            <div className="workHistoryItemDescription">
                                Currently working since early 2020 on a new project aiming at developing and maintaning a sports betting modular website with the above technologies as well as more test focusing using Jest and Enzyme.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faFutbol} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/17 - 07/18
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Javascript Developer @e.near
                            </div>
                            <div className="workHistoryItemDescription">
                                Develop Virtual Sports Betting interface integrated with virtual sports video streaming platform to be used by operators on their gambling sites worldwide.
                                Mostly using ReactJS and Redux.
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faBriefcaseMedical} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/13 - 02/17
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Java Developer @Maxdata Software
                            </div>
                            <div className="workHistoryItemDescription">
                                Develop and maintain software in a large scale project responsible for managing the entire workflow of medical labs across Portugal most important Hospitals and Clinics.
                                Mostly using Java, Spring and Hibernate and UI made with GWT.
                            </div>

                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className="workHistoryItemDate">
                            09/08 - 05/12
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Degree in Computer Engineering @UAL
                            </div>
                            <div className="workHistoryItemDescription">
                                Computer engineering degree at Unviversidade Autónoma de Lisboa with focus on software developemnt and networks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;
