import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;

const CandidateOnboarding = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
        <div className="onboarding">
            <header className="App-header">Create your profile</header>
            <Form
                name="Candidate onboarding"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Full name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Please enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Job title"
                    name="jobTitle"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please enter your current job title" />
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Select
                        showSearch
                        // style={{ width: 200 }}
                        placeholder="Please select your current location"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Whatsapp number"
                    name="whatsappNumber"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please add your whatsapp number" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please enter an email address" />
                </Form.Item>

                <Form.Item
                    label="Years of experience"
                    name="yearsOfExperience"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please select years of experience" />
                </Form.Item>

                <Form.Item
                    label="Skills"
                    name="skills"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        // style={{ width: '100%' }}
                        placeholder="Please select atleast three skills"
                        // defaultValue={['a10', 'c12']}
                        // onChange={handleChange}
                    >
                        {['React', 'JavaScript', 'HTML', 'CSS'].map(itm => <Option value={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Current ctc"
                    name="currentCtc"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please add current ctc" />
                </Form.Item>

                <Form.Item
                    label="Introduction"
                    name="introduction"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.TextArea placeholder="Email" />
                </Form.Item>

                <Form.Item
                    label="Github"
                    name="github"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="primary" htmlType="submit">
                            Submit details
                        </Button>
                        <Button style={{ marginLeft: '10px' }}>
                            Skip
                        </Button>
                    </div>
                </Form.Item>
            </Form>
		</div>
	);
}

export default CandidateOnboarding;