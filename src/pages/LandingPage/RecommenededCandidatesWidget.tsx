import { useState } from 'react';
import { Tooltip, Button, Card, Tag, Avatar } from 'antd';
import { DollarCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import './LandingPage.scss';
import RecommCandidateWidget from './RecomendedJobsWidget';

const demoData = [
    {
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 233
    },
    {
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 2
    },
    {
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 10
    }
]

const SingleWidget = (props: any) => {
    const { image, company, jobTitle, skills, location, ctc, experience, numberOfApplications } = props.itm;
    const handlePostVisible = (postId: string) => {
        console.log(postId);
    }
    return (
        <Card hoverable style={{ width:'100%' }}>
            <section className="each-widget">
                <Avatar size={55} src={image} />
                <div className="right-section">
                    <span>{company}</span>
                    <h3>{jobTitle}</h3>
                    {skills.map((itm:any) => <span className="tags">{itm}</span>)}
                </div>
            </section>
        </Card>
    )
}

const RecommenededCandidatesWidget: React.FC<any> = () => {
    const [data, setData] = useState(demoData);
    return (
        <div className="recommended-candidates-widget">
            <h2>Recommended candidates</h2>
            <div className="recommended-candidates-widget-container">
                {data.map(itm => <SingleWidget itm={itm}/>)}
            </div>
            {/* <SingleWidget itm={data[0]} /> */}
            <div className="see-more-container">
                <Button>See more...</Button>
            </div>
        </div>
    )
}

export default RecommenededCandidatesWidget;