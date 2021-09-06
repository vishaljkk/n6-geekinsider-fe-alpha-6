import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import debounce from 'lodash/debounce';

import { fetchSkillSearch } from '../../redux/actions';
import { skills } from '../../utils';
import { StateTypes } from '../../redux/types';
import './Navbar.scss';
import { useHistory } from 'react-router';

const { Option } = Select;

const RecruiterSkillSearch: React.FC<any> = (props) => {
    const { fetchSkillSearch } = props;
    const history = useHistory();

    const handleChange = (values: any) => {
        fetchSkillSearch(values);
    }

    const handleClick = () => {
        history.push('/search');
    }

    return (
        <Select 
            mode="multiple"
            placeholder="Search jobs via skills"
            style={{ width: '45%' }} 
            onChange={handleChange}
            onClick={handleClick}
        >
            {skills.map(itm => <Option value={itm} key={itm}>{itm}</Option>)}
        </Select>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ fetchSkillSearch }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSkillSearch);
