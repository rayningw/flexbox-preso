import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import "./screen.css";

export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="screen-explanation-pane">
          <ReactMarkdown source={this.props.explanation} />
        </div>
        <div className="screen-demo-pane">
          {this.props.demoPane}
        </div>
      </div>
    );
  }
}

Screen.propTypes = {
  explanation: PropTypes.string.isRequired,
  demoPane: PropTypes.element.isRequired,
};
