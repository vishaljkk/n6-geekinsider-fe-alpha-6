import { useState, useEffect } from 'react';
import { Card, Button, Avatar, Tooltip, Empty } from 'antd';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdLocationOn, MdMonetizationOn, MdHistory, MdAccountCircle, MdHome } from "react-icons/md";
import { iconStyles } from '../../../utils';

import { RecruitereSubmitTypes } from '../../Onboarding/types';
import { fetchJobDetail, fetchPostedJobs, StateTypes } from '../../../redux';
import JobWidget from '../../../components/JobWidget';
import './RecruiterDetails.scss';

interface RecruiterProfilePropTypes extends RecruitereSubmitTypes {
    recentJobs: any,
    fetchPostedJobs: () => void,
    fetchJobDetail: (e: string) => void
}

const RecruiterDetails: React.FC<RecruiterProfilePropTypes> = (props) => {
    const [mappableSkills, setMappableSkills] = useState<string[]>([]);
    const { about, empSize, skills, location, name, site, whatsappNumber, preferredIndustry, recentJobs, fetchPostedJobs, fetchJobDetail } = props;
    const history = useHistory();

    useEffect(() => {
        if (recentJobs.length === 0) fetchPostedJobs();
    }, [])

    useEffect(() => {
        if (skills) setMappableSkills(typeof skills === 'string' ? skills.split(',') : skills);
    }, [skills])

    const handleJobPost = () => {
        history.push('/recruiter/postjob')
    }

    const handleJobCardClick = (jobSlug: string) => {
        fetchJobDetail(jobSlug);
        history.push('/recruiter/managepost')
    }

    return (
        <div className="recruiter__profile__right">
            <Card>
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{name}</h2>
                        <span>{preferredIndustry}</span>
                    </div>
                    <div className="action-buttons">
                        {/* <Button type="primary">Update</Button> */}
                        <Button type="primary" onClick={handleJobPost}>Post a job</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {mappableSkills.map((itm:string) => <span className="tags" key={itm}>{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div><MdAccountCircle style={iconStyles} />{empSize}</div>
                    <div><MdHome style={iconStyles} /><a href={site} target="_blank">Website</a></div>
                </section>
                <Card>
                    {about}
                </Card>
            </Card>
            <Card>
                <div className="recommended-job-widget">
                    <h2>Jobs posted by {name}</h2>
                    <div className="recommended-job-widget-container">
                        {recentJobs.length ? recentJobs.map((itm: any) => <JobWidget {...{...itm, onClick: handleJobCardClick}}/>) : <Empty description="Please post a job to manage here"/>}
                    </div>
                    <br/>
                    <div className="see-more-container">
                        <Button onClick={() => history.push('/search')}>See more...</Button>
                    </div>
                </div>
            </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterDetails);