import React, { useState, useEffect } from 'react';
import { Card, Progress } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { StateTypes, fetchProfileDetails } from '../../../redux';
import { CandidateSubmitTypes } from '../../Onboarding/types';
import { iconStyles } from '../../../utils';
import About from '../../../components/About';
import './CandidateDetails.scss';

const CandidateDetails: React.FC<CandidateSubmitTypes> = (props) => {
    const [mappableSkills, setMappableSkills] = useState<string[]>([]);
    const { about, name, skills, location, ctc, exp, githubUrl, whatsappNumber, jobTitle } = props;

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
                    <div><FaGithub style={iconStyles} /><a href={githubUrl} target="_blank" rel="noreferrer">Github</a></div>
                </section>
                <About title="About">{about}</About>
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
            </Card>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchProfileDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetails);