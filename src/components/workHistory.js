import React, {Component} from 'react';
import '../styles/workHistory.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faFutbol, faBriefcaseMedical, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class WorkHistory extends Component {
    render() {
        return (
            <div className="workHistoryContainer">
                <div className="workHistoryTitle">Work History</div>
                <div className="workHistory">
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon ">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="workHistoryItemDate">
                            02/18 - present
                        </div>
                        <div className="workHistoryItemContent ">
                            <div className="workHistoryItemTitle">
                                Team Leader @e.near
                            </div>
                            <div className="workHistoryItemDescription">
                                Manage team of 5 elements with 2 backend devs, 2 frontend devs and 1 qa, enforcing scrum, developing delivery plans and creating tech designs.
                                Team Lead functions are carried out while still holding javascript developer functions.
                                Deployment and load test in qa / production ready environments.
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
                                Develop Virtual Sports Betting interface integrated with virtual sports video streaming platform.
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
                                Develop and maintain software responsible to manage large scale project to manage the entire workflow of clinical labs across Portugal most important Hospitals and Clinics.
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
