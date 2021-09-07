import { useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JobWidget from '../../../../components/JobWidget';
import { fetchRecommendedJobs, fetchJobDetail, StateTypes } from '../../../../redux';
import '../CandidateLandingPage.scss';

interface RecommCandidateWidgetPropTypes {
    recommendedJobs: any, 
    fetchRecommendedJobs: () => void, 
    fetchJobDetail: (id: string) => void, 
    setVisible: (e: boolean) => void
}

const RecommCandidateWidget: React.FC<RecommCandidateWidgetPropTypes> = (props) => {
    const { recommendedJobs, fetchRecommendedJobs, fetchJobDetail, setVisible } = props;
    const history = useHistory();

    useEffect(() => {
        fetchRecommendedJobs();
    }, [])

    const handleCardClick = (jobslug: string) => {
        fetchJobDetail(jobslug);
        setVisible(true);
    }

    return (
        <div className="recommended-job-widget">
            <h2>Recommended jobs for you</h2>
            <div className="recommended-job-widget-container">
                {recommendedJobs.map((itm: any) => <JobWidget key={itm} {...{...itm, onClick: handleCardClick}}/>)}
            </div>
            <div className="see-more-container">
                <Button onClick={() => history.push('/search?q=recommended')}>See more...</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recommendedJobs: state.recommendedJobs
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchRecommendedJobs,
    fetchJobDetail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecommCandidateWidget);