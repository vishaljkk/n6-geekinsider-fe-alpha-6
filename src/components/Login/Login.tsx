import { useState } from 'react';
import { Form, Input, Button, Modal, Tabs } from 'antd';
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginPropsTypes } from './types';

const { TabPane } = Tabs;

const Login: React.FC<LoginPropsTypes> = (props: LoginPropsTypes) => {

	const { signUp, signIn, userType, setUserType } = props;
	const [visible, setVisible] = useState<boolean>(true);

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Modal 
			visible={visible}
			maskClosable={false}
			closable={false}
			bodyStyle={{ padding: '40px' }}
			width='420px'
			footer={null}
			centered
		>
			<Tabs 
				defaultActiveKey="1" 
				onChange={(val: any) => console.log(val)} 
				centered
			>
				<TabPane tab="Candidate" key="Candidate">
					<Form
						name="basic"
						onFinish={(values: any) => {
							signIn(values);
							setUserType('candidate');
						}}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="username"
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
								Login
							</Button>
						</Form.Item>
						<Form.Item>
							<Button htmlType="submit" block onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>
								Sign in with Google
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button type="link">
									Forgot password?
								</Button>
								<Button type="link" onClick={signUp}>
									Register
								</Button>
							</div>
						</Form.Item>
					</Form>
				</TabPane>
				<TabPane tab="Recruiter" key="Recruiter">
					<Form
						name="basic"
						onFinish={(values: any) => {
							signIn(values);
							setUserType('recruiter');
						}}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="username"
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
								Login
							</Button>
						</Form.Item>
						<Form.Item>
							<Button htmlType="submit" block onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>
								Sign in with Google
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button type="link">
									Forgot password?
								</Button>
								<Button type="link" onClick={signUp}>
									Register
								</Button>
							</div>
						</Form.Item>
					</Form>
				</TabPane>
			</Tabs>
		</Modal>
	);
}

export default Login;