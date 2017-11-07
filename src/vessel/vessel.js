import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import "./vessel.css";

/**
 * A flexbox container. Called `vessel` to avoid name conflicts.
 */
export default class Vessel extends Component {

  constructor(props) {
    super(props);
  }

  renderVesselProperties() {
    let markdown = "";
    markdown += "```\n";
    if (this.props.flexDirection) {
      markdown += `flex-direction: ${this.props.flexDirection};\n`;
    }
    if (this.props.justifyContent) {
      markdown += `justify-content: ${this.props.justifyContent};\n`;
    }
    if (this.props.alignItems) {
      markdown += `align-items: ${this.props.alignItems};\n`;
    }
    if (this.props.maxWidth) {
      markdown += `max-width: ${this.props.maxWidth};\n`;
    }
    markdown += "```\n";
    return <div className="vessel-properties">
      <ReactMarkdown source={markdown} />
    </div>;
  }

  render() {
    const vesselStyle = {
      width: this.props.maxWidth,
    };

    const childrenContainerStyle = {
      flexDirection: this.props.flexDirection,
      justifyContent: this.props.justifyContent,
      alignItems: this.props.alignItems,
    };
    return <div className="vessel" style={vesselStyle}>
      <div className="vessel-title">Vessel</div>
      {this.renderVesselProperties()}
      <div className="vessel-children" style={childrenContainerStyle}>
        {this.props.children}
      </div>
    </div>;
  }

}

Vessel.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  maxWidth: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};
