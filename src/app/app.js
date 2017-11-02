import React, { Component } from "react";
import KeyHandler, { KEYPRESS } from "react-key-handler";

import ScreensBuilder, { VesselDemoFlow } from "../screens-builder";
import Screen from "../screen";

import "./app.css";

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      /** Linear sequence of screens */
      screens: this.buildInitialScreens(),
      /** Index of the current screen */
      currentScreen: 0,
    };
  }

  buildInitialScreens() {
    const builder = new ScreensBuilder();

    builder
      .newScreen("Flexbox Preso")
      .withExplanation("Welcome to the Flexbox presentation")
      .newScreen("Flexbox Basics")
      .withExplanation("This is the left of the screen");

    new VesselDemoFlow()
      .withNumberOfCargos(2)
      .withExplanation("There are two cargos")
      .changeNumberOfCargos(3)
      .withExplanation("There are now three cargos")
      .execute(builder);

    builder
      .addExplanation("Here is some more explanation")
      .newScreen("Flexbox Advanced")
      .withExplanation("This is the real deal");

    new VesselDemoFlow()
      .withNumberOfCargos(10)
      .withExplanation("OMG")
      .execute(builder);

    return builder.build();
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
        <KeyHandler keyEventName={KEYPRESS} keyValue="[" onKeyHandle={this.handleGoBack.bind(this)} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="]" onKeyHandle={this.handleGoForward.bind(this)} />

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
