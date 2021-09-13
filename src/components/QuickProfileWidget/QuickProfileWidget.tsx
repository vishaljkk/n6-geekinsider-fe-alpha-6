import { Card, Avatar } from 'antd';
import { QuickProfilePropTypes } from './types';
import './QuickProfileWidget.scss';

const QuickProfileWidget: React.FC<QuickProfilePropTypes> = (props) => {
    const { title, subtitle, onClick } = props;
    return (
        <div className="quick-profile" onClick={onClick}>
            <Card hoverable>
                <div className="quick-profile__avatar">
                    <Avatar size={55}>{title ? title[0] : ''}</Avatar>
                </div>
                <div className="quick-profile__content">
                    <h3><strong title={title}>{title}</strong></h3>
                    <p>{subtitle}</p>
                </div>
            </Card>
        </div>
    )
}

export default QuickProfileWidget;