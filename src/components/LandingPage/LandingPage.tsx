import React from 'react';
import { Row, Col } from 'antd';
import RecentChatWidget from './RecentChatWidget';
import RecommCandidateWidget from './RecommCandidateWidget';
import QuickProfileWidget from './QuickProfileWidget';

const LandingPage: React.FC = () => {
    return (
        <Row>
            <Col span={8}>
                <QuickProfileWidget />
            </Col>
            <Col span={14}>
                <RecentChatWidget />
                <RecommCandidateWidget />
            </Col>
        </Row>
    )
}

export default LandingPage;