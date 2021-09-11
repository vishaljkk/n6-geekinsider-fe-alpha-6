import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import Loader from '../../../components/Loader';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../../utils';
import { ApplicationManagerTypes } from './types';
import { StateTypes, fetchJobDetail } from '../../../redux';
import About from '../../../components/About';
import './ApplicationManager.scss';

const ApplicationManager: React.FC<ApplicationManagerTypes> = (props) => {
    const { activeJob, loading, match, fetchJobDetail } = props;
    const { companyName, ctc, exp, jobDescription, jobLocation, jobTitle, skills, jobslug } = activeJob;
    const history = useHistory();

    useEffect(() => {
        fetchJobDetail(match.params.slug)
    }, [])

    const handleManageJobPost = () => {
        history.push(`/recruiter/post/${match.params.slug}/applied-candidates`)
    }

    return (
        <>
            {Object.keys(activeJob).length>0 ? <div className="application-manager">
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{jobTitle}</h2>
                        <span>{companyName}</span>
                    </div>
                    <Button type="primary" onClick={handleManageJobPost}>Manage</Button>
                </section>
                <section className="tag-section">
                    {skills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{jobLocation}</div>
                    <div><MdHistory style={iconStyles} />{exp} year</div>
                    <div title={`${ctc} lacs per annum`}><MdMonetizationOn style={iconStyles} />{ctc} LPA</div>
                </section>
                <About>{jobDescription}</About>
            </div> : (!loading && <Loader />)}
        </>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    activeJob: state.activeJob,
    appliedCandidates: state.appliedCandidates,
    loading: state.loading
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ fetchJobDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationManager);