import React from 'react';
import { Card } from 'antd';
import { AboutPropTypes } from '.';

const About: React.FC<AboutPropTypes> = ({ children }) => {
    return (
        <Card>
            {children?.split('\n').map((itm: string) => <span>{itm}<br/></span>)}
        </Card>
    )
}

export default About;