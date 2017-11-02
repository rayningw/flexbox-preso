import React from "react";

import _ from "lodash";

/**
 * Builder for a sequence of screens by specifying deltas between screens.
 */
export default class ScreensBuilder {

  constructor() {
    /** Definitions of the screens */
    this.screens = [];
  }

  currentScreen() {
    return this.screens[this.screens.length - 1];
  }

  /**
   * Creates a new screen
   */
  newScreen(title) {
    this.screens.push({
      title: title,
      left: [],
      right: [],
    });
    return this;
  }

  /**
   * Sets the current screen's explanation
   */
  withExplanation(explanation) {
    this.currentScreen().left = [ explanation ];
    return this;
  }

  /**
   * Appends to the current screen's explanation
   */
  appendExplanation(explanation) {
    this.currentScreen().left.push(explanation);
    return this;
  }

  /**
   * Sets the current screen's demo pane
   */
  withDemoPane(element) {
    this.currentScreen().right = [ element ];
    return this;
  }

  /**
   * Clones the current screen by performing a deep copy
   */
  cloneScreen() {
    this.screens.push(_.cloneDeep(this.currentScreen()));
    return this;
  }

  /**
   * Executes screen manipulations with demo flow
   */
  executeDemoFlow(flow) {
    flow.execute(this);
    return this;
  }

  /**
   * Builds the screens
   */
  build() {
    function linesToDivs(lines) {
      return lines.map((line, idx) => <div key={idx}>{line}</div>);
    }

    return this.screens.map(screen => {
      return {
        title: screen.title,
        left: <div>{linesToDivs(screen.left)}</div>,
        right: <div>{linesToDivs(screen.right)}</div>,
      };
    });
  }

}