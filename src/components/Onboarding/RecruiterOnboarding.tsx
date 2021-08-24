import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Tabs } from 'antd';
import apiCaller from '../../utils/makeRequest';
import './onboarding.scss';

const { Option } = Select;

const RecruiterOnboarding = (props: any) => {
    const { formState, getUserInfo } = props;
    const industryTypes = ['Information Technology & Services', 'Hospital & Health Care', 'Construction', 'Retail', 'Education Management', 'Financial Services', 'Accounting', 'Computer Software', 'Higher Education', 'Automotive'];
    const cities = ['Banglore', 'Pune', 'Chennai', 'Kolkata', 'Mumbai', 'Delhi', 'Indore', 'Vadodara'];
    const skills = ['React', 'Angular', 'Vue', 'Ember', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'SASS']

    console.log(formState);
	const onFinish = (values: any) => {
		apiCaller.post('/recruiter/onboard', values)
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
        <div className="onboarding">
            <header className="App-header">Create your Recruiter profile</header>
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
                        placeholder="Select your current industry type"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            option?.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {industryTypes.map(itm => <Option value={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please select atleast one location!' }]}
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
                            option?.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {cities.map(itm => <Option value={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Whatsapp number"
                    name="whatsappNumber"
                    rules={[
                        { 
                            required: true, 
                            message: 'Please add a valid whatsapp number!',
                            validator(_, value) {
                                if (value && value.length === 10) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }
                    ]}
                >
                    <Input placeholder="Please add your whatsapp number" />
                </Form.Item>

                {/* <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="Please enter an email address" />
                </Form.Item> */}

                <Form.Item
                    label="Employee size"
                    name="numberOfEmployees"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input placeholder="e.g 10-1000 format" />
                </Form.Item>

                <Form.Item
                    label="Skills"
                    name="skills"
                    rules={[
                        { 
                            required: true, 
                            message: 'Please select atleast three skills!',
                            validator(_, value) {
                                console.log(value)
                                if (value && value.length>=3) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }
                    ]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select atleast three skills"
                    >
                        {skills.map(itm => <Option value={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="About"
                    name="about"
                    rules={[{ required: false, message: 'Please input your password!' }]}
                >
                    <Input.TextArea placeholder="about" />
                </Form.Item>

                <Form.Item
                    label="Website"
                    name="website"
                    rules={[{ required: false, message: 'Please input your password!', type: 'url' }]}
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