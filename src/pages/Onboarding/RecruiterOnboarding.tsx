import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { saveRecruiterData } from '../../redux/actions';
import { RecruitereSubmitTypes, RecruiterOnboardingPropTypes } from './types';
import { StateTypes } from '../../redux/types';
import './onboarding.scss';

const { Option } = Select;

const RecruiterOnboarding: React.FC<RecruiterOnboardingPropTypes> = (props) => {
    const { history, setIsAuth, isAuth, saveRecruiterData } = props;
    const industryTypes = ['Information Technology & Services', 'Hospital & Health Care', 'Construction', 'Retail', 'Education Management', 'Financial Services', 'Accounting', 'Computer Software', 'Higher Education', 'Automotive'];
    const cities = ['Banglore', 'Pune', 'Chennai', 'Kolkata', 'Mumbai', 'Delhi', 'Indore', 'Vadodara'];
    const skills = ['React', 'Angular', 'Vue', 'Ember', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'SASS']

	const onFinish = (values: RecruitereSubmitTypes) => {
		const tempValues = Object.assign({}, values);
        const skillsString = Object.assign([], tempValues.skills);
        tempValues.skills = skillsString.join(',');
        saveRecruiterData(tempValues, history);
	};

	const onFinishFailed = (errorInfo: object) => {
		// console.log('Failed:', errorInfo);
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
                    label="Company/Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter the company name!' }]}
                >
                    <Input placeholder="Please enter the company name" />
                </Form.Item>

                <Form.Item
                    label="Industry"
                    name="preferredIndustry"
                    rules={[{ required: true, message: 'Please enter the company name!' }]}
                >
                    <Select
                        showSearch
                        placeholder="Select your current industry type"
                        optionFilterProp="children"
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
                        placeholder="Please select your current location"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option?.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {cities.map(itm => <Option value={itm} key={itm}>{itm}</Option>)}
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

                <Form.Item
                    label="Number of employees"
                    name="empSize"
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
                        {skills.map(itm => <Option value={itm} key={itm}>{itm}</Option>)}
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
                    name="site"
                    rules={[{ required: false, message: 'Please input your password!', type: 'url' }]}
                >
                    <Input placeholder="website" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Submit details
                    </Button>
                </Form.Item>
            </Form>
		</div>
	);
}

const mapStateToProps = (state: StateTypes) => ({
    userType: state.userType
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    saveRecruiterData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterOnboarding);