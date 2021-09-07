import React from 'react';
import { Modal } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import JobPostDetailWidget from '../../../components/JobPostDetailWidget';
import { setActiveJobModalVisible, StateTypes } from '../../../redux';

const RecruiterPostManager: React.FC<any> = (props) => {
    const { activeJob, jobDetailModalVisible, visible, setVisible } = props;

    return (
        <Modal 
            visible={visible} 
            onCancel={() => {
                // setActiveJobModalVisible(false)
                setVisible(false);
            }} 
            footer={null}
            destroyOnClose
            mask
        >
            {Object.keys(activeJob).length>0 && <JobPostDetailWidget {...{...activeJob}} />}
        </Modal>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    activeJob: state.activeJob,
    jobDetailModalVisible: state.jobDetailModalVisible
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setActiveJobModalVisible
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterPostManager);