import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecentChatWidget from '../RecentChatWidget';
import QuickProfileWidget from '../../../components/QuickProfileWidget/QuickProfileWidget';
import RecommenededCandidatesWidget from '../RecommenededCandidatesWidget';
import JobsPosted from './components/JobsPosted';
import RecruiterCandidateDetails from '../../Recruiter/RecruiterCandidateDetails/RecruiterCandidateDetails';
import ApplicationManager from '../../Recruiter/ApplicationManager';
import { fetchLandingPageData, fetchProfileDetails, setRecruiterCandidateDetails } from '../../../redux/actions';
import { StateTypes } from '../../../redux/types';

const RecruiterLanding: React.FC<any> = (props) => {
    const { fetchProfileDetails, handleProfileClick, profileDetails } = props;
    const [visible, setVisible] = useState<boolean>(false);
    const [candidateProfileVisible, setCandidateProfileVisible] = useState<boolean>(false);

    useEffect(() => {
        if (Object.keys(profileDetails).length===0) fetchProfileDetails()
    }, [])
    
    return (
        <div className="landing-page-container">
            <Row>
                <Col span={6} offset={1}>
                    <QuickProfileWidget onClick={handleProfileClick} title={profileDetails.name} subtitle={profileDetails.preferredIndustry}/>
                    <RecommenededCandidatesWidget setVisible={setCandidateProfileVisible}/>
                </Col>
                <Col span={15} offset={1} className="landing-right-column">
                    <RecentChatWidget />
                    <JobsPosted setVisible={setVisible}/>
                </Col>
            </Row>
            {visible && (<ApplicationManager visible={visible} setVisible={setVisible}/>)}
            {candidateProfileVisible && (<RecruiterCandidateDetails visible={candidateProfileVisible} setVisible={setCandidateProfileVisible}/>)}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    landingData: state.landingData,
    userType: state.userType,
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchLandingPageData,
    fetchProfileDetails,
    setRecruiterCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterLanding);