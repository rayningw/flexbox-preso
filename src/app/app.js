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
      .appendExplanation("Flexbox arranges elements within a container")
      .appendExplanation("- Set CSS property `display: flex` on the container to enable it")
      .appendExplanation("- Applies only to direct children. Children themselves can orthogonally have `display: flex` set on them.")
      .appendExplanation("See it in action:");

    new VesselDemoFlow()
      .changeNumberOfCargos(2)
      .withExplanationToAppend("There are two cargos")
      .changeNumberOfCargos(4)
      .withExplanationToAppend("There are more cargos")
      .changeNumberOfCargos(8)
      .changeNumberOfCargos(16)
      .execute(builder);
    
    builder
      .newScreen("Key Concepts")
      .appendExplanation("Flex direction")
      .appendExplanation("- Specified with the CSS `flex-direction` property")
      .appendExplanation("- Either `row` (default for web) or `column` (default for React Native)")
      .appendExplanation("Demo");
    
    new VesselDemoFlow()
      .changeNumberOfCargos(4)
      .withExplanationToAppend("`flex-direction: row`")
      .changeFlexDirection("column")
      .withExplanationToAppend("`flex-direction: column`")
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
