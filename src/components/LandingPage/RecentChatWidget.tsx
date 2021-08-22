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
                <Col span={6}><img src={image} alt="" /></Col>
                <Col span={12}>
                    <h3>{messageTitle}</h3>
                    <p>{message}</p>
                </Col>
                <Col span={6}>
                    <h3>{jobTitle}</h3>
                    <Button size="small" type="link" onClick={() => handlePostVisible(jobPostId)}>See post</Button>
                </Col>
            </Row>
        </Card>
    )
}

const RecentChatWidget: React.FC<any> = () => {
    const [data, setData] = useState(demoData);
    return (
        <div className="recent-chat-widget">
            <h2>Recent Chats</h2>
            <Card>
                {data.map(itm => <SingleWidget itm={itm}/>)}
            </Card>
            <div className="see-more-container">
                <Button>See more...</Button>
            </div>
        </div>
    )
}

export default RecentChatWidget;
