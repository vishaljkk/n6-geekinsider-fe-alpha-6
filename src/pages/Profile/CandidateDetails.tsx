import { Card, Button, Progress } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../utils';
import './CandidateDetails.scss';

const CandidateDetails = (props: any) => {
    const { company, jobTitle, skills, location, ctc, experience, numberOfApplications, description, jobPostId } = props.itm;
    return (
        <div className="job-posting-detail-widget">
            <Card>
                <section className="each-widget">
                    <div className="right-section">
                        <h2>{company}</h2>
                        <span>{jobTitle}</span>
                    </div>
                    <div className="action-buttons">
                        <Button type="primary">Apply</Button>
                    </div>
                </section>
                <section className="tags-section">
                    {skills.map((itm:any) => <span className="tags">{itm}</span>)}
                </section>
                <section className="footer-section">
                    <div><MdLocationOn style={iconStyles} />{location}</div>
                    <div><MdMonetizationOn style={iconStyles} />{ctc}</div>
                    <div><MdHistory style={iconStyles} />{experience}</div>
                </section>
                <Card>
                    {description}
                </Card>
                <br/>
                <Card>
                    <div className="profile-footer">
                        <section className="skills-section">
                            <h3><b>Skills</b></h3>
                            <span>React</span><Progress percent={90} showInfo={false} strokeColor="#F2EE8B"/>
                            <span>JavaScript</span><Progress percent={80} showInfo={false} strokeColor="#F2EE8B" />
                            <span>HTML/CSS</span><Progress percent={70} showInfo={false} strokeColor="#F2EE8B" />
                        </section>
                        <section className="github-repo-section">
                            <h3><b>Github repo</b></h3>
                            <h2>20+</h2>
                        </section>
                    </div>
                </Card>
            </Card>
        </div>
    )
}

export default CandidateDetails;