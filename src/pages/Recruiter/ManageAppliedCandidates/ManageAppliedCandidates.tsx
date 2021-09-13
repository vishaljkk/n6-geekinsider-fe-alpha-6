import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Avatar, Empty } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";

import { StateTypes, fetchAppliedCandidates } from '../../../redux';
import { getWhatsAppUrl, iconStyles } from '../../../utils';
import CandidateDetails from '../../Candidate/CandidateProfile/CandidateDetails';
import '../../../components/JobWidget/JobWidget.scss';
import './ManageAppliedCandidates.scss';

const SingleWidget: React.FC<any> = (props) => {
    const { exp, jobTitle, location, name, skills, userId, whatsappNumber, selected } = props;
    return (
        <Card 
            hoverable 
            className={props?.userId === selected?.userId ? 'active-card' : ''}
            onClick={() => props?.onClick(props)}
        >
            <section className="single-widget__each-widget">
                <Avatar size={55}>{name[0]}</Avatar>
                <div className="right-section">
                    <h3 title={name}>{name}</h3>
                    <span>{jobTitle}</span>
                </div>
            </section>
            <section className="single-widget__tag-section">
                {skills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
            </section>
            <section className="single-widget__footer-section">
                <div><MdLocationOn style={iconStyles} />{location}</div>
                {/* <div><MdMonetizationOn style={iconStyles} title={`${ctc} Lacs per annum`}/>{ctc} LPA</div> */}
                <div><MdHistory style={iconStyles} />{exp} year</div>
            </section>
        </Card>
    )
}

const ManageAppliedCandidates: React.FC<any> = (props) => {
    const { appliedCandidates, match, fetchAppliedCandidates, activeJob } = props;
    const { jobTitle, jobLocation, ctc } = activeJob;
    const [selected, setSelected] = useState(appliedCandidates[0]);

    useEffect(() => {
        setSelected(appliedCandidates[0])
    }, [appliedCandidates])

    useEffect(() => {
        fetchAppliedCandidates(match.params.slug);
    }, [])

    const handleClick = (itm: any) => {
        setSelected(itm);
    }

    return (
        <div className="applied-jobs">
            <div className="applied-jobs__heading">
                <div><Avatar size={25}>{jobTitle[0]}</Avatar><span className="applied-jobs__job-title">{jobTitle}</span></div>
                <div><MdLocationOn style={iconStyles} />{jobLocation}</div>
                <div title={`${ctc} lacs per annum`}><MdMonetizationOn style={iconStyles} />{ctc} LPA</div>
            </div>
            {/* <Button type="primary" href={getWhatsAppUrl(whatsappNumber, name)} target="_blank">
                <FaWhatsapp className="whatsapp-icon" />&nbsp;Connect
            </Button> */}
            {appliedCandidates?.length>0 ? 
                <Row>
                    <Col span={8} xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <div className="applied-jobs__left">
                            {appliedCandidates.map((itm: any) => <SingleWidget key={itm} {...{ ...itm, onClick: handleClick, selected: selected }} />)}
                        </div>
                    </Col>
                    <Col span={16} xs={{ span: 12 }} sm={{ span: 14 }} md={{ span: 16 }} lg={{ span: 18 }}>
                        <div className="applied-jobs__right">
                            {selected && Object.keys(selected).length > 0 ?
                                <CandidateDetails {...{ ...selected }} />
                                :
                                <Empty />
                            }
                        </div>
                    </Col>
                </Row> : <Empty description="No applicants"/>
            }
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    appliedCandidates: state.appliedCandidates,
    activeJob: state.activeJob
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchAppliedCandidates
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ManageAppliedCandidates);