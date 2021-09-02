import { Card, Button, Avatar, Tooltip } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory, MdAccountCircle } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import { iconStyles } from '../../utils';

import './RecruiterDetails.scss';

const SingleWidget = (props: any) => {
    const { image, company, jobTitle, skills, location, ctc, experience, numberOfApplications } = props.itm;
    const handlePostVisible = (postId: string) => {
        console.log(postId);
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

const RecruiterDetails = (props: any) => {

    const { about, empSize, skills, location, name, site, numberOfApplications, whatsappNumber } = props.itm;
    const history = useHistory();

    return (
        <div className="job-posting-detail-widget">
            <Card>
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        <a href={site} target="_blank">Website</a>
                    </div>
                    <div className="action-buttons">
                        <Button type="primary">Update</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {skills.map((itm:string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div><MdAccountCircle style={iconStyles} />{empSize}</div>
                </section>
                <Card>
                    {about}
                </Card>
                <div className="recommended-job-widget">
                    <h2>Jobs posted by {name}</h2>
                    <div className="recommended-job-widget-container">
                        {[].map(itm => <SingleWidget itm={itm}/>)}
                    </div>
                    {/* <SingleWidget itm={data[0]} /> */}
                    <div className="see-more-container">
                        <Button onClick={() => history.push('/search')}>See more...</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RecruiterDetails;