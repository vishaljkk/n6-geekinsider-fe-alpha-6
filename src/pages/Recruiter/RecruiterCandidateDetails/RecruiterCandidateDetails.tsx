import React, { useEffect } from 'react';
import { Modal, Card, Progress, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

import { getWhatsAppUrl, iconStyles } from '../../../utils';
import { fetchCandidateDetails, StateTypes } from '../../../redux';
import { RecruiterCandidateDetailsPropTypes } from './types';
import About from '../../../components/About';
import './RecruiterCandidateDetails.scss';

const RecruiterCandidateDetails: React.FC<RecruiterCandidateDetailsPropTypes> = (props) => {
    const { recruiterCandidateDetails, match, fetchCandidateDetails } = props;
    const history = useHistory();
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
        about,
        __v,
        _id
    } = recruiterCandidateDetails;

    const handleCancel = () => history.goBack();

    const handleRejectCandidate = () => {

    }

    useEffect(() => {
        fetchCandidateDetails(match.params.slug);
    }, [])

    return (
        // <Modal visible={true} onCancel={handleCancel} footer={null} destroyOnClose>
            <div className="recruiter-candidate-details">
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        <span>{jobTitle}</span>
                    </div>
                    <div className="action-buttons">
                        <Button type="primary" href={getWhatsAppUrl(whatsappNumber, name)} target="_blank">
                            <FaWhatsapp className="whatsapp-icon" />&nbsp;Connect
                        </Button>
                        {/* <Button onClick={handleRejectCandidate}>Reject</Button> */}
                    </div>
                </section>
                <section className="tags-section">
                    {skills?.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div title={`${ctc} lacs per annum`}><MdMonetizationOn style={iconStyles} />{ctc} LPA</div>
                    <div><MdHistory style={iconStyles} />{exp} year</div>
                    <div><FaGithub style={iconStyles} /><a href={githubUrl} target="_blank">Github</a></div>
                </section>
                <About>{about}</About>
                <br/>
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
        // </Modal>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recruiterCandidateDetails: state.recruiterCandidateDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterCandidateDetails);