import React from 'react';
import { Tabs } from 'antd';
import MessageTab from './MessageTab';
import './messages.scss';

const { TabPane } = Tabs;

const Messages: React.FC = () => {
	return (
		<Tabs defaultActiveKey="1" centered>
		    <TabPane tab="Pending" key="pending">
		      	<MessageTab type="pending" />
		    </TabPane>
		    <TabPane tab="Open Thread" key="openThread">
		      	<MessageTab type="openThread" />
		    </TabPane>
		    <TabPane tab="Closed" key="closed">
		      	<MessageTab type="closed" />
		    </TabPane>
	  	</Tabs>
	)
}

export default Messages;