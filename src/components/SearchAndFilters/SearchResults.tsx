import React from 'react';
import { Tooltip, Row, Card, Col, Avatar, Button } from 'antd';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { iconStyles } from '../../utils';
import './SearchResult.scss';
import { useState } from 'react';

const demoData = [
    {
        jobPostId: 'id1',
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 233,
        description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more. You will collaborate with marketing, sales, finance, and support teams to ensure that word gets out to people and they get to see what you are building. Responsibilities Take end-to-end responsibility of the frontend for our products’ development. Work with Engineering Team to design beautiful and optimized products and thoughtful interactions that make the experience of our customers as easy as possible. Working with other team members to achieve organization-wide engineering goals and contribute to building a great engineering culture. What you’ll bring to the team: Your experience of building a dashboard-based product from scratch or being in the initial frontend team of a SaaS, Analytics, Platform, or related project. Your expertise in JavaScript, React JS, jQuery, and other Frontend frameworks and have the desire to learn new technologies. Your knack to go one step further to understand the requirements and delight the user (Brand managers, CMOs, Marketing Folks of top Brands, in our case). Your experience of building and working with APIs. Experience in working with APIs of Social Media Providers like Facebook, Instagram, YouTube, etc. Preferred Candidates: You are an expert in JS and Building Frontend. Understanding and Experience of React, jQuery, Vanilla JS, etc. Passionate about test driven, clean code, automatically tested and continuous deployment Enjoys a fast-paced, high-intensity environment Excellent analytical and problem-solving skills Demonstrated ability to be a self-starter and learn quickly Strong interpersonal skills with ability to present and convey ideas Strong attention to detail; action-oriented attitude, and willingness to roll up sleeves Curious to explore emerging technologies and learn new things Are well-versed in product/project management tools, such as JIRA, Trello, and Google Docs Knowledge of how top social networks including Instagram, YouTube, TikTok, etc operate We’d love it if you: Understand the Indian and global Advertising sector, especially Social Media and Influencer Marketing Are passionate about building brilliant products to drive customer and company success Have some enterprise-facing product experience under your belt Know how to use data in powerful ways to better understand your customer base Have an eye for intuitive and minimalist design Thrive on proving that speed and quality can go hand in hand Are a team player who believes that that the whole is greater than the sum of its parts; you rely on others' candid feedback for continuous improvement. Perks and benefits of being part of the One Impression Crew: A hugely eventful market to chase with deep understanding of how social networks operate Access to brand launch events A learning environment that encourages experimenting in different areas and skills Company support in pursuing educational programs Company-sponsored tech talks and social event Bold and modern work guidelines An open and highly productive work environment" 
    },
    {
        jobPostId: 'id2',
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 2,
        description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more. You will collaborate with marketing, sales, finance, and support teams to ensure that word gets out to people and they get to see what you are building. Responsibilities Take end-to-end responsibility of the frontend for our products’ development. Work with Engineering Team to design beautiful and optimized products and thoughtful interactions that make the experience of our customers as easy as possible. Working with other team members to achieve organization-wide engineering goals and contribute to building a great engineering culture. What you’ll bring to the team: Your experience of building a dashboard-based product from scratch or being in the initial frontend team of a SaaS, Analytics, Platform, or related project. Your expertise in JavaScript, React JS, jQuery, and other Frontend frameworks and have the desire to learn new technologies. Your knack to go one step further to understand the requirements and delight the user (Brand managers, CMOs, Marketing Folks of top Brands, in our case). Your experience of building and working with APIs. Experience in working with APIs of Social Media Providers like Facebook, Instagram, YouTube, etc. Preferred Candidates: You are an expert in JS and Building Frontend. Understanding and Experience of React, jQuery, Vanilla JS, etc. Passionate about test driven, clean code, automatically tested and continuous deployment Enjoys a fast-paced, high-intensity environment Excellent analytical and problem-solving skills Demonstrated ability to be a self-starter and learn quickly Strong interpersonal skills with ability to present and convey ideas Strong attention to detail; action-oriented attitude, and willingness to roll up sleeves Curious to explore emerging technologies and learn new things Are well-versed in product/project management tools, such as JIRA, Trello, and Google Docs Knowledge of how top social networks including Instagram, YouTube, TikTok, etc operate We’d love it if you: Understand the Indian and global Advertising sector, especially Social Media and Influencer Marketing Are passionate about building brilliant products to drive customer and company success Have some enterprise-facing product experience under your belt Know how to use data in powerful ways to better understand your customer base Have an eye for intuitive and minimalist design Thrive on proving that speed and quality can go hand in hand Are a team player who believes that that the whole is greater than the sum of its parts; you rely on others' candid feedback for continuous improvement. Perks and benefits of being part of the One Impression Crew: A hugely eventful market to chase with deep understanding of how social networks operate Access to brand launch events A learning environment that encourages experimenting in different areas and skills Company support in pursuing educational programs Company-sponsored tech talks and social event Bold and modern work guidelines An open and highly productive work environment" 
    },
    {
        jobPostId: 'id3',
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 10,
        companyId: 'some id',
        description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more. You will collaborate with marketing, sales, finance, and support teams to ensure that word gets out to people and they get to see what you are building. Responsibilities Take end-to-end responsibility of the frontend for our products’ development. Work with Engineering Team to design beautiful and optimized products and thoughtful interactions that make the experience of our customers as easy as possible. Working with other team members to achieve organization-wide engineering goals and contribute to building a great engineering culture. What you’ll bring to the team: Your experience of building a dashboard-based product from scratch or being in the initial frontend team of a SaaS, Analytics, Platform, or related project. Your expertise in JavaScript, React JS, jQuery, and other Frontend frameworks and have the desire to learn new technologies. Your knack to go one step further to understand the requirements and delight the user (Brand managers, CMOs, Marketing Folks of top Brands, in our case). Your experience of building and working with APIs. Experience in working with APIs of Social Media Providers like Facebook, Instagram, YouTube, etc. Preferred Candidates: You are an expert in JS and Building Frontend. Understanding and Experience of React, jQuery, Vanilla JS, etc. Passionate about test driven, clean code, automatically tested and continuous deployment Enjoys a fast-paced, high-intensity environment Excellent analytical and problem-solving skills Demonstrated ability to be a self-starter and learn quickly Strong interpersonal skills with ability to present and convey ideas Strong attention to detail; action-oriented attitude, and willingness to roll up sleeves Curious to explore emerging technologies and learn new things Are well-versed in product/project management tools, such as JIRA, Trello, and Google Docs Knowledge of how top social networks including Instagram, YouTube, TikTok, etc operate We’d love it if you: Understand the Indian and global Advertising sector, especially Social Media and Influencer Marketing Are passionate about building brilliant products to drive customer and company success Have some enterprise-facing product experience under your belt Know how to use data in powerful ways to better understand your customer base Have an eye for intuitive and minimalist design Thrive on proving that speed and quality can go hand in hand Are a team player who believes that that the whole is greater than the sum of its parts; you rely on others' candid feedback for continuous improvement. Perks and benefits of being part of the One Impression Crew: A hugely eventful market to chase with deep understanding of how social networks operate Access to brand launch events A learning environment that encourages experimenting in different areas and skills Company support in pursuing educational programs Company-sponsored tech talks and social event Bold and modern work guidelines An open and highly productive work environment" 
    },
    {
        jobPostId: 'id4',
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 10,
        companyId: 'some id',
        description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more. You will collaborate with marketing, sales, finance, and support teams to ensure that word gets out to people and they get to see what you are building. Responsibilities Take end-to-end responsibility of the frontend for our products’ development. Work with Engineering Team to design beautiful and optimized products and thoughtful interactions that make the experience of our customers as easy as possible. Working with other team members to achieve organization-wide engineering goals and contribute to building a great engineering culture. What you’ll bring to the team: Your experience of building a dashboard-based product from scratch or being in the initial frontend team of a SaaS, Analytics, Platform, or related project. Your expertise in JavaScript, React JS, jQuery, and other Frontend frameworks and have the desire to learn new technologies. Your knack to go one step further to understand the requirements and delight the user (Brand managers, CMOs, Marketing Folks of top Brands, in our case). Your experience of building and working with APIs. Experience in working with APIs of Social Media Providers like Facebook, Instagram, YouTube, etc. Preferred Candidates: You are an expert in JS and Building Frontend. Understanding and Experience of React, jQuery, Vanilla JS, etc. Passionate about test driven, clean code, automatically tested and continuous deployment Enjoys a fast-paced, high-intensity environment Excellent analytical and problem-solving skills Demonstrated ability to be a self-starter and learn quickly Strong interpersonal skills with ability to present and convey ideas Strong attention to detail; action-oriented attitude, and willingness to roll up sleeves Curious to explore emerging technologies and learn new things Are well-versed in product/project management tools, such as JIRA, Trello, and Google Docs Knowledge of how top social networks including Instagram, YouTube, TikTok, etc operate We’d love it if you: Understand the Indian and global Advertising sector, especially Social Media and Influencer Marketing Are passionate about building brilliant products to drive customer and company success Have some enterprise-facing product experience under your belt Know how to use data in powerful ways to better understand your customer base Have an eye for intuitive and minimalist design Thrive on proving that speed and quality can go hand in hand Are a team player who believes that that the whole is greater than the sum of its parts; you rely on others' candid feedback for continuous improvement. Perks and benefits of being part of the One Impression Crew: A hugely eventful market to chase with deep understanding of how social networks operate Access to brand launch events A learning environment that encourages experimenting in different areas and skills Company support in pursuing educational programs Company-sponsored tech talks and social event Bold and modern work guidelines An open and highly productive work environment" 
    },
    {
        jobPostId: 'id5',
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
        company: 'Flipkart',
        jobTitle: 'Full stack developer',
        skills: ['React', 'JavaScript'],
        location: 'some location',
        ctc: '12L - 15L/yr',
        experience: '3-5 years',
        numberOfApplications: 10,
        companyId: 'some id',
        description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more. You will collaborate with marketing, sales, finance, and support teams to ensure that word gets out to people and they get to see what you are building. Responsibilities Take end-to-end responsibility of the frontend for our products’ development. Work with Engineering Team to design beautiful and optimized products and thoughtful interactions that make the experience of our customers as easy as possible. Working with other team members to achieve organization-wide engineering goals and contribute to building a great engineering culture. What you’ll bring to the team: Your experience of building a dashboard-based product from scratch or being in the initial frontend team of a SaaS, Analytics, Platform, or related project. Your expertise in JavaScript, React JS, jQuery, and other Frontend frameworks and have the desire to learn new technologies. Your knack to go one step further to understand the requirements and delight the user (Brand managers, CMOs, Marketing Folks of top Brands, in our case). Your experience of building and working with APIs. Experience in working with APIs of Social Media Providers like Facebook, Instagram, YouTube, etc. Preferred Candidates: You are an expert in JS and Building Frontend. Understanding and Experience of React, jQuery, Vanilla JS, etc. Passionate about test driven, clean code, automatically tested and continuous deployment Enjoys a fast-paced, high-intensity environment Excellent analytical and problem-solving skills Demonstrated ability to be a self-starter and learn quickly Strong interpersonal skills with ability to present and convey ideas Strong attention to detail; action-oriented attitude, and willingness to roll up sleeves Curious to explore emerging technologies and learn new things Are well-versed in product/project management tools, such as JIRA, Trello, and Google Docs Knowledge of how top social networks including Instagram, YouTube, TikTok, etc operate We’d love it if you: Understand the Indian and global Advertising sector, especially Social Media and Influencer Marketing Are passionate about building brilliant products to drive customer and company success Have some enterprise-facing product experience under your belt Know how to use data in powerful ways to better understand your customer base Have an eye for intuitive and minimalist design Thrive on proving that speed and quality can go hand in hand Are a team player who believes that that the whole is greater than the sum of its parts; you rely on others' candid feedback for continuous improvement. Perks and benefits of being part of the One Impression Crew: A hugely eventful market to chase with deep understanding of how social networks operate Access to brand launch events A learning environment that encourages experimenting in different areas and skills Company support in pursuing educational programs Company-sponsored tech talks and social event Bold and modern work guidelines An open and highly productive work environment" 
    }
]

// const selectedJobDescription = {
//     image: 'https://media-exp1.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1627543110554?e=1637798400&v=beta&t=PwAcQBk0CKYnt8DW1ftjJVqkHWlct1UCyvb7AtTUYCU',
//     company: 'Flipkart',
//     jobTitle: 'Full stack developer',
//     skills: ['React', 'JavaScript'],
//     location: 'some location',
//     ctc: '12L - 15L/yr',
//     experience: '3-5 years',
//     numberOfApplications: 10,
//     companyId: 'some id',
//     description: "As a Frontend Developer with a passion for building great products, you'll be a part of the team that works on building our ads platform. Our current customers include top public listed companies across FMCG, Healthcare, Food, Technology, BFSI & more. You will collaborate with marketing, sales, finance, and support teams to ensure that word gets out to people and they get to see what you are building. Responsibilities Take end-to-end responsibility of the frontend for our products’ development. Work with Engineering Team to design beautiful and optimized products and thoughtful interactions that make the experience of our customers as easy as possible. Working with other team members to achieve organization-wide engineering goals and contribute to building a great engineering culture. What you’ll bring to the team: Your experience of building a dashboard-based product from scratch or being in the initial frontend team of a SaaS, Analytics, Platform, or related project. Your expertise in JavaScript, React JS, jQuery, and other Frontend frameworks and have the desire to learn new technologies. Your knack to go one step further to understand the requirements and delight the user (Brand managers, CMOs, Marketing Folks of top Brands, in our case). Your experience of building and working with APIs. Experience in working with APIs of Social Media Providers like Facebook, Instagram, YouTube, etc. Preferred Candidates: You are an expert in JS and Building Frontend. Understanding and Experience of React, jQuery, Vanilla JS, etc. Passionate about test driven, clean code, automatically tested and continuous deployment Enjoys a fast-paced, high-intensity environment Excellent analytical and problem-solving skills Demonstrated ability to be a self-starter and learn quickly Strong interpersonal skills with ability to present and convey ideas Strong attention to detail; action-oriented attitude, and willingness to roll up sleeves Curious to explore emerging technologies and learn new things Are well-versed in product/project management tools, such as JIRA, Trello, and Google Docs Knowledge of how top social networks including Instagram, YouTube, TikTok, etc operate We’d love it if you: Understand the Indian and global Advertising sector, especially Social Media and Influencer Marketing Are passionate about building brilliant products to drive customer and company success Have some enterprise-facing product experience under your belt Know how to use data in powerful ways to better understand your customer base Have an eye for intuitive and minimalist design Thrive on proving that speed and quality can go hand in hand Are a team player who believes that that the whole is greater than the sum of its parts; you rely on others' candid feedback for continuous improvement. Perks and benefits of being part of the One Impression Crew: A hugely eventful market to chase with deep understanding of how social networks operate Access to brand launch events A learning environment that encourages experimenting in different areas and skills Company support in pursuing educational programs Company-sponsored tech talks and social event Bold and modern work guidelines An open and highly productive work environment" 
// }

const SingleWidget = (props: any) => {
    const { index, itm, setSelectedData, selectedData } = props;
    const { image, company, jobTitle, skills, location, ctc, experience, numberOfApplications, description, jobPostId } = itm;
    const handlePostVisible = (postId: string) => {
        console.log(postId);
    }
    return (
        <Card 
            hoverable 
            onClick={() => setSelectedData(itm)} 
            style={{ backgroundColor: jobPostId === selectedData.jobPostId ? '#dcdcdc' : 'white' }}
        >
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

const DescriptionWidget = (props: any) => {
    const { image, company, jobTitle, skills, location, ctc, experience, numberOfApplications, description, jobPostId } = props.itm;
    return (
        <Card>
            <section className="each-widget">
                <Avatar size={75} src={image} />
                <div className="right-section">
                    <span>{company}</span>
                    <h3>{jobTitle}</h3>
                    <a>{numberOfApplications} applicants</a>
                </div>
                <div className="action-buttons">
                    <Button type="primary">Apply</Button>
                    <Button type="primary">Company details</Button>
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
        </Card>
    )
}

const SearchAndFilters: React.FC = () => {
    const [data, setData] = useState(demoData);
    const [selectedData, setSelectedData] = useState(demoData[0]);
    return (
        <Row>
            <Col span={6} offset={1}>
                <div className="search-result-widget-container">
                    {data.map((itm, index) => 
                        <SingleWidget 
                            itm={itm} 
                            index={index} 
                            selectedData={selectedData}
                            setSelectedData={setSelectedData}
                        />
                    )}
                </div>
            </Col>
            <Col span={16}>
                <div className="search-result-selected-widget-container">
                    <DescriptionWidget itm={selectedData} />
                </div>
            </Col>
        </Row>
    )
}

export default SearchAndFilters;