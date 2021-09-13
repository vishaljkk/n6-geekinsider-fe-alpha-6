import React, { useEffect } from 'react';
import { Card, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

import { getWhatsAppUrl, iconStyles } from '../../../utils';
import { fetchCandidateDetails, StateTypes } from '../../../redux';
import { RecruiterCandidateDetailsPropTypes } from './types';
import About from '../../../components/About';
import SkillSection from '../../../components/SkillSection';
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
        _id,
        gitInfo
    } = recruiterCandidateDetails;

    const handleCancel = () => history.goBack();

    const handleRejectCandidate = () => {

    }

    useEffect(() => {
        fetchCandidateDetails(match.params.slug);
    }, [])

    return (
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
                <div><FaGithub style={iconStyles} /><a href={githubUrl} target="_blank" rel="noreferrer">Github</a></div>
            </section>
            <About>{about}</About>
            <br/>
            {gitInfo && Object.keys(gitInfo)?.length>0 && <Card>
                <div className="profile-footer">
                    <SkillSection gitInfo={gitInfo} />
                </div>
            </Card>}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recruiterCandidateDetails: state.recruiterCandidateDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterCandidateDetails);