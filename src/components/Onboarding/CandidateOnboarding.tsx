import { Auth } from 'aws-amplify';
import { Form, Input, Button, Select, InputNumber, Tabs } from 'antd';
import apiCaller from '../../utils/makeRequest';

const { Option } = Select;

const CandidateOnboarding = (props: any) => {
    const { formState, getUserInfo } = props;
    const cities = ['Banglore', 'Pune', 'Chennai', 'Kolkata', 'Mumbai', 'Delhi', 'Indore', 'Vadodara'];
    const skills = ['React', 'Angular', 'Vue', 'Ember', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'SASS'];
    console.log(formState)

    getUserInfo().then((resp:any) => {
        console.log(resp.idToken.jwtToken)
    }).catch((error: any) => console.log(error))

	const onFinish = (values: any) => {
        console.log('Success:', values);
        apiCaller.post('/candidate/onboard', values)
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
            <header className="App-header">Create your Candidate profile</header>
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
                    rules={[{ required: true, message: 'Please enter an email address!' }]}
                >
                    <Input placeholder="Please enter an email address" />
                </Form.Item> */}

                <Form.Item
                    label="Years of experience"
                    name="yearsOfExperience"
                    rules={[{ required: true, message: 'Please select years of experience!' }]}
                >
                    <Input placeholder="i.e 3.5 years" />
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
                    label="Current ctc"
                    name="currentCtc"
                    rules={[{ required: true, message: 'Please add current ctc!' }]}
                >
                    <Input placeholder="i.e 4.5Lac" />
                </Form.Item>

                <Form.Item
                    label="Introduction"
                    name="introduction"
                    rules={[{ required: false, message: 'Please enter a brief introduction about yourself!' }]}
                >
                    <Input.TextArea placeholder="A brief introduction about yourself" />
                </Form.Item>

                <Form.Item
                    label="Github"
                    name="github"
                    rules={[{ required: false, message: 'Please enter your github profile link!', type: 'url' }]}
                >
                    <Input placeholder="Github profile link" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                    {/*<div style={{ display: 'flex', justifyContent: 'flex-end' }}>*/}
                    <div>
                        <Button type="primary" htmlType="submit">
                            Submit details
                        </Button>
                        {/* <Button style={{ marginLeft: '10px' }}>
                            Skip
                        </Button> */}
                    </div>
                </Form.Item>
            </Form>
		</div>
	);
}

export default CandidateOnboarding;