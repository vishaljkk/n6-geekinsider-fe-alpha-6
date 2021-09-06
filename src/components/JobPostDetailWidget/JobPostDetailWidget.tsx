import { Card, Button, Avatar } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { applyForJob } from '../../redux/actions';
import { iconStyles } from '../../utils';
import { StateTypes } from '../../redux/types';
import { JobPostDetailWidgetPropTypes } from './types';
import './JobPostDetailWidget.scss';

// const JobPostDetailWidget: React.FC<JobPostDetailWidgetPropTypes> = (props) => {
const JobPostDetailWidget: React.FC<any> = (props) => {
    const { jobTitle, skills, jobLocation, ctc, exp, numberOfApplications, jobDescription, companyName, applyForJob, jobslug } = props;
    const mappableSkills = typeof skills === 'string' ? skills.split(',') : skills;

    const handleApply = () => {
        jobslug && applyForJob(jobslug);
    }
    
    return (
        <div className="job-posting-detail-widget">
            <Card>
                <section className="each-widget">
                    {/* <Avatar size={75}>{companyName[0]}</Avatar> */}
                    <div className="right-section">
                        <h3>{jobTitle}</h3>
                        <span>{companyName}</span>
                        {/* <a>{numberOfApplications} applicants</a> */}
                    </div>
                    <div className="action-buttons">
                        <Button type="primary" onClick={handleApply}>Apply</Button>
                        {/* <Button type="primary">Company details</Button> */}
                    </div>
                </section>  
                <section className="tags-section">
                    {mappableSkills.map((itm: string) => <span className="tags">{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{jobLocation}</div>
                    <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                    <div><MdHistory style={iconStyles} />{exp}</div>
                </section>
                <Card>
                    {jobDescription}
                </Card>
            </Card>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    applyForJob
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JobPostDetailWidget);