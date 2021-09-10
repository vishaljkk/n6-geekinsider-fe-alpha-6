import React from "react";
import { Card, Avatar } from "antd";
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import { JobWidgetPropTypes } from "./types";
import { iconStyles } from "../../utils";
import './JobWidget.scss';

const JobWidget: React.FC<JobWidgetPropTypes> = (props) => {
    const { jobTitle, skills, jobLocation, exp, ctc, companyName, jobslug } = props;
    const mappableSkills = typeof skills === 'string' ? skills.split(',') : skills

    return (
        <div className="single-widget">
            <Card hoverable onClick={() => props?.onClick(jobslug)}>
                <section className="single-widget__each-widget">
                    <Avatar size={55}>{jobTitle[0]}</Avatar>
                    <div className="right-section">
                        <span>{companyName}</span>
                        <h3 title={jobTitle}>{jobTitle}</h3>
                    </div>
                </section>
                <section className="single-widget__tag-section">
                    {mappableSkills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="single-widget__footer-section">
                    <div><MdLocationOn style={iconStyles} />{jobLocation}</div>
                    <div><MdMonetizationOn style={iconStyles} title={`${ctc} Lacs per annum`}/>{ctc} LPA</div>
                    <div><MdHistory style={iconStyles} />{exp} year</div>
                    {/* <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> */}
                </section>
            </Card>
        </div>
    )
}

export default JobWidget;