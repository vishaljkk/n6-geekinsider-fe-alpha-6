import React, { useEffect } from 'react';
import { Button, Empty } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JobWidget from '../../../../components/JobWidget';
import { RecommCandidateWidgetPropTypes } from '..';
import { fetchPostedJobs, fetchJobDetail, StateTypes } from '../../../../redux';
import '../RecruiterLanding.scss';

const RecommCandidateWidget: React.FC<RecommCandidateWidgetPropTypes> = (
  props
) => {
  const { recentJobs, fetchPostedJobs } = props;
  const history = useHistory();

  useEffect(() => {
    if (recentJobs.length === 0) fetchPostedJobs();
  }, []);

  const handleJobCardClick = (jobSlug: string) => {
    history.push(`/recruiter/post/${jobSlug}`);
  };

  return (
    <div className="recommended-job-widget">
      <h2>Jobs posted by you</h2>
      {recentJobs.length > 0 ? (
        <>
          <div className="recommended-job-widget-container">
            {recentJobs.map((itm: any) => (
              <JobWidget
                key={JSON.stringify(itm)}
                {...{ ...itm, onClick: handleJobCardClick }}
              />
            ))}
          </div>
          <div className="see-more-container">
            <Button onClick={() => history.push('/recruiter/search')}>
              See more...
            </Button>
          </div>
        </>
      ) : (
        <div>
          <Empty description="No Data, Please post a job and manage here!" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  recentJobs: state.recentJobs
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchPostedJobs,
      fetchJobDetail
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommCandidateWidget);
