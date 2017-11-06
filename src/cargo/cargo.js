import React, { Component } from "react";
import PropTypes from "prop-types";

import "./cargo.css";

/**
 * An item intended to be placed in a flexbox container.
 * Called `cargo` to avoid name conflicts.
 */
export default class Cargo extends Component {

  render() {
    const style = {
      flexBasis: this.props.flexBasis,
    };

    return <div className="cargo" style={style}>
      Cargo
    </div>;
  }

}

Cargo.propTypes = {
  flexBasis: PropTypes.string.isRequired,
};
