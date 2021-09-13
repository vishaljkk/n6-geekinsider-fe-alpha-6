import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecruiterDetails from './RecruiterDetails';
import { fetchProfileDetails, StateTypes } from '../../../redux';
import { ProfilePropsTypes } from './types';
import Loader from '../../../components/Loader';
import './RecruiterProfile.scss';

const RecruiterProfile: React.FC<ProfilePropsTypes> = (props) => {

    const { profileDetails, fetchProfileDetails, loading } = props;

    useEffect(() => {
        fetchProfileDetails();
    }, [])


    return (
        <div className="recruiter-profile">
            {Object.keys(profileDetails).length ? 
                <>
                    {/* <div className="recruiter-profile__left">
                        <QuickProfileWidget title={name} subtitle={preferredIndustry}/>
                    </div> */}
                    <div className="recruiter-profile__right">
                        <RecruiterDetails {...{...profileDetails}} />
                    </div>
                </>
                :
                (!loading && <div className="loader--global">
                    <Loader text="Loading profile..."/>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    profileDetails: state.profileDetails,
    loading: state.loading
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchProfileDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterProfile);