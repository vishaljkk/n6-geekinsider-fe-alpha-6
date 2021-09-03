import { Form, Input, Button, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { useHistory } from 'react-router';

import { JobPostingFormPropTypes } from './types';
import { StateTypes } from '../../redux/types';
import { createJobPost } from '../../redux/actions';
import { skills, cities, jobTypes } from '../../utils';

const { Option } = Select;

const JobPostingForm: React.FC<JobPostingFormPropTypes> = (props) => {
    const { createJobPost } = props;
    const history = useHistory();

	const onFinish = (values: any) => {
		// console.log('Success:', values);
        createJobPost(values, history);
	};

	const onFinishFailed = (errorInfo: any) => {
		// console.log('Failed:', errorInfo);
	};

	return (
        <div className="onboarding">
            {/* <header>Add a job</header> */}
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
                    rules={[{ required: true, message: 'Please enter the title of job!' }]}
                >
                    <Input placeholder="Please enter the title of job" />
                </Form.Item>

                <Form.Item
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
                </Form.Item>

                <Form.Item
                    label="Desired skills"
                    name="desiredSkills"
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
                    name="officeLocations"
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
                    label="Experience range"
                    name="experienceRange"
                    rules={[{ required: true, message: 'Please enter the experience range!' }]}
                >
                    <Input placeholder="Please enter the experience range" />
                </Form.Item>

                <Form.Item
                    label="Annual salary"
                    name="annualSalary"
                    rules={[{ required: true, message: 'Please enter the annual salary range!' }]}
                >
                    <Input placeholder="Please enter the annual salary range" />
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
                        <Button style={{ marginLeft: '10px' }}>
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