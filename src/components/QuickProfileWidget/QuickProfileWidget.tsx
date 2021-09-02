import { Card, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import './QuickProfileWidget.scss';

const QuickProfileWidget = (props: any) => {
    const history = useHistory();
    const { title, subtitle } = props;
    return (
        <div className="quick-profile">
            <Card
                hoverable
                onClick={() => history.push('/profile')}
            >
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <Avatar size={55}>A</Avatar>
                </div>
                <div className="quick-profile-content">
                    <h3>
                        <strong title={title}>
                            {title}
                        </strong>
                    </h3>
                    <p>{subtitle}</p>
                    <a>Update profile</a>
                </div>
            </Card>
        </div>
    )
}

export default QuickProfileWidget;