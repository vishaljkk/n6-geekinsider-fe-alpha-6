import React, { useEffect, useState } from 'react';
import { Row, Card, Col, Avatar, Empty } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdLocationOn, MdMonetizationOn, MdHistory } from 'react-icons/md';

import JobPostDetailWidget from '../../components/JobPostDetailWidget';
import { JobObjectTypes, StateTypes } from '../../redux';
import { iconStyles } from '../../utils';
import { SearchResultsTypes } from '.';
import './SearchResult.scss';

const SingleWidget: React.FC<any> = (props) => {
  const { itm, setSelectedData, selectedData } = props;
  const {
    jobTitle,
    skills,
    jobLocation,
    ctc,
    exp,
    numberOfApplications,
    jobDescription,
    companyName,
    jobslug
  } = itm;

  return (
    <Card
      hoverable
      onClick={() => setSelectedData(itm)}
      className={itm?.jobslug === selectedData?.jobslug ? 'active-card' : ''}
    >
      <section className="each-widget">
        <Avatar size={55}>{companyName[0]}</Avatar>
        <div className="right-section">
          <span>{companyName}</span>
          <h3 title={jobTitle}>{jobTitle}</h3>
        </div>
      </section>
      <section className="tags-section">
        {skills.map((itm: string) => (
          <span key={itm} className="tags">
            {itm}
          </span>
        ))}
      </section>
      <section className="footer-section">
        <div>
          <MdLocationOn style={iconStyles} />
          {jobLocation}
        </div>
        <div title={`${ctc} lacs per annum`}>
          <MdMonetizationOn style={iconStyles} />
          {ctc} LPA
        </div>
        <div>
          <MdHistory style={iconStyles} />
          {exp} year
        </div>
        {/* <Tooltip title={`${numberOfApplications} already applied`} placement="topRight"><span className="numbers-applied">{numberOfApplications}+</span></Tooltip> */}
      </section>
    </Card>
  );
};

const SearchResults: React.FC<SearchResultsTypes> = (props) => {
  const { data } = props;
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    setSelectedData(data[0]);
  }, [data]);

  return (
    <div className="search__results">
      {data.length ? (
        <Row>
          <Col
            span={8}
            xs={{ span: 12 }}
            sm={{ span: 10 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <div className="search-result-widget-container">
              {data.map((itm: JobObjectTypes, index: number) => (
                <SingleWidget
                  key={JSON.stringify(data)}
                  itm={itm}
                  index={index}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                />
              ))}
            </div>
          </Col>
          <Col
            span={16}
            xs={{ span: 12 }}
            sm={{ span: 14 }}
            md={{ span: 16 }}
            lg={{ span: 18 }}
          >
            {selectedData && Object.keys(selectedData).length > 0 ? (
              <JobPostDetailWidget {...{ ...selectedData }} />
            ) : (
              <Empty />
            )}
          </Col>
        </Row>
      ) : (
        <div className="search__results__empty">
          <br />
          <Empty />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
