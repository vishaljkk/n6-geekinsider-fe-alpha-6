import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import Loader from '../../../components/Loader';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../../utils';
import { ApplicationManagerTypes } from './types';
import { StateTypes, fetchAppliedCandidates } from '../../../redux';
import './ApplicationManager.scss';

const ApplicationManager: React.FC<ApplicationManagerTypes> = (props) => {
    const { activeJob, fetchAppliedCandidates, loading } = props;
    const { companyName, ctc, exp, jobDescription, jobLocation, jobTitle, skills, jobslug } = activeJob;
    const history = useHistory();

    useEffect(() => {
        fetchAppliedCandidates(jobslug);
    }, [])

    const handleManageJobPost = () => {
        history.push('/recruiter/applied-candidates')
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
                <Card>
                    {jobDescription.split('\n').map((itm: string) => <span>{itm}<br/></span>)}
                </Card>
            </div> : (!loading && <Loader />)}
        </>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    activeJob: state.activeJob,
    appliedCandidates: state.appliedCandidates,
    loading: state.loading
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ fetchAppliedCandidates }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationManager);