import { useEffect } from 'react';
import { Radio } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchResults from './SearchResults';
import { StateTypes, setSearchType, SearchType, fetchRecommendedJobs, fetchTrendingJobs } from '../../redux';
import { SearchPropTypes } from '.';
import './Search.scss';

const Search: React.FC<SearchPropTypes> = (props) => {
    const { skillSearch, searchType, trendingJobs, recommendedJobs, companySearch, setSearchType, fetchRecommendedJobs, fetchTrendingJobs } = props;

    const handleRadioChange = (e: any) => {
        const value = e.target.value;
        setSearchType(value);
    }

    const returnData = (type: SearchType) => {
        switch (type) {
            case 'companySearch':
                return companySearch;
            case 'skillSearch':
                return skillSearch;
            case 'recommended':
                return recommendedJobs;
            case 'trending':
                return trendingJobs;
            default:
                return recommendedJobs;
        }
    }

    useEffect(() => {
        if (searchType === 'recommended') {
            if (recommendedJobs.length === 0) fetchRecommendedJobs();
        }
        else if (searchType === 'trending') {
            if (trendingJobs.length === 0) fetchTrendingJobs();
        }
    }, [searchType])
    
    return (
        <div className="search">
            {(searchType === 'recommended' || searchType === 'trending') && <Radio.Group defaultValue={searchType} buttonStyle="solid" className="toggle" onChange={handleRadioChange}>
                <Radio.Button value="recommended">Recommended jobs</Radio.Button>
                <Radio.Button value="trending">Top trending jobs</Radio.Button>
            </Radio.Group>}
            {searchType === 'skillSearch' &&
                <div className="search__heading">
                    <h2>Results based on Skills</h2>
                </div>
            }
            {searchType === 'companySearch' &&
                <div className="search__heading">
                    <h2>Results based on Company Name</h2>
                </div>
            }
            <SearchResults data={returnData(searchType)} />
            <br/>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
    trendingJobs: state.trendingJobs,
    recommendedJobs: state.recommendedJobs,
    companySearch: state.companySearch,
    searchType: state.searchType
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setSearchType,
    fetchRecommendedJobs,
    fetchTrendingJobs
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);