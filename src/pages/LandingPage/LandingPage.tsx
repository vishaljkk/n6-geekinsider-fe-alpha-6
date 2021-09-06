import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify';

import CandidateLanding from './Candidate';
import RecruiterLanding from './Recruiter';
import Loader from '../../components/Loader';
import { setUserType } from '../../redux/actions';
import { StateTypes } from '../../redux/types';
import { UserTypeTypes } from '../../routes/types';
import { LandingPagePropTypes } from './types';

const LandingPage: React.FC<LandingPagePropTypes> = (props) => {
    const { userType, setUserType } = props;
    const history = useHistory();

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(resp => {
            const type = resp.signInUserSession.idToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter';
            setUserType(type);
        }).catch(error => {})
    }, [])

    const handleProfileClick = async () => {
        let type = userType;
        if (type === '') {
            type = (await Auth.currentAuthenticatedUser()).signInUserSession.idToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter'
            setUserType(type);
        }
        const route = `/${type}/profile`;
        history.push(route);
    }

    const getLandingUI = (user: UserTypeTypes) => {
        switch(user) {
            case 'candidate':
                return (<CandidateLanding {...{handleProfileClick}}/>);
            case 'recruiter':
                return (<RecruiterLanding {...{handleProfileClick}}/>);
            default:
                return (<Loader />);
        }
    }
    
    return (
        <div className="landing-page-container">
            {getLandingUI(userType)}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);