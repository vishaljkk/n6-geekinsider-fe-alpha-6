import { useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JobWidget from '../../components/JobWidget';
import { StateTypes } from '../../redux/types';
import { fetchTrendingJobs, fetchJobDetail } from '../../redux/actions';
import './LandingPage.scss';

const TopTrending: React.FC<any> = (props) => {
    const { trendingJobs, fetchTrendingJobs, fetchJobDetail, setVisible } = props;
    const history = useHistory();

    useEffect(() => {
        fetchTrendingJobs();
    }, [])

    const handleCardClick = (jobslug: string) => {
        fetchJobDetail(jobslug);
        setVisible(true);
    }

    return (
        <div className="recommended-job-widget">
            <h2>Top trending jobs</h2>
            <div className="recommended-job-widget-container">
                {trendingJobs.map((itm: any) => <JobWidget {...{...itm, onClick: handleCardClick}} />)}
            </div>
            <div className="see-more-container">
                <Button onClick={() => history.push('/search?q=trending')}>See more...</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    trendingJobs: state.trendingJobs
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchTrendingJobs,
    fetchJobDetail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopTrending);