import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;

const JobPostingForm = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
        <div className="onboarding">
            <header className="App-header">Add a job</header>
            <Form
                name="Add a job"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Job title"
                    name="jobTitle"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Please enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Type of job position"
                    name="typeOfPosition"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please enter your current job title" />
                </Form.Item>

                <Form.Item
                    label="Desired skills"
                    name="desiredSkills"
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
                    label="Office locations"
                    name="officeLocations"
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
                    label="Experience range"
                    name="experienceRange"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please select years of experience" />
                </Form.Item>

                <Form.Item
                    label="Annual salary"
                    name="annualSalary"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please select years of experience" />
                </Form.Item>

                <Form.Item
                    label="Job description"
                    name="jobDescription"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.TextArea placeholder="about" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <div
                        // style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <Button type="primary" htmlType="submit">
                            Create job
                        </Button>
                        <Button style={{ marginLeft: '10px' }}>
                            Cancel
                        </Button>
                    </div>
                </Form.Item>
            </Form>
		</div>
	);
}

export default JobPostingForm;