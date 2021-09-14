import React from 'react';
import { Card } from 'antd';
import { AboutPropTypes } from '.';

const About: React.FC<AboutPropTypes> = ({ children, title }) => {
    return (
        <>
            <h3><b>{title}</b></h3>
            {children?.split('\n').map((itm: string) => <span key={itm}>{itm}<br/></span>)}
        </>
    )
}

export default About;