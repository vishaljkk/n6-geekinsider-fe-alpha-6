import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecentChatWidget from '../../LandingPage/RecentChatWidget';
import RecommCandidateWidget from './components/RecomendedJobsWidget';
import QuickProfileWidget from '../../../components/QuickProfileWidget/QuickProfileWidget';
import TopTrending from './components/TrendingJobs';
import { fetchProfileDetails, StateTypes } from '../../../redux';
import { CandidateLandingPagePropTypes } from '.';
import './CandidateLandingPage.scss';

const CandidateLandingPage: React.FC<CandidateLandingPagePropTypes> = (props) => {
    const { handleProfileClick, fetchProfileDetails, profileDetails } = props;

    useEffect(() => {
        fetchProfileDetails()
    }, [])
    
    return (
            <div className="candidate-landing">
                <div className="candidate-landing__left">
                    <QuickProfileWidget onClick={handleProfileClick} title={profileDetails.name} subtitle={profileDetails.jobtitle}/>
                </div>
                <div className="candidate-landing__right">
                    <RecentChatWidget />
                    <RecommCandidateWidget />
                    <TopTrending />
                </div>
            </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchProfileDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateLandingPage);