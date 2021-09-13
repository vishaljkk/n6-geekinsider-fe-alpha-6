import { Form, Input, Button, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { skills, cities } from '../../utils';
import { saveCandidateData, StateTypes } from '../../redux';
import { CandidateOnboardingPropTypes, CandidateSubmitTypes } from './types';
import './onboarding.scss';

const { Option } = Select;

const CandidateOnboarding: React.FC<CandidateOnboardingPropTypes> = (props) => {
    const { history, saveCandidateData } = props;
    const [form] = Form.useForm();

	const onFinish = (values: CandidateSubmitTypes) => {
        const tempValues = Object.assign({}, values);
        const skillsString = Object.assign([], tempValues.skills);
        tempValues.skills = skillsString.join(',');
        saveCandidateData(tempValues, afterSuccessfullFinish);
	};

    const afterSuccessfullFinish = () => {
        history.push('/home');
        form.resetFields();
    }

	const onFinishFailed = (errorInfo: object) => {
	};

	return (
        <div className="onboarding">
            <h2>Create your Candidate profile</h2>
            <Form
                form={form}
                name="Candidate onboarding"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Full name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your full name!' }]}
                >
                    <Input placeholder="Please enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Job title"
                    name="jobTitle"
                    rules={[{ required: true, message: 'Please enter your current job title!' }]}
                >
                    <Input placeholder="Please enter your current job title" />
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please select your current location!' }]}
                >
                    <Select
                        showSearch
                        placeholder="Please select your current location"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }
                    ]}
                >
                    <Input placeholder="Please add your whatsapp number" />
                </Form.Item>

                <Form.Item
                    label="Years of experience"
                    name="exp"
                    rules={[{ 
                        required: true, 
                        message: 'Please select years of experience!',
                        validator(_, value) {
                            const regexp = new RegExp(/^[0-9.]+$/gm);
                            if (value && value.match(regexp)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Experience in number like 2.5 or 4!'));
                        }
                    }]}
                >
                    <Input placeholder="Experience in number like 2.5 or 4!" />
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
                        {skills.map(itm => <Option value={itm} key={itm}>{itm}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Current ctc"
                    name="ctc"
                    rules={[{ required: true, message: 'Please add current ctc!' }]}
                >
                    <Input placeholder="i.e 4.5Lac" />
                </Form.Item>

                <Form.Item
                    label="About"
                    name="about"
                    rules={[{ required: false, message: 'Please enter a brief introduction about yourself!' }]}
                >
                    <Input.TextArea placeholder="A brief introduction about yourself" />
                </Form.Item>

                <Form.Item
                    label="Github"
                    name="githubUrl"
                    rules={[{ required: false, message: 'Please enter your github profile link!' }]}
                >
                    <Input placeholder="Github profile link" />
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
    saveCandidateData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CandidateOnboarding);