import React, { Component } from "react";

import Cargo from "../cargo";
import Screen from "../screen";
import Vessel from "../vessel";

import "./app.css";

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      /** Linear sequence of screens */
      screens: [
        {
          title: "Screen One",
          left: "This is the left text",
          right: <Vessel>
            <Cargo />
            <Cargo />
          </Vessel>,
        },
        {
          title: "Screen Two",
          left: "This is the left text 2",
          right: <Vessel>
            <Cargo />
            <Cargo />
            <Cargo />
          </Vessel>,
        },
      ],
      /** Index of the current screen */
      currentScreen: 0,
    };
  }

  handleGoBack() {
    this.setState({
      currentScreen: Math.max(0, this.state.currentScreen - 1),
    });
  }

  handleGoForward() {
    this.setState({
      currentScreen: Math.min(this.state.screens.length - 1, this.state.currentScreen + 1),
    });
  }

  render() {
    const screen = this.state.screens[this.state.currentScreen];

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">{screen.title}</h1>
          <div className="app-nav-buttons">
            <div className="app-nav-button" onClick={this.handleGoBack.bind(this)}><i className="fa fa-arrow-left" /></div>
            <div className="app-nav-button" onClick={this.handleGoForward.bind(this)}><i className="fa fa-arrow-right" /></div>
          </div>
        </header>
        <div className="app-screens">
          <Screen left={screen.left} right={screen.right} />
        </div>
      </div>
    );
  }

}
