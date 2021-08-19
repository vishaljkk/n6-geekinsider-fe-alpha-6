import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;

const RecruiterOnboarding = () => {
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
                    label="Company name"
                    name="companyName"
                    rules={[{ required: true, message: 'Please enter the company name!' }]}
                >
                    <Input placeholder="Please enter the company name" />
                </Form.Item>

                <Form.Item
                    label="Industry"
                    name="industry"
                    rules={[{ required: true, message: 'Please enter the company name!' }]}
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
                            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
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
                            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                    label="Employee size"
                    name="numberOfEmployees"
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
                    label="About"
                    name="about"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.TextArea placeholder="about" />
                </Form.Item>

                <Form.Item
                    label="Website"
                    name="website"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="website" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    {/*<div style={{ display: 'flex', justifyContent: 'flex-end' }}>*/}
                    <div>
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

export default RecruiterOnboarding;