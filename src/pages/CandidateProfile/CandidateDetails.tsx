import { useState, useEffect } from 'react';
import { Card, Button, Progress } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { CandidateSubmitTypes } from '../Onboarding/types';
import { iconStyles } from '../../utils';
import './CandidateDetails.scss';

const CandidateDetails: React.FC<CandidateSubmitTypes> = (props) => {
    const [mappableSkills, setMappableSkills] = useState<string[]>([]);
    const { about, name, skills, location, ctc, exp, githubUrl, whatsappNumber } = props;

    useEffect(() => {
        if (skills) setMappableSkills(typeof skills === 'string' ? skills.split(',') : skills);
    }, [skills])

    return (
        <div className="candidate__profile__right">
            <Card>
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        {/* <span>{jobTitle}</span> */}
                    </div>
                    <div className="action-buttons">
                        <Button type="primary">Update</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {mappableSkills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                    <div><MdHistory style={iconStyles} />{exp}</div>
                    <div><FaGithub style={iconStyles} />{githubUrl}</div>
                </section>
                <Card>
                    {about}
                </Card>
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

export default CandidateDetails;