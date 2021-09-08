import { useEffect } from 'react';
import { Tooltip, Button, Card, Tag, Avatar, Empty } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import Loader from '../../../../components/Loader';
import { RecentJobType, RecommCandidateWidgetPropTypes } from '..';
import { fetchPostedJobs, fetchJobDetail, StateTypes } from '../../../../redux';
import { iconStyles } from '../../../../utils';
import '../RecruiterLanding.scss';

const SingleWidget = (props: any) => {
    const { jobTitle, skills, officeLocations, exp, ctc, jobDescription, companyName, onClick, jobslug } = props;
    return (
        <Card hoverable onClick={() => onClick(jobslug)}>
            {Object.keys(props).length>0 ? 
                <>
                    <section className="each-widget">
                        <Avatar size={55}>{companyName[0]}</Avatar>
                        <div className="right-section">
                            <span>{companyName}</span>
                            <h3>{jobTitle}</h3>
                            <div className='tag-section'>{skills.map((itm: string) => <span className="tags">{itm}</span>)}</div>
                        </div>
                    </section>
                    <section className="footer-section">
                        <div><MdLocationOn style={iconStyles} />{officeLocations}</div>
                        <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                        <div><MdHistory style={iconStyles} />{exp}</div>
                        {/* <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> */}
                    </section>
                </> 
                : 
                <Loader/>
            }
        </Card>
    )
}

const RecommCandidateWidget: React.FC<RecommCandidateWidgetPropTypes> = (props) => {
    const { recentJobs, fetchPostedJobs, setVisible, fetchJobDetail } = props;
    const history = useHistory();

    useEffect(() => {
        if (recentJobs.length === 0) fetchPostedJobs();
    }, [])

    const handleJobCardClick = (jobSlug: string) => {
        fetchJobDetail(jobSlug);
        history.push('/recruiter/managepost')
    }

    return (
        <div className="recommended-job-widget">
            <h2>Jobs posted by you</h2>
            <div className="recommended-job-widget-container">
                {recentJobs.length>0 ? recentJobs.map((itm: RecentJobType) => <SingleWidget {...{...itm, onClick: handleJobCardClick}}/>) : <Empty description="Please post a job and manage here!" />}
            </div>
            <div className="see-more-container">
                <Button onClick={() => history.push('/search')}>See more...</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recentJobs: state.recentJobs
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchPostedJobs,
    fetchJobDetail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecommCandidateWidget);