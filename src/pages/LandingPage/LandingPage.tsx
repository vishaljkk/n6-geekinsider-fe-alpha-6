import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecentChatWidget from './RecentChatWidget';
import RecommCandidateWidget from './RecomendedJobsWidget';
import QuickProfileWidget from '../../components/QuickProfileWidget/QuickProfileWidget';
import TopTrending from './TopTrending';
import RecommenededCandidatesWidget from './RecommenededCandidatesWidget';
import { fetchLandingPageData } from '../../redux/actions';

const LandingPage: React.FC = (props: any) => {
    const { landingPageData, fetchLandingPageData } = props;

    useEffect(() => {
        console.log(landingPageData);
        fetchLandingPageData()
    }, [])
    
    return (
        <div className="landing-page-container">
            <Row>
                <Col span={6} offset={1}>
                    <QuickProfileWidget />
                    <RecommenededCandidatesWidget />
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

const mapStateToProps = (state: any) => ({
    landingPageData: state.landingPageData
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchLandingPageData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);