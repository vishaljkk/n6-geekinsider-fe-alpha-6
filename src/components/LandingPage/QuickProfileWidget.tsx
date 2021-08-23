import { Card } from 'antd';

const QuickProfileWidget = () => {
    return (
        <div className="quick-profile">
            <Card
                hoverable
                cover={
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                }
                style={{
                    width: '100%'
                }}
            >
                <div className="quick-profile-content">
                    <h3><strong>Coder Jackson</strong></h3>
                    <p>Full Stack Developer</p>
                    <a>Update profile</a>
                </div>
            </Card>
        </div>
    )
}

export default QuickProfileWidget;