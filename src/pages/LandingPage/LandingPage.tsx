import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify';

import { fetchLandingPageData, setUserType } from '../../redux/actions';
import { StateTypes } from '../../redux/types';
import CandidateLanding from './Candidate';
import RecruiterLanding from './Recruiter';

const LandingPage: React.FC = (props: any) => {
    const { landingData, fetchLandingPageData, userType, setUserType } = props;
    const history = useHistory();

    useEffect(() => {
        fetchLandingPageData()
    }, [])

    const handleProfileClick = async () => {
        const type = (await Auth.currentAuthenticatedUser()).signInUserSession.accessToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter'
        setUserType(type);
        const route = `/${type}/profile`;
        history.push(route);
    }
    
    return (
        <div className="landing-page-container">
            {userType === 'candidate' ? <CandidateLanding {...{handleProfileClick}}/> : <RecruiterLanding {...{handleProfileClick}}/>}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    landingData: state.landingData,
    userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchLandingPageData,
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);