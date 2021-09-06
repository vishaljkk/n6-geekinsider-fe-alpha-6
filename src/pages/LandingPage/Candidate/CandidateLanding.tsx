import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecentChatWidget from '../RecentChatWidget';
import RecommCandidateWidget from '../RecomendedJobsWidget';
import QuickProfileWidget from '../../../components/QuickProfileWidget/QuickProfileWidget';
import TopTrending from '../TopTrending';
import RecruiterPostManager from '../../Recruiter/RecruiterPostManager';
import { fetchLandingPageData, fetchProfileDetails } from '../../../redux/actions';
import { StateTypes } from '../../../redux/types';

const CandidateLandingPage: React.FC<any> = (props) => {
    const { activeJob, handleProfileClick, jobDetailModalVisible, fetchProfileDetails, profileDetails, userType } = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetchProfileDetails()
    }, [])
    
    return (
        <div className="landing-page-container">
            <Row>
                <Col span={6} offset={1}>
                    <QuickProfileWidget onClick={handleProfileClick} title={profileDetails.name} subtitle={profileDetails.jobtitle}/>
                </Col>
                <Col span={15} offset={1} className="landing-right-column">
                    <RecentChatWidget />
                    <RecommCandidateWidget setVisible={setVisible}/>
                    <TopTrending setVisible={setVisible}/>
                </Col>
            </Row>
            {/* {jobDetailModalVisible && <RecruiterPostManager />} */}
            {/* {visible && <RecruiterPostManager visible={visible} setVisible={setVisible}/>} */}
            {visible && (<RecruiterPostManager visible={visible} setVisible={setVisible}/>)}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    landingData: state.landingData,
    userType: state.userType,
    jobDetailModalVisible: state.jobDetailModalVisible,
    activeJob: state.activeJob,
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchLandingPageData,
    fetchProfileDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateLandingPage);