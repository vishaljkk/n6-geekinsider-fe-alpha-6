import React from 'react';
import SingleMessage from './SingleMessage';
import { MessageTabProps } from './types';

const MessageTab: React.FC<MessageTabProps> = (props: any) => {
	const { type } = props;
	const messages = ['one', 'two'];
	return (
		<>{messages.map((itm: any) => <SingleMessage messageObj={itm} />)}</>
	)
}

export default MessageTab;