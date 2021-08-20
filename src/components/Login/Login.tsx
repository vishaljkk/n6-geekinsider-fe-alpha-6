import { useState } from 'react';
import { Form, Input, Button, Modal, Tabs } from 'antd';
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LoginPropsTypes } from './types';

const { TabPane } = Tabs;

const Login: React.FC<LoginPropsTypes> = (props: LoginPropsTypes) => {

	const { signUp } = props;
	const [visible, setVisible] = useState<boolean>(true);
	
	const onFinish = (values: any) => {
		console.log(values)
		props.signIn(values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const layout = {
		// labelCol: { span: 4 },
		wrapperCol: { offset: 4, span: 16 },
	};

	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	};

	return (
		<Modal 
			visible={visible}
			// title="Sign up"
			centered
			// destroyOnClose
			maskClosable={false}
			// bodyStyle={{height:'500px'}}
			bodyStyle={{ padding: '40px' }}
			width='420px'
			// onOk={handleSubmit}
			// okText={'Save'}
			// cancelText={'Cancel'}
			footer={null}
			onCancel={() => {
				setVisible(false)
			}}
		>
			<Tabs defaultActiveKey="1" onChange={(val: any) => console.log(val)} centered>
				<TabPane tab="Candidate" key="Candidate">
					<Form
						// {...layout}
						name="basic"
						// labelCol={{ span: 4 }}
						// wrapperCol={{ span: 16 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							// label="Username"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
						</Form.Item>

						<Form.Item
							// label="Password"
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
						// {...layout}
						name="basic"
						// labelCol={{ span: 4 }}
						// wrapperCol={{ span: 16 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							// label="Username"
							name="username"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
						</Form.Item>

						<Form.Item
							// label="Password"
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