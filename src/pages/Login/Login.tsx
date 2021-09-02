import { useState } from 'react';
import { Form, Input, Button, Modal, Tabs, notification } from 'antd';
import { Auth, API } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { setUserType } from '../../redux/actions';
import { StateTypes } from '../../redux/types';
import { LoginPropsTypes, LoginFormSubmitTypes } from './types';

const { TabPane } = Tabs;

const Login: React.FC<LoginPropsTypes> = (props) => {

	const { setUserType, history, setIsAuth } = props;
	const [loginLoading, setLoginLoading] = useState<boolean>(false);

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	// const addToGroup = async (newlyCreatedUser: string | null) => {
	// 	const apiName = 'AdminQueries';
	// 	const path = '/addUserToGroup';
	// 	const myInit = {
	// 		body: {
	// 		  "username" : newlyCreatedUser,
	// 		  "groupname": 'recruiter'
	// 		},
	// 		headers: {
	// 		  'Content-Type' : 'application/json',
	// 		  Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
	// 		}
	// 	}
	// 	return await API.post(apiName, path, myInit);
	// }

	const signInFunc = async (values: LoginFormSubmitTypes) => {
		const { username, password } = values;
		try {
			setLoginLoading(true);
			const resp = await Auth.signIn(username, password);

			const type = resp.signInUserSession.accessToken.payload["cognito:groups"][0] === 'userCandidate' ? 'candidate' : 'recruiter'
			console.log(type)
			setUserType(type);

			setIsAuth(true);
			setLoginLoading(false);
			// call user role service
			history.push('/home');
		}
		catch (e) {
			setLoginLoading(false);
			if (e?.code === 'UserNotFoundException') {
				notification.error({
					message: e?.message
				})
			}
			console.error(e)
		}
	};

	const setSignUpModalVisible = () => history.push('/signup');

	const signInWithGoogle = () => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });

	const handleRecruiterSubmit = (values: LoginFormSubmitTypes) => {
		signInFunc(values);
		setUserType('recruiter');
	}

	const handleCandidateSubmit = (values: LoginFormSubmitTypes) => {
		signInFunc(values);
		setUserType('candidate');
	}

	const handleTabChange = (val: any) => console.log(val)

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
							<Button type="primary" htmlType="submit" block loading={loginLoading}>
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
							<Button type="primary" htmlType="submit" block loading={loginLoading}>
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
								{/* <Button type="link">
									Forgot password?
								</Button> */}
								<div/>
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

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);