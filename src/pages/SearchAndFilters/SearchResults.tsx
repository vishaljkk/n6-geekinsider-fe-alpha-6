import { useEffect, useState } from 'react';
import { Row, Card, Col, Avatar, Pagination } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import { iconStyles } from '../../utils';
import { StateTypes } from '../../redux/types';
import JobPostDetailWidget from '../../components/JobPostDetailWidget';
import './SearchResult.scss';

const SingleWidget = (props: any) => {
    const { itm, setSelectedData, selectedData } = props;
    const { typeOfPosition, jobTitle, skills, officeLocations, annualSalary, experienceRange, numberOfApplications, jobDescription, companyName } = itm;
    const handlePostVisible = (postId: string) => {
        // console.log(postId);
    }
    return (
        <Card 
            hoverable 
            onClick={() => setSelectedData(itm)} 
            // style={{ backgroundColor: jobPostId === selectedData.jobPostId ? '#dcdcdc' : 'white' }}
        >
            <section className="each-widget">
                <Avatar size={55}>{jobTitle[0]}</Avatar>
                <div className="right-section">
                    <span>{companyName}</span>
                    <h3>{jobTitle}</h3>
                    <span>{typeOfPosition}</span>
                    {skills.map((itm:any) => <span className="tags">{itm}</span>)}
                </div>
            </section>
            <section className="footer-section">
                <div><MdLocationOn style={iconStyles} />{officeLocations}</div>
                <div><MdMonetizationOn style={iconStyles} />{annualSalary}</div>
                <div><MdHistory style={iconStyles} />{experienceRange}</div>
                {/* <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> */}
            </section>
        </Card>
    )
}

const SearchAndFilters: React.FC<any> = (props) => {

    const { skillSearch } = props;
    const [selectedData, setSelectedData] = useState(skillSearch[0]);

    useEffect(() => {
        setSelectedData(skillSearch[0]);
    }, [skillSearch])
    
    return (
        <div className="search-and-filter-container">
            <Row>
                <Col span={6} offset={1}>
                    <div className="search-result-widget-container">
                        {skillSearch.map((itm: any, index: number) => 
                            <SingleWidget 
                                itm={itm} 
                                index={index} 
                                selectedData={selectedData}
                                setSelectedData={setSelectedData}
                            />
                        )}
                    </div>
                </Col>
                <Col span={15} offset={1}>
                    <div className="search-result-selected-widget-container">
                        {selectedData && <JobPostDetailWidget {...{...selectedData}} />}
                    </div>
                </Col>
            </Row>
            <Pagination defaultCurrent={1} total={10} />
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilters);