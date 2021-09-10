import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import ReactWhatsapp from 'react-whatsapp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FaWhatsapp } from 'react-icons/fa';
import { StateTypes } from '../../../redux';

const ManageAppliedCandidates: React.FC<any> = (props) => {
    const [selectedData, setSelectedData] = useState({});
    const { appliedCandidates } = props;
    const handleCardClick = () => {
        console.log('s')
    }

    return (
        <div className="applied-jobs">
            <br/>
            <h3>Candidates Applied</h3>
                <ReactWhatsapp number='91-976-903-0229' message="Hello Abhishek, got your profile and found out to be interested">
                    <Button shape="round">
                        <FaWhatsapp className="whatsapp-icon" />
                    </Button>
                </ReactWhatsapp>
            <Row>
                <Col span={8} xs={{ span: 12 }} sm={{ span: 10 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <div className="search-result-widget-container">
                        {JSON.stringify(appliedCandidates)}
                        {/* {appliedCandidates.map((itm: any) => <JobWidget key={itm} {...{...itm, onClick: handleCardClick}}/>)} */}
                        {/* {data.map((itm: JobObjectTypes, index: number) => 
                            <SingleWidget 
                                itm={itm} 
                                index={index} 
                                selectedData={selectedData}
                                setSelectedData={setSelectedData}
                            />
                        )} */}
                    </div>
                </Col>
                <Col span={16} xs={{ span: 12 }} sm={{ span: 14 }} md={{ span: 16 }} lg={{ span: 18 }}>
                    <div className="search-result-selected-widget-container">
                        {/* {selectedData && Object.keys(selectedData).length>0 ? 
                            <CandidateDetails {...{...selectedData}} /> 
                            : 
                            <Empty />
                        } */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    appliedCandidates: state.appliedCandidates
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ManageAppliedCandidates);