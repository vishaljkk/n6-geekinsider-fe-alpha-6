import React, { useState } from 'react';
import { Form, Input, Button, Alert, Modal, Tabs, notification } from 'antd';
import { Auth } from 'aws-amplify';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import makeRequest from '../../utils/makeRequest';
import { setUserType, StateTypes } from '../../redux';
import { SignupTypes, SignupTabsType, ConfirmSignInFormValueTypes, ConfirmSignUpTypes } from './types';
import { UserDetailTypes } from './types';
import { UserTypeTypes } from '../../routes';

import './Signup.scss';

const { TabPane } = Tabs;

const Signup: React.FC<SignupTypes> = (props) => {

	const { userType, setUserType, history, setIsAuth } = props;
	const [activeTab, setActiveTab] = useState<SignupTabsType>('candidate');
	const [loading, setLoading] = useState<boolean>(false);
	const [userDetail, setUserDetail] = useState<UserDetailTypes>({ email: '', password: '`' })

	const signUp = async (values: UserDetailTypes) => {
		const { email, password } = values;
		try {
			setLoading(true);
			await Auth.signUp({ username: email, password, attributes: { email } });
			setActiveTab('emailVerification');
			setLoading(false);
		}
		catch(error){
			setLoading(false);
			if (error?.code === 'UsernameExistsException') {
				notification.error({
					message: error?.message
				})
			}
		}
	};

	const confirmSignup = async (values: ConfirmSignUpTypes) => {
		const { email, authCode } = values;
		try {
			setLoading(true);
			await Auth.confirmSignUp(email, authCode);
			await Auth.signIn(userDetail.email, userDetail.password);
			await makeRequest.post('/api/users/auth', { groupName: getCandidateNamesForApi(userType) })
			await Auth.signOut();
			await Auth.signIn(userDetail.email, userDetail.password)
			notification.success({
				message: 'Successfully created account',
				description: email
			})
			setIsAuth(true);
			history.push(`/${userType}/onboarding`);
			setLoading(false);
		}
		catch(e) {
			if (e?.code === 'CodeMismatchException') {
				notification.error({
					message: e?.message
				})
			}
			setIsAuth(false);
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: object) => {
		// console.error('Failed:', errorInfo);
	};

	const onActiveKeyChange = (val: any) => setActiveTab(val)

	const openSignInModal = () => history.push('/login');

	const handleConfirmSignup = async (val: ConfirmSignInFormValueTypes) => {
		confirmSignup({ ...val, email: userDetail.email });
	}

	const getCandidateNamesForApi = (type: UserTypeTypes | undefined) => {
		switch(type) {
			case 'candidate':
				return 'userCandidate';
			case 'recruiter':
				return 'userRecruiter';
			default:
				return 'userCandidate';
		}
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
							setUserDetail({ ...val });
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
							<div className="signup__otherlinks">
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
							setUserDetail({ ...val });
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
							<div className="signup__otherlinks">
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
						onFinish={handleConfirmSignup}
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

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setUserType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);