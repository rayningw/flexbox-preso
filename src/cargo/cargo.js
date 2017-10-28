import React, { Component } from "react";
import PropTypes from "prop-types";

import "./cargo.css";

/**
 * An item intended to be placed in a flexbox container.
 * Called `cargo` to avoid name conflicts.
 */
export default class Cargo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="cargo">
      Cargo
    </div>;
  }

}

Cargo.propTypes = {
};
