import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecentChatWidget from '../RecentChatWidget';
import RecommCandidateWidget from '../RecomendedJobsWidget';
import QuickProfileWidget from '../../../components/QuickProfileWidget/QuickProfileWidget';
import TopTrending from '../TopTrending';
import { fetchLandingPageData } from '../../../redux/actions';
import { StateTypes } from '../../../redux/types';

const CandidateLandingPage: React.FC = (props: any) => {
    const { landingData, fetchLandingPageData, userType } = props;

    useEffect(() => {
        console.log(landingData);
        fetchLandingPageData()
    }, [])
    
    return (
        <div className="landing-page-container">
            <Row>
                <Col span={6} offset={1}>
                    <QuickProfileWidget />
                </Col>
                <Col span={15} offset={1} className="landing-right-column">
                    <RecentChatWidget />
                    <RecommCandidateWidget />
                    <TopTrending />
                </Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(CandidateLandingPage);