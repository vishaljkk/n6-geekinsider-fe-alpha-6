import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { useHistory } from 'react-router';

import { JobPostingFormPropTypes } from './types';
import { createJobPost, StateTypes } from '../../../redux';
import './JobPostingForm.scss';

const { Option } = Select;

const JobPostingForm: React.FC<JobPostingFormPropTypes> = (props) => {
    const { createJobPost, skills, cities } = props;
    const history = useHistory();
    const [form] = Form.useForm();

	const onFinish = (values: any) => {
        const tempValues = Object.assign({}, values);
        tempValues.skills = tempValues.skills.join(',');
        tempValues.jobLocation = tempValues.jobLocation.join(',');
        createJobPost(tempValues, afterSuccessfullFinish);
	};

    const afterSuccessfullFinish = () => {
        form.resetFields();
        history.push('/recruiter/profile');
    }

    const handleCancel = () => {
        form.resetFields();
        history.push('/recruiter/profile');
    }

	return (
        <div className="job-posting-form">
            <h2 className="job-posting-form__heading">Post a job</h2>
            <br/>
            <Form
                form={form}
                name="Add a job"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Job title"
                    name="jobTitle"
                    rules={[{ required: true, message: 'Please enter the title of job!' }]}
                >
                    <Input placeholder="Please enter the title of job" autoComplete="off" />
                </Form.Item>

                <Form.Item
                    label="Desired skills"
                    name="skills"
                    rules={[{ 
                        required: true, 
                        message: 'Please select atleast three skills!',
                        validator(_, value) {
                            if (value && value.length>=3) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Please select atleast three skills!'));
                        },
                    }]}
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
                    label="Office locations"
                    name="jobLocation"
                    rules={[{ required: true, message: 'Please select job locations!' }]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder="Please select job locations"
                    >
                        {cities.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Experience"
                    name="exp"
                    rules={[{ 
                        required: true, 
                        message: 'Please enter the experience!',
                        validator(_, value) {
                            const regexp = new RegExp(/^[0-9.]+$/gm);
                            if (value && value.match(regexp)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Experience in number like 2.5 or 4!'));
                        }
                    }]}
                >
                    <Input placeholder="Experience in number like 2.5 or 4" autoComplete="off" />
                </Form.Item>

                <Form.Item
                    label="Annual salary"
                    name="ctc"
                    rules={[{ 
                        required: true, 
                        message: 'Please enter the annual salary!',
                        validator(_, value) {
                            const regexp = new RegExp(/^[0-9.]+$/gm);
                            if (value && value.match(regexp)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Please select atleast three skills!'));
                        }
                    }]}
                >
                    <Input placeholder="Annual salary in lacs like 5.5 or 7" autoComplete="off" />
                </Form.Item>

                <Form.Item
                    label="Job description"
                    name="jobDescription"
                    rules={[{ required: true, message: 'Please enter a brief discription about the job!' }]}
                >
                    <Input.TextArea placeholder="Please enter a brief discription about the job" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Create job
                    </Button>
                    &nbsp;&nbsp;
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
		</div>
	);
}

const mapStateToProps = (state: StateTypes) => ({
    recentJobs: state.recentJobs,
    skills: state.skills,
    cities: state.cities
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    createJobPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingForm);