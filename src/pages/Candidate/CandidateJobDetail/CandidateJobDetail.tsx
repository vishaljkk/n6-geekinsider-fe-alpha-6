import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JobPostDetailWidget from '../../../components/JobPostDetailWidget';
import { StateTypes, fetchJobDetail } from '../../../redux';
import { CandidateJobDetailPropTypes } from '.';
import './CandidateJobDetail.scss';

const CandidateJobDetail: React.FC<CandidateJobDetailPropTypes> = (props) => {
  const { activeJob, match, candidateDetail, fetchJobDetail } = props;

  useEffect(() => {
    fetchJobDetail(match.params.slug);
  }, []);

  return (
    <div className="candidate-detail">
      {Object.keys(activeJob).length > 0 && (
        <JobPostDetailWidget {...{ ...activeJob }} />
      )}
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  activeJob: state.activeJob
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchJobDetail
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CandidateJobDetail);
