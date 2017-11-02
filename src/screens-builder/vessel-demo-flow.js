import React from "react";
import _ from "lodash";

import Cargo from "../cargo";
import Vessel from "../vessel";

/**
 * Demo flow which shows variations of vessels
 */
export default class VesselDemoFlow {
  
  constructor() {
    /** Definitions of what should appear on each screen */
    this.definitions = [{
      numberOfCargos: 0,
      explanationToAppend: null,
      flexDirection: "row",
    }];
  }

  currentDefinition() {
    return this.definitions[this.definitions.length - 1];
  }

  withNumberOfCargos(amount) {
    this.currentDefinition().numberOfCargos = amount;
    return this;
  }

  withFlexDirection(direction) {
    this.currentDefinition().flexDirection = direction;
    return this;
  }

  withExplanationToAppend(explanation) {
    this.currentDefinition().explanationToAppend = explanation;
    return this;
  }

  cloneScreen() {
    const clone = _.cloneDeep(this.currentDefinition());
    clone.explanationToAppend = null,
    this.definitions.push(clone);
    return this;
  }

  changeNumberOfCargos(amount) {
    return this.cloneScreen().withNumberOfCargos(amount);
  }

  changeFlexDirection(direction) {
    return this.cloneScreen().withFlexDirection(direction);
  }

  execute(screens) {
    this.definitions.forEach(definition => {
      const cargos = _.range(definition.numberOfCargos).map(idx => (
        <Cargo key={idx} />
      ));
      // Modifies the demo pane
      screens.withDemoPane(
        <Vessel flexDirection={definition.flexDirection}>{cargos}</Vessel>
      );
      // Appends to the explanation
      if (screens.appendExplanation) {
        screens.appendExplanation(definition.explanationToAppend);
      }
      // Clone the screen to retain whatever was set outside of this flow context
      screens.cloneScreen();
    });
  }

}