import React from "react";
import { Card, Avatar, Tooltip } from "antd";
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from "../../utils";
import { JobWidgetPropTypes } from ".";
import './JobWidget.scss';

const JobWidget: React.FC<JobWidgetPropTypes> = (props) => {
    const {
        jobTitle, 
        typeOfPosition,
        skills,
        officeLocations,
        experienceRange,
        annualSalary,
        jobDescription,
        numberOfApplications,
        companyName
    } = props;
    const mappableSkills = typeof skills === 'string' ? skills.split(',') : skills;

    return (
        <div className="single-widget">
            <Card hoverable>
                <section className="single-widget__each-widget">
                    <Avatar size={55}>{jobTitle[0]}</Avatar>
                    <div className="single-widget__right-section">
                        <h3>{jobTitle}</h3>
                        <p>{companyName}</p>
                        <p>{typeOfPosition}</p>
                        <section className="single-widget__tags-section">
                            {mappableSkills.map((itm:string) => <span className="tags">{itm}</span>)}
                        </section>
                    </div>
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{officeLocations}</div>
                    <div><MdMonetizationOn style={iconStyles} />{annualSalary}</div>
                    <div><MdHistory style={iconStyles} />{experienceRange}</div>
                    {numberOfApplications ? <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> : null}
                </section>
            </Card>
        </div>
    )
}

export default JobWidget;