import React from 'react';
import { Auth } from 'aws-amplify';
import { Row, Col, AutoComplete, Dropdown, Menu, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserOutlined } from '@ant-design/icons';

import { NavBarPropTypes } from './types';
import { StateTypes } from '../../redux/types';
import { setUserType } from '../../redux/actions';
import './Navbar.scss';

const NavBar: React.FC<NavBarPropTypes> = (props) => {
    const { history, setIsAuth, userType, setUserType } = props;
    const signOut = async () => {
        await Auth.signOut();
        setIsAuth(false)
        history.push('/login');
    }

    const handleSelect = (val: string) => {
        history.push(`/search?query=${val}`)
    }

    const handleGeekInsiderIconClick = () => history.push('/home');

    const handleProfileClick = async () => {
        const type = (await Auth.currentAuthenticatedUser()).signInUserSession.accessToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter'
        setUserType(type)
        const route = `/${type}/profile`;
        history.push(route)
    }

    return (
        <>
            <header className="navbar-container">
                <Row>
                    <Col xs={{ span: 5 }} lg={{ span: 4 }} flex='none' className="geekinsider__logo" onClick={handleGeekInsiderIconClick}>
                        <h2>Geekinsider</h2>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 15, offset: 1 }}>
                        <AutoComplete
                            style={{ width: '100%' }}   
                            options={[
                                { value: 'React' },
                                { value: 'JavaScript' },
                                { value: 'TypeScript' },
                            ]}
                            placeholder="Search jobs"
                            onSelect={handleSelect}
                        />
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <Dropdown 
                            trigger={['click']}
                            overlay={
                                <Menu>
                                    <Menu.Item onClick={handleProfileClick}>
                                        Profile
                                    </Menu.Item>
                                    <Menu.Item onClick={signOut}>
                                        Logout
                                    </Menu.Item>
                                </Menu>
                            } 
                            placement="bottomRight" 
                            arrow
                        >
                            <Button shape="circle" size="large" icon={<UserOutlined />} />
                        </Dropdown>
                    </Col>
                </Row>
            </header>
        </>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType,
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ setUserType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
