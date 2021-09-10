import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QuickProfileWidget from '../../../components/QuickProfileWidget/QuickProfileWidget';
import RecommenededCandidatesWidget from './components/RecommenededCandidatesWidget';
import JobsPosted from './components/JobsPosted';
import RecruiterCandidateDetails from '../RecruiterCandidateDetails/RecruiterCandidateDetails';
import { fetchProfileDetails, setRecruiterCandidateDetails } from '../../../redux/actions';
import { StateTypes } from '../../../redux';
import { RecruiterLandingPropTypes } from './types';
import './RecruiterLanding.scss';

const RecruiterLanding: React.FC<RecruiterLandingPropTypes> = (props) => {
    const { fetchProfileDetails, handleProfileClick, profileDetails } = props;
    const [visible, setVisible] = useState<boolean>(false);
    const [candidateProfileVisible, setCandidateProfileVisible] = useState<boolean>(false);

    useEffect(() => {
        if (Object.keys(profileDetails).length===0) fetchProfileDetails()
    }, [])
    
    return (
        <div className="recruiter-landing">
            <div className="recruiter-landing__left">
                <QuickProfileWidget onClick={handleProfileClick} title={profileDetails.name} subtitle={profileDetails.location}/>
                <RecommenededCandidatesWidget setVisible={setCandidateProfileVisible}/>
            </div>
            <div className="recruiter-landing__right">
                <JobsPosted />
            </div>
            {candidateProfileVisible && (<RecruiterCandidateDetails visible={candidateProfileVisible} setVisible={setCandidateProfileVisible}/>)}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType,
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchProfileDetails,
    setRecruiterCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterLanding);