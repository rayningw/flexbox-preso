import React, { Component } from "react";
import PropTypes from "prop-types";

import "./screen.css";

export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="screen-left">
          {this.props.left}
        </div>
        <div className="screen-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

Screen.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};
