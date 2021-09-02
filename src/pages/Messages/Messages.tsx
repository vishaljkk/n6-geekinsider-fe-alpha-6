import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../../redux/actions';
import MessageTab from './MessageTab';
import Loader from '../../components/Loader';
import { StateTypes } from '../../redux/types';
import { MessagePropTypes } from './types';
import './messages.scss';

const { TabPane } = Tabs;

const Messages: React.FC<MessagePropTypes> = (props) => {
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
				<div className="loader--global"><Loader text="Loading messages..."/></div>
			}
		</>
	)
}


const mapStateToProps = (state: StateTypes) => ({
    messages: state.messages
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchMessages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);