import React, { Component } from "react";
import PropTypes from "prop-types";

import "./vessel.css";

/**
 * A flexbox container. Called `vessel` to avoid name conflicts.
 */
export default class Vessel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="vessel">
      {this.props.children}
    </div>;
  }

}

Vessel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
