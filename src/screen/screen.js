import React, { Component } from "react";
import "./screen.css";

export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="screen-left">
          This is the left
        </div>
        <div className="screen-right">
          This is the right
        </div>
      </div>
    );
  }
}
