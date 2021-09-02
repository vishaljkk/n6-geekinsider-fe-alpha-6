import React from 'react';
import { Spin } from 'antd';
import { LoaderPropTypes } from './types';
import { LoadingOutlined } from '@ant-design/icons';

const Loader: React.FC<LoaderPropTypes> = (props) => {
    const { fontSize } = props;
    return (
        <div className='loader--generic'>
            <Spin indicator={<LoadingOutlined style={{ fontSize: fontSize || 24 }} spin />} />
        </div>
    );
}

export default Loader;