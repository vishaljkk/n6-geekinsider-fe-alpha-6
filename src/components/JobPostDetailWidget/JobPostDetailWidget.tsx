import { Card, Button, Avatar } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../utils';
import { JobPostDetailWidgetPropTypes } from './types';
import './JobPostDetailWidget.scss';

const JobPostDetailWidget: React.FC<JobPostDetailWidgetPropTypes> = (props) => {
    const { typeOfPosition, jobTitle, skills, officeLocations, annualSalary, experienceRange, numberOfApplications, jobDescription, companyName } = props;
    const mappableSkills = typeof skills === 'string' ? skills.split(',') : skills;
    
    return (
        <div className="job-posting-detail-widget">
            <Card>
                <section className="each-widget">
                    <Avatar size={75}>{jobTitle[0]}</Avatar>
                    <div className="right-section">
                        <span>{companyName}</span>
                        <h3>{jobTitle}</h3>
                        <span>{typeOfPosition}</span>
                        {/* <a>{numberOfApplications} applicants</a> */}
                    </div>
                    <div className="action-buttons">
                        <Button type="primary">Apply</Button>
                        <Button type="primary">Company details</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {mappableSkills.map((itm: string) => <span className="tags">{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{officeLocations}</div>
                    <div><MdMonetizationOn style={iconStyles} />{annualSalary}</div>
                    <div><MdHistory style={iconStyles} />{experienceRange}</div>
                </section>
                <Card>
                    {jobDescription}
                </Card>
            </Card>
        </div>
    )
}

export default JobPostDetailWidget;