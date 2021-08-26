import { Card, Avatar } from 'antd';

const QuickProfileWidget = () => {
    return (
        <div className="quick-profile">
            <Card
                hoverable
                // cover={
                //     <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                // }
                // style={{
                //     width: '50%'
                // }}
            >
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <Avatar size={55}>C</Avatar>
                </div>
                <div className="quick-profile-content">
                    <h3>
                        <strong 
                            title="Coder Jackson and something more import" 
                            style={{
                                // whiteSpace: 'nowrap',
                                // width: '50px',
                                // overflow: 'hidden',
                                // textOverflow: 'ellipsis',
                            }}
                        >
                            Coder Jackson and something more import
                        </strong>
                    </h3>
                    <p>Full Stack Developer</p>
                    <a>Update profile</a>
                </div>
            </Card>
        </div>
    )
}

export default QuickProfileWidget;