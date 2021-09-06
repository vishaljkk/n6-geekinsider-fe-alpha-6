import { useEffect } from 'react';
import { Tooltip, Button, Card, Tag, Avatar, Empty } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import { StateTypes } from '../../../../redux/types';
import { fetchPostedJobs } from '../../../../redux/actions';
import { iconStyles } from '../../../../utils';
import '../../LandingPage.scss';

const SingleWidget = (props: any) => {
    console.log(props);
    const { jobTitle, typeOfPosition, skills, officeLocations, experienceRange, annualSalary, jobDescription, companyName } = props;
    return (
        <Card hoverable>
            <section className="each-widget">
                <Avatar size={55}>{companyName[0]}</Avatar>
                <div className="right-section">
                    <span>{companyName}</span>
                    <h3>{jobTitle}</h3>
                    <span>{typeOfPosition}</span>
                    <div className='tag-section'>{skills.map((itm:string) => <span className="tags">{itm}</span>)}</div>
                </div>
            </section>
            <section className="footer-section">
                <div><MdLocationOn style={iconStyles} />{officeLocations}</div>
                <div><MdMonetizationOn style={iconStyles} />{annualSalary}</div>
                <div><MdHistory style={iconStyles} />{experienceRange}</div>
                {/* <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> */}
            </section>
        </Card>
    )
}

const RecommCandidateWidget: React.FC<any> = (props) => {
    const { recentJobs, fetchPostedJobs } = props;
    const history = useHistory();

    useEffect(() => {
        if (recentJobs.length === 0) fetchPostedJobs();
    }, [])

    return (
        <div className="recommended-job-widget">
            <h2>Jobs posted by you</h2>
            <div className="recommended-job-widget-container">
                {recentJobs.length>0 ? recentJobs.map((itm: any) => <SingleWidget {...{...itm}}/>) : <Empty description="Please post a job and manage here!" />}
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
    fetchPostedJobs
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecommCandidateWidget);