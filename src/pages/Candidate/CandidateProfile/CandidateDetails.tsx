import React, { useState, useEffect } from 'react';
import { Card, Progress } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StateTypes, fetchProfileDetails, fetchCandidateDetails } from '../../../redux';
import { CandidateSubmitTypes } from '../../Onboarding/types';
import { generateGithubUrl, iconStyles } from '../../../utils';
import About from '../../../components/About';
import './CandidateDetails.scss';
import SkillSection from '../../../components/SkillSection';

const CandidateDetails: React.FC<CandidateSubmitTypes> = (props) => {
    const [mappableSkills, setMappableSkills] = useState<string[]>([]);
    const { about, name, skills, location, ctc, exp, githubUrl, whatsappNumber, jobTitle, skillsOrder, gitskills, repoCount } = props;

    useEffect(() => {
        if (skills) setMappableSkills(typeof skills === 'string' ? skills.split(',') : skills);
    }, [skills])

    return (
        <div className="candidate__profile__right">
            <Card>
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        <span>{jobTitle}</span>
                    </div>
                </section>
                <section className="tags-section">
                    {mappableSkills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div title={`${ctc} lacs per annum`}><MdMonetizationOn style={iconStyles} />{ctc} LPA</div>
                    <div><MdHistory style={iconStyles} />{exp} year</div>
                    <div><FaGithub style={iconStyles} /><a href={generateGithubUrl(githubUrl)} target="_blank" rel="noreferrer">Github</a></div>
                </section>
                <About title="About">{about}</About>
                <br/>
                {gitskills && Object.keys(gitskills)?.length>0 && <Card>
                    <div className="profile-footer">
                        <SkillSection gitInfo={{ skills: gitskills, repoCount, skillsOrder }} />
                    </div>
                </Card>}
            </Card>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchProfileDetails,
    fetchCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetails);