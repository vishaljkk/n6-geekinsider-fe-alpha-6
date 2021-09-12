import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation } from 'react-router';

import { fetchSkillSearch, StateTypes, setSearchType, fetchRecruiterSkillSearch } from '../../redux';
import { RecruiterSkillSearchPropTypes } from './types';
import { skills } from '../../utils';
import './Navbar.scss';

const { Option } = Select;

const RecruiterSkillSearch: React.FC<RecruiterSkillSearchPropTypes> = (props) => {
    const { fetchSkillSearch, setSearchType, userType, fetchRecruiterSkillSearch } = props;
    const history = useHistory();
    const location = useLocation();

    const handleChange = (values: string[]) => {
        if (location?.pathname !== '/candidate/search') history.push('/candidate/search');
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
        history.push('/recruiter/search');
    }

    return (
        <Select 
            mode="multiple"
            placeholder="Search jobs via skills"
            style={{ width: '50%' }} 
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
    userType: state.userType
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
    fetchSkillSearch,
    setSearchType,
    fetchRecruiterSkillSearch
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSkillSearch);
