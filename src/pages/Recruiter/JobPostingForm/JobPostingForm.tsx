import { Form, Input, Button, Select, InputNumber } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { useHistory } from 'react-router';

import { JobPostingFormPropTypes } from './types';
import { createJobPost, StateTypes } from '../../../redux';
import { skills, cities, jobTypes } from '../../../utils';

const { Option } = Select;

const JobPostingForm: React.FC<JobPostingFormPropTypes> = (props) => {
    const { createJobPost } = props;
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

	const onFinishFailed = (errorInfo: any) => {
	};

    const handleCancel = () => {
        form.resetFields();
        history.push('/recruiter/profile');
    }

	return (
        <div className="onboarding">
            {/* <header>Add a job</header> */}
            <br/>
            <Form
                form={form}
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
                    rules={[{ required: true, message: 'Please enter the title of job!' }]}
                >
                    <Input placeholder="Please enter the title of job" />
                </Form.Item>

                {/* <Form.Item
                    label="Type of job position"
                    name="typeOfPosition"
                    rules={[{ required: true, message: 'Please select the type of position!' }]}
                >
                    <Select
                        allowClear
                        placeholder="Please select the type of position"
                    >
                        {jobTypes.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item> */}

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
                    rules={[{ required: true, message: 'Please enter the experience range!', type: 'number' }]}
                >
                    <InputNumber placeholder="Please enter the experience range" />
                </Form.Item>

                <Form.Item
                    label="Annual salary"
                    name="ctc"
                    rules={[{ required: true, message: 'Please enter the annual salary range!', type: 'number' }]}
                >
                    <InputNumber placeholder="Please enter the annual salary range" />
                </Form.Item>

                <Form.Item
                    label="Job description"
                    name="jobDescription"
                    rules={[{ required: true, message: 'Please enter a brief discription about the job!' }]}
                >
                    <Input.TextArea placeholder="Please enter a brief discription about the job" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    <>
                        <Button type="primary" htmlType="submit">
                            Create job
                        </Button>
                        <Button style={{ marginLeft: '10px' }} onClick={handleCancel}>
                            Cancel
                        </Button>
                    </>
                </Form.Item>
            </Form>
		</div>
	);
}

const mapStateToProps = (state: StateTypes) => ({
    recentJobs: state.recentJobs
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    createJobPost
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(JobPostingForm);