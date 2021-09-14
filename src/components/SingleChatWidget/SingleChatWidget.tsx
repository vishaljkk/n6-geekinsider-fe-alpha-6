import { Row, Col, Avatar } from 'antd';
import { FaWhatsapp } from 'react-icons/fa';
import { SingleChatWidgetPropTypes } from './types';
import './SingleChatWidget.scss';

export const SingleChatWidget: React.FC<SingleChatWidgetPropTypes> = (
  props
) => {
  const { type, itm } = props;
  const { image, messageTitle, message, jobTitle, jobPostId } = itm;

  const handlePostVisible = (postId: string) => {};

  return (
    <div className="each-chat">
      <Row>
        <Col span={3} className="each-chat-image">
          <Avatar size={55} src={image} />
        </Col>
        <Col span={type === 'closed' ? 20 : 12}>
          <h3>
            <strong>{messageTitle}</strong>
          </h3>
          <p className="message-glimpse">{message}</p>
        </Col>
        {type !== 'closed' && (
          <Col
            span={type === 'openThread' ? 4 : 8}
            offset={1}
            className="each-chat-post-desc"
          >
            <h3>{jobTitle}</h3>
            <div
              onClick={() => handlePostVisible(jobPostId)}
              className="each-chat-post-link"
            >
              See post
            </div>
          </Col>
        )}
        {type === 'openThread' && (
          <Col span={4} className="each-chat-post-desc">
            <div className="each-chat-post-whatsapp">
              <span>
                <FaWhatsapp className="whatsapp-icon" />
              </span>
              <h3>Open Chat</h3>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};
