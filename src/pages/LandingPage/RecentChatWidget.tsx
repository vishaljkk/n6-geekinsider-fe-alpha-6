import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { SingleChatWidget } from '../../components/SingleChatWidget';
import './LandingPage.scss';

const demoData = [
  {
    image:
      'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
    messageTitle: 'Flipkart',
    message: 'Interested in you',
    jobTitle: 'Full stack developer',
    jobPostId: 'some id here'
  },
  {
    image:
      'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
    messageTitle: 'Flipkart',
    message: 'Interested in you',
    jobTitle: 'Full stack developer',
    jobPostId: 'some id here'
  },
  {
    image:
      'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
    messageTitle: 'Flipkart',
    message: 'Interested in you',
    jobTitle: 'Full stack developer',
    jobPostId: 'some id here'
  }
];

const RecentChatWidget: React.FC<any> = () => {
  const history = useHistory();
  return (
    <div className="recent-chat-widget">
      <h2>Recent Chats</h2>
      <div className="recent-chat-widget-container">
        {demoData.map((itm) => (
          <SingleChatWidget itm={itm} />
        ))}
      </div>
      <div className="see-more-container">
        <Button onClick={() => history.push('/messages')}>See more...</Button>
      </div>
    </div>
  );
};

export default RecentChatWidget;
