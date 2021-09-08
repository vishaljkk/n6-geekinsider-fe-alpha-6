import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JobPostDetailWidget from '../../../components/JobPostDetailWidget';
import { StateTypes } from '../../../redux';
import { CandidateJobDetailPropTypes } from '.';
import './CandidateJobDetail.scss';

const CandidateJobDetail: React.FC<CandidateJobDetailPropTypes> = (props) => {
    const { activeJob } = props;

    return (
        <div className="candidate-detail">
            {Object.keys(activeJob).length>0 && <JobPostDetailWidget {...{...activeJob}} />}
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    activeJob: state.activeJob
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateJobDetail);