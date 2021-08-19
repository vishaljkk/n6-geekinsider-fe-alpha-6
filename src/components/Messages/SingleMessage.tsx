import React from 'react';
import { Avatar, Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { SingleMessageProps } from './types';

const SingleMessage: React.FC<SingleMessageProps> = (props: any) => {
	const { messageObj } = props;
	return (
		<div className="single-msg">
			<Avatar size={64}>U</Avatar>
			<div className="msg-brief">
				<h3>{messageObj}</h3>
				<p>{messageObj}</p>
			</div>
			<div className="job-brief">
				<h3>Company Name</h3>
				<p>Designation</p>
			</div>
			<div className="connect">
				<WhatsAppOutlined style={{fontSize: '2rem'}}/>
				<Button type="link">Lets Connect</Button>
			</div>
		</div>
	)
}

export default SingleMessage;