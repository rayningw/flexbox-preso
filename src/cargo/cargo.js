import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import "./cargo.css";

/**
 * An item intended to be placed in a flexbox container.
 * Called `cargo` to avoid name conflicts.
 */
export default class Cargo extends Component {

  renderProperties() {
    let markdown = "";
    if (this.props.flexBasis) {
      markdown += `flex-basis:\n${this.props.flexBasis};\n`;
    }
    if (this.props.flexGrow) {
      markdown += `flex-grow:\n${this.props.flexGrow};\n`;
    }
    if (this.props.flexShrink) {
      markdown += `flex-shrink:\n${this.props.flexShrink};\n`;
    }

    if (markdown == "") {
      return null;
    }
    markdown = "```\n" + markdown + "```\n";
    return <div className="cargo-properties">
      <ReactMarkdown source={markdown} />
    </div>;
  }

  render() {
    const style = {
      flexBasis: this.props.flexBasis,
      flexGrow: this.props.flexGrow,
      flexShrink: this.props.flexShrink,
    };

    return <div className="cargo" style={style}>
      <div className="cargo-title">Cargo</div>
      {this.renderProperties()}
      {this.props.children}
    </div>;
  }

}

Cargo.propTypes = {
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  children: PropTypes.element,
};
