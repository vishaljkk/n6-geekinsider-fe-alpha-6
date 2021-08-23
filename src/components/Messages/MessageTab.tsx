import { useState } from 'react';
import { SingleChatWidget } from '../baseComponents';
import { MessageTabProps } from './types';

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

const MessageTab: React.FC<MessageTabProps> = (props: any) => {
	const [data, setData] = useState(demoData);
	const { type } = props;
	const messages = ['one', 'two'];
	return (
		<div className="recent-chat-widget-container">
			{data.map(itm => <SingleChatWidget itm={itm}/>)}
		</div>
	)
}

export default MessageTab;