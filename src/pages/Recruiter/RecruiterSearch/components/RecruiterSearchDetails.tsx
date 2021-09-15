import React, { useEffect } from 'react';
import { Card, Progress, Button } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateGithubUrl, getWhatsAppUrl, iconStyles } from '../../../../utils';
import About from '../../../../components/About';
import { StateTypes, fetchCandidateDetails } from '../../../../redux';
import './RecruiterSearchDetails.scss';
import SkillSection from '../../../../components/SkillSection';

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
        fetchCandidateDetails,
        gitInfo
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
                <div><FaGithub style={iconStyles} /><a href={generateGithubUrl(githubUrl)} target="_blank" rel="noreferrer">Github</a></div>
            </section>
            <About title="About">{about}</About>
            <br/>
            {gitInfo && Object.keys(gitInfo)?.length>0 && <Card>
                <div className="profile-footer">
                    <SkillSection gitInfo={gitInfo} />
                </div>
            </Card>}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSearchDetails);