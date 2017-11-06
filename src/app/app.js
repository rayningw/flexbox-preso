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
      currentScreen: 4,
    };
  }

  buildInitialScreens() {
    const builder = new ScreensBuilder();

    builder
      .newScreen("Flexbox Preso")
      .withExplanation("Welcome to the Flexbox presentation")
      .newScreen("Flexbox Basics")
      .appendExplanation("Flexbox arranges elements within a container")
      .appendExplanation("Set CSS property `display: flex` on the container to enable it")
      .appendExplanation("Applies only to direct children. Children themselves can orthogonally have `display: flex` set on them.")
      .appendExplanation("**See it in action**")
      .cloneScreen();

    new VesselDemoFlow()
      .withNumberOfCargos(2)
      .withExplanationToAppend("There are two cargos")
      .changeNumberOfCargos(4)
      .withExplanationToAppend("There are more cargos")
      .changeNumberOfCargos(8)
      .withExplanationToAppend("There are even more cargos")
      .changeNumberOfCargos(16)
      .withExplanationToAppend("There are heaps of cargos")
      .execute(builder);
    
    builder
      .newScreen("Flex Direction")
      .appendExplanation("Specifies the direction of the `main axis`")
      .appendExplanation("At the same time specifies the direction of the perpendicular `cross axis`")
      .appendExplanation("CSS `flex-direction` property")
      .appendExplanation("Either `row` (default for web) or `column` (default for React Native)")
      .appendExplanation("**Demo**")
      .cloneScreen();
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withFlexDirection("row")
      .withExplanationToAppend("`flex-direction: row` (default for web)")
      .changeFlexDirection("column")
      .withExplanationToAppend("`flex-direction: column`")
      .execute(builder);

    builder
      .newScreen("Justification")
      .appendExplanation("Justify content on the main axis")
      .appendExplanation("CSS `justify-content` property")
      .appendExplanation("**Demo**")
      .cloneScreen();
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withJustifyContent("flex-start")
      .withExplanationToAppend("`justify-content: flex-start` (default)")
      .changeJustifyContent("flex-end")
      .withExplanationToAppend("`justify-content: flex-end`")
      .changeJustifyContent("center")
      .withExplanationToAppend("`justify-content: center`")
      .changeJustifyContent("space-around")
      .withExplanationToAppend("`justify-content: space-around`")
      .changeJustifyContent("space-between")
      .withExplanationToAppend("`justify-content: space-between`")
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
          <Screen explanation={screen.explanation} demoPane={screen.demoPane} />
        </div>
      </div>
    );
  }

}
