import React from 'react';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../../redux/actions';
import MessageTab from './MessageTab';
import './messages.scss';
import { useEffect } from 'react';
import Loader from '../../components/Loader';

const { TabPane } = Tabs;

const Messages: React.FC = (props: any) => {
	const { messages, fetchMessages } = props;

	useEffect(() => {
		fetchMessages()
	}, [])
	
	return (
		<>
			{Object.keys(messages).length ?
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
				:
				<Loader />
			}
		</>
	)
}


const mapStateToProps = (state: any) => ({
    messages: state.messages
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchMessages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);