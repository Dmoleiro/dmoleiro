import React, {Component} from 'react';
import '../styles/workHistory.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WorkHistory extends Component {
    render() {
        return (
            <div className="workHistoryContainer">
                <div className="workHistoryTitle">Work History</div>
                <div className="workHistory">
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon ">

                        </div>
                        <div className="workHistoryItemDate">
                            02/18 - present
                        </div>
                        <div className="workHistoryItemContent ">
                            <div className="workHistoryItemTitle">
                                Team Leader
                            </div>
                            <div className="workHistoryItemDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                    aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit
                                    accusantium id aut architecto harum quidem dolorem in!
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">

                        </div>
                        <div className="workHistoryItemDate">
                            02/17 - 07/18
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Javascript Developer
                            </div>
                            <div className="workHistoryItemDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                    aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit
                                    accusantium id aut architecto harum quidem dolorem in!
                            </div>
                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">

                        </div>
                        <div className="workHistoryItemDate">
                            02/13 - 02/17
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Java Developer
                            </div>
                            <div className="workHistoryItemDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                    aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit
                                    accusantium id aut architecto harum quidem dolorem in!
                            </div>

                        </div>
                    </div>
                    <div className="workHistoryItem">
                        <div className="workHistoryItemIcon">

                        </div>
                        <div className="workHistoryItemDate">
                            09/08 - 05/12
                        </div>
                        <div className="workHistoryItemContent">
                            <div className="workHistoryItemTitle">
                                Degree in Computer Engineering
                            </div>
                            <div className="workHistoryItemDescription">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut
                                    aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit
                                    accusantium id aut architecto harum quidem dolorem in!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkHistory;