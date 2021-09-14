import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation } from 'react-router';

import { fetchSkillSearch, StateTypes, setSearchType, fetchRecruiterSkillSearch } from '../../redux';
import { RecruiterSkillSearchPropTypes } from './types';
import './Navbar.scss';

const { Option } = Select;

const RecruiterSkillSearch: React.FC<RecruiterSkillSearchPropTypes> = (props) => {
    const { fetchSkillSearch, setSearchType, userType, fetchRecruiterSkillSearch, skills } = props;
    const history = useHistory();
    const location = useLocation();

    const handleChange = (values: string[]) => {
        if (location?.pathname !== '/search') {
            userType === 'candidate' ? history.push('/search') : history.push('/recruiter/search')
        }
        if (values.length) {
            userType === 'candidate' ? fetchSkillSearch(values) : fetchRecruiterSkillSearch(values);
            setSearchType('skillSearch');
        }
        else {
            setSearchType('recommended');
        }
    }

    const handleClear = () => {
        setSearchType('recommended');
    }

    const handleClick = () => {
        userType === 'candidate' ? history.push('/search') : history.push('/recruiter/search')
    }

    return (
        <Select 
            mode="multiple"
            placeholder={userType === 'candidate' ? 'Search jobs via skills' : 'Search candidates via skills'}
            style={{ width: userType === 'candidate' ? '50%' : '100%' }} 
            onChange={handleChange}
            onClick={handleClick}
            allowClear
            dropdownMatchSelectWidth={false}
            onClear={handleClear}
        >
            {skills.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
        </Select>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
    userType: state.userType,
    skills: state.skills
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
    fetchSkillSearch,
    setSearchType,
    fetchRecruiterSkillSearch
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSkillSearch);
