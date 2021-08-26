import React from 'react';
import { Row, Col } from 'antd';
import RecentChatWidget from './RecentChatWidget';
import RecommCandidateWidget from './RecomendedJobsWidget';
import QuickProfileWidget from './QuickProfileWidget';
import TopTrending from './TopTrending';
import RecommenededCandidatesWidget from './RecommenededCandidatesWidget';

const LandingPage: React.FC = () => {
    return (
        <Row>
            <Col span={6} offset={1}>
                <QuickProfileWidget />
                <RecommenededCandidatesWidget />
            </Col>
            <Col span={15} offset={1} style={{ marginTop: '30px' }}>
                <RecentChatWidget />
                <RecommCandidateWidget />
                <TopTrending />
            </Col>
        </Row>
    )
}

export default LandingPage;