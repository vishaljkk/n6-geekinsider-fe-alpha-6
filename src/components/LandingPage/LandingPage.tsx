import React from 'react';
import { Row, Col } from 'antd';
import RecentChatWidget from './RecentChatWidget';
import RecommCandidateWidget from './RecomendedJobsWidget';
import QuickProfileWidget from './QuickProfileWidget';
import TopTrending from './TopTrending';

const LandingPage: React.FC = () => {
    return (
        <Row>
            <Col span={8}>
                <QuickProfileWidget />
            </Col>
            <Col span={14}>
                <RecentChatWidget />
                <RecommCandidateWidget />
                <TopTrending />
            </Col>
        </Row>
    )
}

export default LandingPage;