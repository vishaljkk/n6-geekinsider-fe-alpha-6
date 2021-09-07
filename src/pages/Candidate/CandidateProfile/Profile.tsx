import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QuickProfileWidget from '../../../components/QuickProfileWidget';
import CandidateDetails from './CandidateDetails';
import Loader from '../../../components/Loader';
import { fetchProfileDetails, StateTypes } from '../../../redux';
import { ProfilePropsTypes } from './types';
import './Profile.scss';

const Profile: React.FC<ProfilePropsTypes> = (props) => {

    const { profileDetails, fetchProfileDetails } = props;

    useEffect(() => {
        if (Object.keys(profileDetails).length===0) fetchProfileDetails();
    }, [])

    return (
        <div className="profile">
            {Object.keys(profileDetails).length>0 ? 
                <>
                    <div className="candidate-profile__left">
                        <QuickProfileWidget title={profileDetails.name} subtitle={profileDetails.jobtitle}/>
                    </div>
                    <div className="candidate-profiler__right">
                        <CandidateDetails {...{...profileDetails}} />
                    </div>
                </>
                :
                <div className="loader--global"><Loader text="Loading profile..."/></div>
            }
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchProfileDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);