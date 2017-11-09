import React, { Component } from "react";
import PropTypes from "prop-types";

import "./whatsapp.css";

/**
 * Rough implementation of the WhatsApp interface.
 */
export default class WhatsApp extends Component {

  constructor(props) {
    super(props);

    this.itemsToRenderAtStage = [
      [],
      [ "container" ],
      [ "container", "header", "body", "footer", "header-placeholder", "body-placeholder", "footer-placeholder" ],
      [ "container", "header", "body", "footer", "header-contents", "body-placeholder", "footer-placeholder" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-1", "footer-placeholder" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-1", "chat-row-2", "footer-placeholder" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-all", "footer-placeholder" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-all", "footer-contents" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-all", "footer-contents", "footer-button-1" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-all", "footer-contents", "footer-button-1", "footer-button-2" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-all", "footer-contents", "footer-button-1", "footer-button-2", "footer-button-3" ],
      [ "container", "header", "body", "footer", "header-contents", "body-contents", "chat-row-all", "footer-contents", "footer-button-all" ],
    ];
  }

  shouldRender(item) {
    const itemsToRender = this.itemsToRenderAtStage[this.props.stage];
    return itemsToRender.indexOf(item) != -1;
  }

  render() {
    return <div className="whatsapp-screen">
      { this.shouldRender("container") &&
      <div className="whatsapp-container">
        { this.shouldRender("header") && 
        <div className="whatsapp-header">
          { this.shouldRender("header-placeholder") &&
          <div>Header</div>
          }
          { this.shouldRender("header-contents") &&
          <div className="whatsapp-header-edit-text">Edit</div>
          }
          { this.shouldRender("header-contents") &&
          <div className="whatsapp-header-title">Chats</div>
          }
          { this.shouldRender("header-contents") &&
          <div className="whatsapp-header-edit-icon"></div>
          }
        </div>
        }
        { this.shouldRender("body") &&
        <div className="whatsapp-body">
          { this.shouldRender("body-placeholder") &&
          <div>Body</div>
          }
          { this.shouldRender("body-contents") &&
          <div>
            { (this.shouldRender("chat-row-1") || this.shouldRender("chat-row-all")) &&
            <WhatsAppChatRow title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />
            }
            { (this.shouldRender("chat-row-2") || this.shouldRender("chat-row-all")) &&
            <WhatsAppChatRow title="Phuz" lastMessage="Cold brew is the best" lastMessageTime="11:30 AM" />
            }
            { this.shouldRender("chat-row-all") &&
            <div>
              <WhatsAppChatRow title="8 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="11:00 AM" />
              <WhatsAppChatRow title="9 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Yesterday" />
              <WhatsAppChatRow title="10 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Friday" />
              <WhatsAppChatRow title="11 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Thursday" />
              <WhatsAppChatRow title="12 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Wednesday" />
              <WhatsAppChatRow title="13 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Wednesday" />
              <WhatsAppChatRow title="14 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Tuesday" />
              <WhatsAppChatRow title="15 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Monday" />
            </div>
            }
          </div>
          }
        </div>
        }
        { this.shouldRender("footer") &&
        <div className="whatsapp-footer">
          { this.shouldRender("footer-placeholder") &&
          <div>Footer</div>
          }
          { this.shouldRender("footer-contents") &&
          <div className="whatsapp-footer-buttons">
            { (this.shouldRender("footer-button-1") || this.shouldRender("footer-button-all")) &&
            <WhatsAppFooterButton label="Status" />
            }
            { (this.shouldRender("footer-button-2") || this.shouldRender("footer-button-all")) &&
            <WhatsAppFooterButton label="Calls" />
            }
            { (this.shouldRender("footer-button-3") || this.shouldRender("footer-button-all")) &&
            <WhatsAppFooterButton label="Camera" />
            }
            { (this.shouldRender("footer-button-4") || this.shouldRender("footer-button-all")) &&
            <WhatsAppFooterButton label="Chats" />
            }
            { (this.shouldRender("footer-button-5") || this.shouldRender("footer-button-all")) &&
            <WhatsAppFooterButton label="Settings" />
            }
          </div>
          }
        </div>
        }
      </div>
      }
    </div>;
  }

}

WhatsApp.propTypes = {
  stage: PropTypes.number.isRequired,
};

class WhatsAppChatRow extends Component {

  renderLastMessageUser() {
    return <div className="whatsapp-chat-row-summary-last-message-user">
      {this.props.lastMessageUser}
    </div>;
  }

  render() {
    return <div>
      <div className="whatsapp-chat-row-divider" />
      <div className="whatsapp-chat-row">
        <div className="whatsapp-chat-row-icon" />
        <div className="whatsapp-chat-row-summary">
          <div className="whatsapp-chat-row-summary-title">
            {this.props.title}
          </div>
          { this.props.lastMessageUser && this.renderLastMessageUser() }
          <div className="whatsapp-chat-row-summary-last-message">
            {this.props.lastMessage}
          </div>
        </div>
        <div className="whatsapp-chat-row-time-cell">
          {this.props.lastMessageTime}
        </div>
        <div className="whatsapp-chat-row-next-arrow">
          ›
        </div>
      </div>
    </div>;
  }

}

WhatsAppChatRow.propTypes = {
  title: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageUser: PropTypes.string,
  lastMessageTime: PropTypes.string.isRequired,
};

class WhatsAppFooterButton extends Component {

  render() {
    return <div className="whatsapp-footer-button">
      <div className="whatsapp-footer-button-icon"></div>
      <div className="whatsapp-footer-button-label">{this.props.label}</div>
    </div>;
  }

}

WhatsAppFooterButton.propTypes = {
  label: PropTypes.string.isRequired,
};