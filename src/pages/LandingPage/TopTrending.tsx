import { useState } from 'react';
import { Tooltip, Button, Card, Tag, Avatar } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../utils';
import './LandingPage.scss';
import { HistoryContext } from '../../routes/Routes';

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
        <Card hoverable>
            <section className="each-widget">
                <Avatar size={55} src={image} />
                <div className="right-section">
                    <span>{company}</span>
                    <h3>{jobTitle}</h3>
                    {skills.map((itm:any) => <span className="tags">{itm}</span>)}
                </div>
            </section>
            <section className="footer-section">
                <div><MdLocationOn style={iconStyles} />{location}</div>
                <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                <div><MdHistory style={iconStyles} />{experience}</div>
                <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip>
            </section>
        </Card>
    )
}

const TopTrending: React.FC<any> = () => {
    const [data, setData] = useState(demoData);
    return (
        <div className="recommended-job-widget">
            <h2>Top trending jobs</h2>
            <div className="recommended-job-widget-container">
                {data.map(itm => <SingleWidget itm={itm}/>)}
            </div>
            {/* <SingleWidget itm={data[0]} /> */}
            <div className="see-more-container">
                <HistoryContext.Consumer>
                    {(history: any) => <Button onClick={() => history.push('/search')}>See more...</Button>}
                </HistoryContext.Consumer>
            </div>
        </div>
    )
}

export default TopTrending;