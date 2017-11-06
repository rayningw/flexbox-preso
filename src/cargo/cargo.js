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
    markdown += "```\n";
    if (this.props.flexBasis) {
      markdown += `\nflex-basis:\n${this.props.flexBasis};\n`;
    }
    if (this.props.flexGrow) {
      markdown += `\nflex-grow:\n${this.props.flexGrow};\n`;
    }
    markdown += "```\n";
    return <div className="cargo-properties">
      <ReactMarkdown source={markdown} />
    </div>;
  }

  render() {
    const style = {
      flexBasis: this.props.flexBasis,
      flexGrow: this.props.flexGrow,
    };

    return <div className="cargo" style={style}>
      Cargo
      {this.renderProperties()}
    </div>;
  }

}

Cargo.propTypes = {
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.string,
};
