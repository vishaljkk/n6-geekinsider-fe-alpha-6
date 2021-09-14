import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecruiterSearchResults from './RecruiterSearchResults';
import {
  StateTypes,
  setSearchType,
  SearchType,
  fetchRecommendedCandidates
} from '../../../redux';
import './RecruiterSearch.scss';

const RecruiterSearch: React.FC<any> = (props) => {
  const {
    skillSearch,
    searchType,
    recommendedCandidates,
    setSearchType,
    fetchRecommendedCandidates
  } = props;

  const returnData = (type: SearchType) => {
    switch (type) {
      case 'skillSearch':
        return skillSearch;
      case 'recommended':
        return recommendedCandidates;
      default:
        return recommendedCandidates;
    }
  };

  useEffect(() => {
    if (searchType === 'recommended') {
      if (recommendedCandidates.length === 0) fetchRecommendedCandidates();
    }
  }, [searchType]);

  return (
    <div className="search">
      {searchType === 'recommended' && (
        <div className="search__heading">
          <h2>Recommended Candidates</h2>
        </div>
      )}
      {searchType === 'skillSearch' && (
        <div className="search__heading">
          <h2>Results based on Skills</h2>
        </div>
      )}
      <RecruiterSearchResults data={returnData(searchType)} />
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  skillSearch: state.skillSearch,
  recommendedCandidates: state.recommendedCandidates,
  searchType: state.searchType
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setSearchType,
      fetchRecommendedCandidates
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSearch);
