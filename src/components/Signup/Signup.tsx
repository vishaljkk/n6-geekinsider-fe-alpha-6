import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert, Modal, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { SignupTypes, SignupTabsType } from './types';

const { TabPane } = Tabs;

const Signup: React.FC<SignupTypes> = (props: SignupTypes) => {
	const { formType, signUp, confirmSignUp } = props;
	const [activeTab, setActiveTab] = useState<SignupTabsType>('candidate');

	useEffect(() => {
		if (formType === 'confirmSignUp') {
			setActiveTab('emailVerification');
		}
	}, [formType])

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Modal 
			visible={true}
			maskClosable={false}
			closable={false}
			bodyStyle={{ padding: '40px' }}
			width='420px'
			footer={null}
			centered
		>
			<Tabs activeKey={activeTab} onChange={(val: any) => setActiveTab(val)} centered>
				<TabPane tab="Employee" key="candidate">
					<Form
						name="basic"
						onFinish={val => {
							signUp(val);
							localStorage.setItem('email', val.email);
						}}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="email"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
						</Form.Item>

						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" block>
								Sign up
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Button type="link">
									Sign in
								</Button>
							</div>
						</Form.Item>
					</Form>
				</TabPane>
				<TabPane tab="Recruiter" key="recruiter">
					<Form
						name="basic"
						onFinish={val => {
							signUp(val);
							localStorage.setItem('email', val.email);
						}}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="email"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
						</Form.Item>

						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" block>
								Sign up
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Button type="link">
									Sign in
								</Button>
							</div>
						</Form.Item>
					</Form>
				</TabPane>
				<TabPane key="emailVerification">
					<Form
						name="Email verification"
						onFinish={val => {
							const email = localStorage.getItem('email');
							confirmSignUp({ ...val, email }); 
						}}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item>
							<Alert message="Verification pin successfully sent to your email" type="success" showIcon />
						</Form.Item>
						<Form.Item
							name="authCode"
							rules={[{ required: true, message: 'Please input pin sent on your email!' }]}
						>
							<Input prefix={<UserOutlined />} placeholder="PIN" />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" block>
								Confirm sign up
							</Button>
						</Form.Item>
					</Form>
				</TabPane>
			</Tabs>
		</Modal>
	);
}

export default Signup;