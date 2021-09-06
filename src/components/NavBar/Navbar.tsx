import React from 'react';
import { Auth } from 'aws-amplify';
import { Input, Dropdown, Menu, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserOutlined } from '@ant-design/icons';

import RecruiterSkillSearch from './RecruiterSkillSearch';
import { NavBarPropTypes } from './types';
import { StateTypes } from '../../redux/types';
import { setLoading, setUserType, getJobDetails } from '../../redux/actions';
import './Navbar.scss';

const NavBar: React.FC<NavBarPropTypes> = (props) => {
    
    const { history, setIsAuth, setUserType, setLoading, getJobDetails } = props;
    const signOut = async () => {
        setLoading(true);
        await Auth.signOut();
        setIsAuth(false);
        history.push('/login');
        setLoading(false);
    }

    const autoCompleteStyles = ({
        width: '50%', 
        marginRight: '20px'
    })

    // const handleSelect = (val: string) => {
    //     history.push(`/search?query=${val}`)
    // }

    const handleGeekInsiderIconClick = () => history.push('/home');

    const handleProfileClick = async () => {
        const type = (await Auth.currentAuthenticatedUser()).signInUserSession.idToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter'
        setUserType(type)
        const route = `/${type}/profile`;
        history.push(route)
    }

    const handlePressEnter = (e: any) => {
        const searchString = e.target.value;
        getJobDetails(searchString);
    }

    const handleClick = () => {
        history.push('/search');
    }

    return (
        <header className="navbar">
            <div className="navbar__logo" onClick={handleGeekInsiderIconClick}>
                <h2>Geekinsider</h2>
            </div>
            <div className="navbar__center">
                {/* <AutoComplete
                    style={autoCompleteStyles}   
                    options={[
                        { value: 'React' },
                        { value: 'JavaScript' },
                        { value: 'TypeScript' },
                    ]}
                    placeholder="Search jobs"
                    onSelect={handleSelect}
                /> */}
                <Input 
                    style={autoCompleteStyles}
                    placeholder="Search jobs by company, enter the company name and press enter"
                    onPressEnter={handlePressEnter}
                    onClick={handleClick}
                    allowClear
                />
                <RecruiterSkillSearch />
            </div>
            <div className="navbar__right">
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
            </div>
        </header>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType,
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ setUserType, setLoading, getJobDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
