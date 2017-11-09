import React, { Component } from "react";
import PropTypes from "prop-types";

import "./whatsapp.css";

/**
 * Rough implementation of the WhatsApp interface.
 */
export default class WhatsApp extends Component {

  render() {
    return <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <div className="whatsapp-header">
          <div className="whatsapp-header-edit-text">Edit</div>
          <div className="whatsapp-header-title">Chats</div>
          <div className="whatsapp-header-edit-icon"></div>
        </div>
        <div className="whatsapp-body">
          <WhatsAppChatRow title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />
          <WhatsAppChatRow title="Phuz" lastMessage="Cold brew is the best" lastMessageTime="11:30 AM" />
          <WhatsAppChatRow title="8 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="11:00 AM" />
          <WhatsAppChatRow title="9 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Yesterday" />
          <WhatsAppChatRow title="10 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Friday" />
          <WhatsAppChatRow title="11 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Thursday" />
          <WhatsAppChatRow title="12 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Wednesday" />
          <WhatsAppChatRow title="13 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Wednesday" />
          <WhatsAppChatRow title="14 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Tuesday" />
          <WhatsAppChatRow title="15 Hudson" lastMessage="Someone's at the door" lastMessageUser="Doorbot" lastMessageTime="Monday" />
        </div>
        <div className="whatsapp-footer">
          <WhatsAppFooterButton label="Status" />
          <WhatsAppFooterButton label="Calls" />
          <WhatsAppFooterButton label="Camera" />
          <WhatsAppFooterButton label="Chats" />
          <WhatsAppFooterButton label="Settings" />
        </div>
      </div>
    </div>;
  }

}

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