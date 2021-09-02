import { useState, useEffect } from 'react';
import { Card, Button, Avatar, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
import { MdLocationOn, MdMonetizationOn, MdHistory, MdAccountCircle, MdHome } from "react-icons/md";
import { iconStyles } from '../../utils';

import './RecruiterDetails.scss';
import { RecruitereSubmitTypes } from '../Onboarding/types';

const SingleWidget: React.FC<any> = (props) => {
    const { image, company, jobTitle, skills, location, ctc, experience, numberOfApplications } = props.itm;
    const handlePostVisible = (postId: string) => {
        // console.log(postId);
    }
    return (
        <Card hoverable>
            <section className="each-widget">
                <Avatar size={55} src={image} />
                <div className="right-section">
                    <span>{company}</span>
                    <h3>{jobTitle}</h3>
                    {skills.map((itm:string) => <span className="tags">{itm}</span>)}
                </div>
            </section>
            <section className="footer-section">
                <div><MdLocationOn style={iconStyles} />{location}</div>
                <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                <div><MdHistory style={iconStyles} />{experience}</div>
                <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip>
            </section>
        </Card>
    )
}

const RecruiterDetails: React.FC<RecruitereSubmitTypes> = (props) => {
    const [mappableSkills, setMappableSkills] = useState<string[]>([]);
    const { about, empSize, skills, location, name, site, whatsappNumber, preferredIndustry } = props;
    const history = useHistory();

    useEffect(() => {
        if (skills) setMappableSkills(typeof skills === 'string' ? skills.split(',') : skills);
    }, [skills])

    return (
        <div className="recruiter__profile__right">
            <Card>
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        <span>{preferredIndustry}</span>
                    </div>
                    <div className="action-buttons">
                        <Button type="primary">Update</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {mappableSkills.map((itm:string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div><MdAccountCircle style={iconStyles} />{empSize}</div>
                    <div><MdHome style={iconStyles} /><a href={site} target="_blank">Website</a></div>
                </section>
                <Card>
                    {about}
                </Card>
                <div className="recommended-job-widget">
                    <h2>Jobs posted by {name}</h2>
                    <div className="recommended-job-widget-container">
                        {[].map(itm => <SingleWidget itm={itm}/>)}
                    </div>
                    <div className="see-more-container">
                        <Button onClick={() => history.push('/search')}>See more...</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RecruiterDetails;