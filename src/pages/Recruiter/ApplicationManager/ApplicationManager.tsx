import React from 'react'
import { Card } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Loader from '../../../components/Loader';
import { MdLocationOn, MdMonetizationOn, MdHistory, MdAccountCircle, MdHome } from "react-icons/md";
import { iconStyles } from '../../../utils';
import { ApplicationManagerTypes } from './types';
import { StateTypes } from '../../../redux';
import './ApplicationManager.scss';

const ApplicationManager: React.FC<ApplicationManagerTypes> = (props) => {
    const { activeJob } = props;
    const { companyName, ctc, exp, jobDescription, jobLocation, jobTitle, skills } = activeJob;

    return (
        <>
            {Object.keys(activeJob).length>0 ? <div className="application-manager">
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{jobTitle}</h2>
                        <span>{companyName}</span>
                    </div>
                </section>
                <section className="tag-section">
                    {skills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{jobLocation}</div>
                    <div><MdAccountCircle style={iconStyles} />{exp}</div>
                    <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                </section>
                <Card>
                    {jobDescription}
                </Card>
            </div> : <Loader />}
        </>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    activeJob: state.activeJob
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationManager);