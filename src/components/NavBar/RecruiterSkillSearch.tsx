import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation } from 'react-router';

import { fetchSkillSearch, StateTypes } from '../../redux';
import { skills } from '../../utils';
import './Navbar.scss';

const { Option } = Select;

interface RecruiterSkillSearchPropTypes {
    fetchSkillSearch: (e: string[]) => void
}

const RecruiterSkillSearch: React.FC<RecruiterSkillSearchPropTypes> = (props) => {
    const { fetchSkillSearch } = props;
    const history = useHistory();
    const location = useLocation();

    const handleChange = (values: string[]) => {
        if (location.pathname !== '/search') history.push('/search');
        fetchSkillSearch(values);
    }

    const handleClick = () => {
        history.push('/search');
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
        >
            {skills.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
        </Select>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
    fetchSkillSearch 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSkillSearch);
