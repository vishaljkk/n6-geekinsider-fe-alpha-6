import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuickProfileWidget from '../../components/QuickProfileWidget';
import CandidateDetails from './CandidateDetails';
import { StateTypes } from '../../redux/types';
import './Profile.scss';

const demoData = {
    jobPostId: 'id5',
    image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
    company: 'Ron',
    jobTitle: 'Full stack developer',
    skills: ['React', 'JavaScript'],
    location: 'Mumbai',
    ctc: '12L - 15L/yr',
    experience: '3-5 years',
    companyId: 'some id',
    description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more."
}

const Profile = () => {
    return (
        <div className="profile">
            <Row>
                <Col span={6} offset={1}>
                    <QuickProfileWidget />
                </Col>
                <Col span={15} offset={1}>
                    <CandidateDetails itm={demoData} />
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    profileDetails: state.profileDetails
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);