import { useState } from 'react';
import { Row, Col, Button, Card } from 'antd';
import './LandingPage.scss';

const demoData = [
    {
        image: 'imageinbase64',
        messageTitle: 'Flipkart',
        message: 'Interested in you',
        jobTitle: 'Full stack developer',
        jobPostId: 'some id here'
    },
    {
        image: 'imageinbase64',
        messageTitle: 'Flipkart',
        message: 'Interested in you',
        jobTitle: 'Full stack developer',
        jobPostId: 'some id here'
    },
    {
        image: 'imageinbase64',
        messageTitle: 'Flipkart',
        message: 'Interested in you',
        jobTitle: 'Full stack developer',
        jobPostId: 'some id here'
    }
]

const SingleWidget = (props: any) => {
    const { image, messageTitle, message, jobTitle, jobPostId } = props.itm;
    const handlePostVisible = (postId: string) => {
        console.log(postId);
    }
    return (
        <Card hoverable>
            <Row>
                <Col span={8}><img src={image} alt="" /></Col>
                <Col span={16}>
                    <h3>{messageTitle}</h3>
                    <p>{message}</p>
                </Col>
            </Row>
        </Card>
    )
}

const RecommCandidateWidget: React.FC<any> = () => {
    const [data, setData] = useState(demoData);
    return (
        <div className="recent-chat-widget">
            <h3>Recommended jobs for you</h3>
            <Card>
                {data.map(itm => <SingleWidget itm={itm}/>)}
            </Card>
            <div className="see-more-container">
                <Button>See more...</Button>
            </div>
        </div>
    )
}

export default RecommCandidateWidget;