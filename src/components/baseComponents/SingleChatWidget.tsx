import { Row, Col, Avatar } from 'antd';
import './SingleChatWidget.scss';

export const SingleChatWidget = (props: any) => {
    const { image, messageTitle, message, jobTitle, jobPostId } = props.itm;
    const handlePostVisible = (postId: string) => {
        console.log(postId);
    }
    return (
        <div className="each-chat">
            <Row>
                <Col span={3} className="each-chat-image">
                    <Avatar size={55} src={image} />
                    {/* <img src={image} alt="" height="55px" /> */}
                </Col>
                <Col span={13}>
                    <h3><strong>{messageTitle}</strong></h3>
                    <p className="message-glimpse">{message}</p>
                </Col>
                <Col span={8} className="each-chat-post-desc">
                    <h3>{jobTitle}</h3>
                    <p onClick={() => handlePostVisible(jobPostId)} className="each-chat-post-link">See post</p>
                </Col>
            </Row>
        </div>
    )
}