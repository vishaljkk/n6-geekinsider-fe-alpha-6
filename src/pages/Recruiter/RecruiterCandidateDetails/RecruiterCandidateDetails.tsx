import React from 'react';
import { Modal, Card, Progress, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

import { iconStyles } from '../../../utils';
import { setRecruiterCandidateDetails, StateTypes } from '../../../redux';
import { RecruiterCandidateDetailsPropTypes } from './types';
import './RecruiterCandidateDetails.scss';

const RecruiterCandidateDetails: React.FC<RecruiterCandidateDetailsPropTypes> = (props) => {
    const { visible, setVisible, recruiterCandidateDetails } = props;
    const {
        aboutid,
        ctc,
        exp,
        githubUrl,
        handleClick,
        jobTitle,
        location,
        name,
        skills,
        whatsappNumber,
        __v,
        _id
    } = recruiterCandidateDetails;

    const handleCancel = () => setVisible(false);

    const handleSelectCandidate = () => {
    }

    const handleRejectCandidate = () => {

    }

    return (
        <Modal visible={visible} onCancel={handleCancel} footer={null} destroyOnClose>
            <div className="recruiter-candidate-details">
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        <span>{jobTitle}</span>
                    </div>
                    <div className="action-buttons">
                        <Button type="primary" onClick={handleSelectCandidate}>
                            <FaWhatsapp className="whatsapp-icon" />&nbsp;&nbsp;Connect
                        </Button>
                        <Button onClick={handleRejectCandidate}>Reject</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {skills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div title={`${ctc} lacs per annum`}><MdMonetizationOn style={iconStyles} />{ctc} LPA</div>
                    <div><MdHistory style={iconStyles} />{exp} year</div>
                    <div><FaGithub style={iconStyles} /><a href={githubUrl} target="_blank">Github</a></div>
                </section>
                {/* <Card>
                    {about}
                </Card> */}
                <Card>
                    <div className="profile-footer">
                        <section className="skills-section">
                            <h3><b>Skills</b></h3>
                            <span>React</span><Progress percent={90} showInfo={false} strokeColor="#F2EE8B"/>
                            <span>JavaScript</span><Progress percent={80} showInfo={false} strokeColor="#F2EE8B" />
                            <span>HTML/CSS</span><Progress percent={70} showInfo={false} strokeColor="#F2EE8B" />
                        </section>
                        <section className="github-repo-section">
                            <h3><b>Github repo</b></h3>
                            <h2>20+</h2>
                        </section>
                    </div>
                </Card>
                {/* </Card> */}
            </div>
        </Modal>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recruiterCandidateDetails: state.recruiterCandidateDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setRecruiterCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterCandidateDetails);