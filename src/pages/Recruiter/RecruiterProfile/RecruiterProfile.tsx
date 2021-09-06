import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QuickProfileWidget from '../../../components/QuickProfileWidget';
import RecruiterDetails from './RecruiterDetails';
import { StateTypes } from '../../../redux/types';
import { fetchProfileDetails } from '../../../redux/actions';
import { ProfilePropsTypes } from './types';
import Loader from '../../../components/Loader';
import './RecruiterProfile.scss';

const RecruiterProfile: React.FC<ProfilePropsTypes> = (props) => {

    const { profileDetails, fetchProfileDetails } = props;
    const { name, preferredIndustry } = profileDetails;

    useEffect(() => {
        fetchProfileDetails();
    }, [])


    return (
        <div className="profile">
            {Object.keys(profileDetails).length ? 
                <Row>
                    <Col span={6} offset={1}>
                        <QuickProfileWidget title={name} subtitle={preferredIndustry}/>
                    </Col>
                    <Col span={15} offset={1}>
                        <RecruiterDetails {...{...profileDetails}} />
                    </Col>
                </Row>
                :
                <div className="loader--global">
                    <Loader text="Loading profile..."/>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterProfile);