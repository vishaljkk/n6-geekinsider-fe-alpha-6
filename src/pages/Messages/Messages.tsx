import React from 'react';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMessages } from '../../redux/actions';
import MessageTab from './MessageTab';
import './messages.scss';
import { useEffect } from 'react';

const { TabPane } = Tabs;

const Messages: React.FC = (props: any) => {
	const { messageData, getMessages } = props;

	useEffect(() => {
		getMessages()
	}, [])
	
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


const mapStateToProps = (state: any) => ({
    messageData: state.messageData
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getMessages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);