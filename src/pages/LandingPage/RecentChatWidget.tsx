import { useState } from 'react';
import { Row, Col, Button, Card, Avatar } from 'antd';
import { SingleChatWidget } from '../../components/SingleChatWidget';
import './LandingPage.scss';
import { HistoryContext } from '../../routes/Routes';

const demoData = [
    {
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        messageTitle: 'Flipkart',
        message: 'Interested in you',
        jobTitle: 'Full stack developer',
        jobPostId: 'some id here'
    },
    {
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        messageTitle: 'Flipkart',
        message: 'Interested in you',
        jobTitle: 'Full stack developer',
        jobPostId: 'some id here'
    },
    {
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        messageTitle: 'Flipkart',
        message: 'Interested in you',
        jobTitle: 'Full stack developer',
        jobPostId: 'some id here'
    }
]

// const SingleChatWidget = (props: any) => {
//     const { image, messageTitle, message, jobTitle, jobPostId } = props.itm;
//     const handlePostVisible = (postId: string) => {
//         console.log(postId);
//     }
//     return (
//         <div className="each-chat">
//             <Row>
//                 <Col span={3} className="each-chat-image">
//                     <Avatar size={55} src={image} />
//                     {/* <img src={image} alt="" height="55px" /> */}
//                 </Col>
//                 <Col span={13}>
//                     <h3><strong>{messageTitle}</strong></h3>
//                     <p className="message-glimpse">{message}</p>
//                 </Col>
//                 <Col span={8} className="each-chat-post-desc">
//                     <h3>{jobTitle}</h3>
//                     <p onClick={() => handlePostVisible(jobPostId)} className="each-chat-post-link">See post</p>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

const RecentChatWidget: React.FC<any> = () => {
    const [data, setData] = useState(demoData);
    return (
        <div className="recent-chat-widget">
            <h2>Recent Chats</h2>
            <div className="recent-chat-widget-container">
                {data.map(itm => <SingleChatWidget itm={itm}/>)}
            </div>
            <div className="see-more-container">
                <HistoryContext.Consumer>
                    {(history: any) => <Button onClick={() => history.push('/messages')}>See more...</Button>}
                </HistoryContext.Consumer>
            </div>
        </div>
    )
}

export default RecentChatWidget;
