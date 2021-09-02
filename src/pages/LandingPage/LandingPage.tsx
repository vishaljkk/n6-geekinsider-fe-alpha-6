import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchLandingPageData } from '../../redux/actions';
import { StateTypes } from '../../redux/types';
import CandidateLanding from './Candidate';
import RecruiterLanding from './Recruiter';

const LandingPage: React.FC = (props: any) => {
    const { landingData, fetchLandingPageData, userType } = props;

    useEffect(() => {
        fetchLandingPageData()
    }, [])
    
    console.log(userType)
    return (
        <div className="landing-page-container">
            {userType === 'candidate' ? <CandidateLanding /> : <RecruiterLanding />}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    landingData: state.landingData,
    userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchLandingPageData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);