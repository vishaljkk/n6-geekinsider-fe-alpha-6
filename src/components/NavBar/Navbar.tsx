import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Dropdown, Menu, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserOutlined } from '@ant-design/icons';

import RecruiterSkillSearch from './RecruiterSkillSearch';
import { NavBarPropTypes } from './types';
import { setLoading, setUserType, getJobDetails, setSearchType, fetchCompanySearchData, clearStates, StateTypes, fetchCities, fetchSkills } from '../../redux';
import './Navbar.scss';

const NavBar: React.FC<NavBarPropTypes> = (props) => {
    
    const { history, setIsAuth, setUserType, setLoading, fetchCompanySearchData, setSearchType, userType, fetchCities, fetchSkills, cities, skills, clearStates } = props;

    useEffect(() => {
        cities.length === 0 && fetchCities();
        skills.length === 0 && fetchSkills();
    }, [])

    const signOut = async () => {
        setLoading(true);
        await Auth.signOut();
        setIsAuth(false);
        history.push('/login');
        setLoading(false);
        clearStates();
    }

    const autoCompleteStyles = ({
        width: '50%', 
        marginRight: '20px'
    })

    const handleGeekInsiderIconClick = () => history.push('/home');

    const handleProfileClick = async () => {
        const type = (await Auth.currentAuthenticatedUser()).signInUserSession.idToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter'
        setUserType(type)
        const route = `/${type}/profile`;
        history.push(route)
    }

    const handlePressEnter = (e: any) => {
        if (e?.target?.value) {
            const searchString = e.target.value;
            fetchCompanySearchData(searchString);
            setSearchType('companySearch');
        }
        else {
            setSearchType('recommended');
        }
    }

    const handleSearch = (searchString: string) => {
        if (searchString) {
            fetchCompanySearchData(searchString);
            setSearchType('companySearch');
        }
        else {
            setSearchType('recommended');
        }
    }

    const handleClick = () => {
        userType === 'candidate' ? history.push('/search') : history.push('/recruiter/search')
    }

    return (
        <div className="navbar">
            <header className="navbar__container">
                <div className="navbar__logo" onClick={handleGeekInsiderIconClick}>
                    <h2>Geekinsider</h2>
                </div>
                <div className="navbar__center">
                    {userType === 'candidate' && <Input.Search
                        style={autoCompleteStyles}
                        placeholder="Search jobs by company name"
                        onPressEnter={handlePressEnter}
                        onSearch={handleSearch}
                        onClick={handleClick}
                        allowClear
                    />}
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
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType,
    cities: state.cities, 
    skills: state.skills
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
    setUserType, 
    setLoading, 
    getJobDetails,
    setSearchType,
    fetchCompanySearchData,
    fetchCities,
    fetchSkills,
    clearStates
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
