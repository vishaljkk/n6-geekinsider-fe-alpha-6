import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Modal, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const Signup = () => {
	const [visible, setVisible] = useState(true);
	const onFinish = (values: any) => {
		console.log('Success:', values);
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
				<TabPane tab="Employee" key="Employee">
					FOrm hai
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
							<Button htmlType="submit" block>
								Sign in with Google
							</Button>
						</Form.Item>
						<Form.Item>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<a className="login-form-forgot" href="">
									Forgot password?
								</a>
								<Link to="/signup">
									Register
								</Link>
							</div>
						</Form.Item>
					</Form>
				</TabPane>
			</Tabs>
		</Modal>
	);
}

export default Signup;