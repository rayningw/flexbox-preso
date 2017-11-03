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
    const style = {
      flexDirection: this.props.flexDirection,
      justifyContent: this.props.justifyContent,
    };
    return <div className="vessel" style={style}>
      {this.props.children}
    </div>;
  }

}

Vessel.propTypes = {
  flexDirection: PropTypes.oneOf([ "row", "column" ]).isRequired,
  justifyContent: PropTypes.oneOf([ "flex-start", "flex-end", "center", "space-around", "space-between" ]).isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};
