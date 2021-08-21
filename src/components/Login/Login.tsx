import { useState } from 'react';
import { Form, Input, Button, Modal, Tabs, notification } from 'antd';
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginPropsTypes } from './types';

const { TabPane } = Tabs;

const Login: React.FC<LoginPropsTypes> = (props: LoginPropsTypes) => {

	const { userType, setUserType, updateFormState } = props;
	const [visible, setVisible] = useState<boolean>(true);

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const signInFunc = async (obj: any) => {
		const { username, password } = obj;
		try {
		  await Auth.signIn(username, password);
		  updateFormState((prevState: any) => ({ ...prevState, formType: "signedIn" }));
		}
		catch (e) {
		  if (e?.code === 'UserNotFoundException') {
			notification.error({
			  message: e?.message
			})
		  }
		  console.error(e)
		}
	};

	const setSignUpModalVisible = () => updateFormState((prevState: any) => ({ ...prevState, formType: "signUp" }))

	const signInWithGoogle = () => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });

	const handleRecruiterSubmit = (values: any) => {
		console.log(values)
		signInFunc(values);
		setUserType('recruiter');
	}

	const handleCandidateSubmit = (values: any) => {
		signInFunc(values);
		setUserType('candidate');
	}

	const handleTabChange = (val: any) => console.log(val)

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
				defaultActiveKey="Candidate" 
				onChange={handleTabChange} 
				centered
			>
				<TabPane tab="Candidate" key="Candidate">
					<Form
						name="basic"
						onFinish={handleCandidateSubmit}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="username"
							rules={[
								{ required: true, message: 'Please input your username!', type: 'email' }
							]}
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
							<Button htmlType="submit" block onClick={signInWithGoogle}>
								Sign in with Google
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button type="link">
									Forgot password?
								</Button>
								<Button type="link" onClick={setSignUpModalVisible}>
									Register
								</Button>
							</div>
						</Form.Item>
					</Form>
				</TabPane>
				<TabPane tab="Recruiter" key="Recruiter">
					<Form
						name="basic"
						onFinish={handleRecruiterSubmit}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="username"
							rules={[{ required: true, message: 'Please input your username!', type: 'email' }]}
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
							<Button htmlType="submit" block onClick={signInWithGoogle}>
								Sign in with Google
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button type="link">
									Forgot password?
								</Button>
								<Button type="link" onClick={setSignUpModalVisible}>
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