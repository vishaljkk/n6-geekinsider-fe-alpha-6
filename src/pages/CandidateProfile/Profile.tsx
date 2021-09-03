import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QuickProfileWidget from '../../components/QuickProfileWidget';
import CandidateDetails from './CandidateDetails';
import Loader from '../../components/Loader';
import { fetchProfileDetails } from '../../redux/actions';
import { StateTypes } from '../../redux/types';
import { ProfilePropsTypes } from './types';
import './Profile.scss';

const Profile: React.FC<ProfilePropsTypes> = (props) => {

    const { profileDetails, fetchProfileDetails } = props;

    useEffect(() => {
        fetchProfileDetails();
    }, [])

    return (
        <div className="profile">
            {Object.keys(profileDetails).length ? 
                <Row>
                    <Col span={6} offset={1}>
                        <QuickProfileWidget title={profileDetails.name} />
                    </Col>
                    <Col span={15} offset={1}>
                        <CandidateDetails {...{...profileDetails}} />
                    </Col>
                </Row>
                :
                <div className="loader---global"><Loader text="Loading profile..."/></div>
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