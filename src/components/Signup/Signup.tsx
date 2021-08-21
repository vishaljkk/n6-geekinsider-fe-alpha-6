import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert, Modal, Tabs, notification } from 'antd';
import { Auth } from 'aws-amplify';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { SignupTypes, SignupTabsType } from './types';

const { TabPane } = Tabs;

const Signup: React.FC<SignupTypes> = (props: SignupTypes) => {
	const { formType, updateFormState, confirmSignUp, userType, setUserType } = props;
	const [activeTab, setActiveTab] = useState<SignupTabsType>('candidate');
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (formType === 'confirmSignUp') {
			setActiveTab('emailVerification');
		}
	}, [formType])

	const signUp = async (values: any) => {
		const { email, password } = values;
		try {
			setLoading(true);
			await Auth.signUp({ username: email, password, attributes: { email } });
			updateFormState((prevState: any) => ({ ...prevState, formType: "confirmSignUp" }));
		}
		catch(error){
			setLoading(false);
			if (error?.code === 'AliasExistsException') {
				notification.error({
					message: error?.message
				})
			}
			console.log(error)
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const onActiveKeyChange = (val: any) => setActiveTab(val)

	const openSignInModal = () => {
		updateFormState((prevState: any) => ({ ...prevState, formType: "signIn" }))
	}

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
			<Tabs activeKey={activeTab} onChange={onActiveKeyChange} centered>
				<TabPane tab="Candidate" key="candidate">
					<Form
						name="basic"
						onFinish={val => {
							signUp(val);
							localStorage.setItem('email', val.email);
							setUserType('candidate');
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
							<Button type="primary" htmlType="submit" block loading={loading}>
								Sign up
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Button type="link" onClick={openSignInModal}>
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
							setUserType('recruiter');
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
							<Button type="primary" htmlType="submit" block loading={loading}>
								Sign up
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
								<Button type="link" onClick={openSignInModal}>
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
							<Button type="primary" htmlType="submit" block loading={loading}>
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