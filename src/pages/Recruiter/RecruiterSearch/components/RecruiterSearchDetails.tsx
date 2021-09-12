import React, { useEffect } from 'react';
import { Card, Progress, Button } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWhatsAppUrl, iconStyles } from '../../../../utils';
import About from '../../../../components/About';
import { StateTypes, fetchCandidateDetails } from '../../../../redux';
import './RecruiterSearchDetails.scss';

const RecruiterSearchDetails: React.FC<any> = (props) => {
    const {
        aboutid,
        ctc,
        exp,
        githubUrl,
        jobTitle,
        location,
        name,
        skills,
        whatsappNumber,
        about,
        __v,
        _id,
        fetchCandidateDetails
    } = props;

    useEffect(() => {
        fetchCandidateDetails(aboutid);
    }, [])

    return (
        <div className="recruiter-search-details">
            <section className="each-widget">
                <div className="right-section">
                    <h2>{name}</h2>
                    <span>{jobTitle}</span>
                </div>
                <div className="action-buttons">
                    <Button type="primary" href={getWhatsAppUrl(whatsappNumber, name)} target="_blank">
                        <FaWhatsapp className="whatsapp-icon" />&nbsp;Connect
                    </Button>
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
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSearchDetails);