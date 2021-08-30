import { Card, Button, Avatar } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../utils';
import './JobPostDetailWidget.scss';

const JobPostDetailWidget = (props: any) => {
    const { image, company, jobTitle, skills, location, ctc, experience, numberOfApplications, description, jobPostId } = props.itm;
    return (
        <div className="job-posting-detail-widget">
            <Card>
                <section className="each-widget">
                    <Avatar size={75} src={image} />
                    <div className="right-section">
                        <span>{company}</span>
                        <h3>{jobTitle}</h3>
                        <a>{numberOfApplications} applicants</a>
                    </div>
                    <div className="action-buttons">
                        <Button type="primary">Apply</Button>
                        <Button type="primary">Company details</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {skills.map((itm:any) => <span className="tags">{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                    <div><MdHistory style={iconStyles} />{experience}</div>
                </section>
                <Card>
                    {description}
                </Card>
            </Card>
        </div>
    )
}

export default JobPostDetailWidget;