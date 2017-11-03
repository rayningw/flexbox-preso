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
    markdown += `flex-direction: ${this.props.flexDirection};\n`;
    markdown += `justify-content: ${this.props.justifyContent};\n`;
    markdown += "```\n";
    return <div className="vessel-properties">
      <ReactMarkdown source={markdown} />
    </div>;
  }

  render() {
    const vesselStyle = {
    };

    const childrenContainerStyle = {
      flexDirection: this.props.flexDirection,
      justifyContent: this.props.justifyContent,
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
  flexDirection: PropTypes.oneOf([ "row", "column" ]).isRequired,
  justifyContent: PropTypes.oneOf([ "flex-start", "flex-end", "center", "space-around", "space-between" ]).isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};
