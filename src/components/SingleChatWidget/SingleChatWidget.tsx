import { Row, Col, Avatar } from 'antd';
import { FaWhatsapp } from 'react-icons/fa';
import './SingleChatWidget.scss';

export const SingleChatWidget = (props: { itm: any, type?: string }) => {
    const { type, itm } = props;
    const { image, messageTitle, message, jobTitle, jobPostId } = itm;

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
                <Col span={type === 'openThread' ? 4 : 8} className="each-chat-post-desc" style={{ borderBottom: '' }}>
                    <h3>{jobTitle}</h3>
                    <div onClick={() => handlePostVisible(jobPostId)} className="each-chat-post-link">See post</div>
                </Col>
                {type === 'openThread' && <Col span={4} className="each-chat-post-desc">
                    <div style={{ display: 'flex', border: '1px solid #dcdcdc', height: '56px', justifyContent: 'center' }}>
                        <span><FaWhatsapp style={{ height: '30px', width: '30px' }} /></span>
                        <h3>Open Chat</h3>
                    </div>
                </Col>}
            </Row>
        </div>
    )
}