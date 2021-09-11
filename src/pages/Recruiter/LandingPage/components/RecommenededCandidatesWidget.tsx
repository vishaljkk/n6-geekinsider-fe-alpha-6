import { useEffect } from 'react';
import { Tooltip, Button, Card, Tag, Avatar } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchRecommendedCandidates, StateTypes, setRecruiterCandidateDetails } from '../../../../redux';
import { RecommenededCandidatesWidgetTypes, SingleWidgetTypes } from '..';
import '../RecruiterLanding.scss';
import { useHistory } from 'react-router';

const SingleWidget: React.FC<SingleWidgetTypes> = (props) => {
    const { skills, jobTitle, name, handleClick } = props;

    return (
        <Card hoverable style={{ width:'100%' }} onClick={() => handleClick(props)}>
            <section className="each-widget">
                <Avatar size={55}>{name[0]}</Avatar>
                <div className="right-section">
                    <h3>{name}</h3>
                    <span>{jobTitle}</span>
                </div>
            </section>
            <div className="tag-section">
                {skills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
            </div>
        </Card>
    )
}

const RecommenededCandidatesWidget: React.FC<RecommenededCandidatesWidgetTypes> = (props) => {
    const { recommendedCandidates, fetchRecommendedCandidates, setRecruiterCandidateDetails } = props;
    const history = useHistory();

    useEffect(() => {
        fetchRecommendedCandidates();
    }, [])

    const handleClick = (values: SingleWidgetTypes) => {
        setRecruiterCandidateDetails(values);
        history.push(`/candidate/recommended/${values.aboutid}`);
    }

    return (
        <div className="recommended-candidates-widget">
            <h2>Recommended candidates</h2>
            <div className="recommended-candidates-widget-container">
                {recommendedCandidates.slice(0, 3).map((itm: any) => <SingleWidget key={itm} {...{...itm, handleClick}}/>)}
            </div>
            <div className="see-more-container">
                <Button>See more...</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recommendedCandidates: state.recommendedCandidates,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchRecommendedCandidates,
    setRecruiterCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecommenededCandidatesWidget);