import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import { generateGithubUrl, getWhatsAppUrl, iconStyles } from '../../../utils';
import About from '../../../components/About';
import SkillSection from '../../../components/SkillSection';
import './RightWidget.scss'

const RightWidget: React.FC<any> = (props) => {
    const [mappableSkills, setMappableSkills] = useState<string[]>([]);
    const { about, name, skills, location, ctc, exp, githubUrl, whatsappNumber, jobTitle, fetchCandidateDetails, gitInfo } = props;

    useEffect(() => {
        if (skills) setMappableSkills(typeof skills === 'string' ? skills.split(',') : skills);
    }, [skills])

    return (
        <div className="manage__applicants">
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

export default RightWidget;