import { useEffect, useState } from 'react';
import { Row, Card, Col, Avatar, Pagination, Radio, Empty } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import JobPostDetailWidget from '../../components/JobPostDetailWidget';
import Loader from '../../components/Loader';
import { setSearchData } from '../../redux/actions';
import { iconStyles } from '../../utils';
import { StateTypes } from '../../redux/types';
import './SearchResult.scss';

const SingleWidget: React.FC<any> = (props) => {
    const { itm, setSelectedData, selectedData } = props;
    const { jobTitle, skills, officeLocations, ctc, exp, numberOfApplications, jobDescription, companyName, jobslug } = itm;

    return (
        <Card 
            hoverable
            onClick={() => setSelectedData(itm)}
            style={{ backgroundColor: itm?.jobslug === selectedData?.jobslug ? '#dcdcdc' : 'white' }}
        >
            <section className="each-widget">
                <Avatar size={55}>{jobTitle[0]}</Avatar>
                <div className="right-section">
                    <span>{companyName}</span>
                    <h3>{jobTitle}</h3>
                </div>
            </section>
            <br/>
            <section className="tags-section">
                {skills.map((itm: string) => <span className="tags">{itm}</span>)}
            </section>
            <section className="footer-section">
                <div><MdLocationOn style={iconStyles} />{officeLocations}</div>
                <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                <div><MdHistory style={iconStyles} />{exp}</div>
                {/* <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> */}
            </section>
        </Card>
    )
}

const SearchAndFilters: React.FC<any> = (props) => {

    const { skillSearch, setSearchData, trendingJobs, recommendedJobs } = props;
    const [selectedData, setSelectedData] = useState({});
    
    useEffect(() => {
        // const searchQuery = props?.location?.search.replaceAll('?q=', '');
        // console.log(searchQuery)
        // searchQuery === 'trending' ? setSearchData(trendingJobs) : setSearchData(recommendedJobs);

        // if (skillSearch.length===0) {
        //     const searchQuery = props?.location?.search.replaceAll('?q=', '');
        //     console.log(searchQuery)
        //     searchQuery === 'trending' ? setData(trendingJobs) : setData(recommendedJobs);
        //     searchQuery === 'trending' ? setSelectedData(trendingJobs[0]) : setSelectedData(recommendedJobs[0]);
        // }
        // else {
        //     setData(skillSearch);
        //     setSelectedData(skillSearch[0]);
        // }
        
    }, [])

    useEffect(() => {
        setSelectedData(skillSearch[0]);
    }, [skillSearch])

    const handleRadioChange = (e: any) => {
        const value = e.target.value;
        value === 'trending' ? setSearchData(trendingJobs) : setSearchData(recommendedJobs);
    }
    
    return (
        <div className="search-and-filter-container">
            {skillSearch.length===0 && <Radio.Group defaultValue={props?.location?.search.replaceAll('?q=', '')} buttonStyle="solid" style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }} onChange={handleRadioChange}>
                <Radio.Button value="recommended">Recommended jobs</Radio.Button>
                <Radio.Button value="trending">Top trending jobs</Radio.Button>
            </Radio.Group>}
            {skillSearch.length>0 ?
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
                            {selectedData && Object.keys(selectedData).length>0 ? 
                                <JobPostDetailWidget {...{...selectedData}} /> 
                                : 
                                <Loader />
                            }
                        </div>
                    </Col>
                </Row>
                :
                <Empty />
            }
            <br/>
            <div className="search-footer">
                <Pagination defaultCurrent={1} total={10} />
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
    trendingJobs: state.trendingJobs,
    recommendedJobs: state.recommendedJobs
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ setSearchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilters);