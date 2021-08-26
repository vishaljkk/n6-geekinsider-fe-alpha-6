import React from 'react';
import { Row, Col } from 'antd';
import RecentChatWidget from './RecentChatWidget';
import RecommCandidateWidget from './RecomendedJobsWidget';
import QuickProfileWidget from './QuickProfileWidget';
import TopTrending from './TopTrending';
import RecommenededCandidatesWidget from './RecommenededCandidatesWidget';
import NavBar from '../../components/NavBar';

const LandingPage: React.FC = (props: any) => {
    const { history } = props;
    return (
        <>
            <NavBar history={history} />
            <main>
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
            </main>
        </>
    )
}

export default LandingPage;