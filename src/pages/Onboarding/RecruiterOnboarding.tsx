import React from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { skills, cities, industryTypes } from '../../utils';
import { saveRecruiterData, StateTypes } from '../../redux';
import { RecruitereSubmitTypes, RecruiterOnboardingPropTypes } from './types';
import './onboarding.scss';

const { Option } = Select;

const RecruiterOnboarding: React.FC<RecruiterOnboardingPropTypes> = (props) => {
    const { history, saveRecruiterData } = props;
    const [form] = Form.useForm();

	const onFinish = (values: RecruitereSubmitTypes) => {
		const tempValues = Object.assign({}, values);
        const skillsString = Object.assign([], tempValues.skills);
        tempValues.skills = skillsString.join(',');
        saveRecruiterData(tempValues, afterSuccessfullFinish);
	};

    const afterSuccessfullFinish = () => {
        history.push('/home');
        form.resetFields();
    }

	return (
        <div className="onboarding">
            <h2>Create your Recruiter profile</h2>
            <Form
                form={form}
                name="Recruiter onboarding"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
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
                        {industryTypes.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please select a location!' }]}
                >
                    <Select
                        showSearch
                        placeholder="Please select your current location"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option?.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {cities.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
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
                                return Promise.reject(new Error('Please enter a valid whatsapp number!'));
                            },
                        }
                    ]}
                >
                    <Input placeholder="Please add your whatsapp number" />
                </Form.Item>

                <Form.Item
                    label="Number of employees"
                    name="empSize"
                    rules={[{ required: true, message: 'Please enter valid number of employees!', type: "number" }]}
                >
                    <InputNumber placeholder="e.g 100" min={1}/>
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
                                return Promise.reject(new Error('Please select atleast three skills!'));
                            },
                        }
                    ]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select atleast three skills"
                    >
                        {skills.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="About"
                    name="about"
                    rules={[{ required: false, message: 'Please enter a brief introduction!' }]}
                >
                    <Input.TextArea placeholder="about" />
                </Form.Item>

                <Form.Item
                    label="Website"
                    name="site"
                    rules={[{ required: false, message: 'Please enter a valid url!', type: 'url' }]}
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