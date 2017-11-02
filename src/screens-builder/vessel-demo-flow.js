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
    this.definitions = [];
    this.newScreen();
  }

  currentDefinition() {
    return this.definitions[this.definitions.length - 1];
  }

  withNumberOfCargos(amount) {
    this.currentDefinition().numberOfCargos = amount;
    return this;
  }

  withExplanationToAppend(explanation) {
    this.currentDefinition().explanationToAppend = explanation;
    return this;
  }

  newScreen() {
    this.definitions.push({
      numberOfCargos: 0,
      explanationToAppend: null,
    });
    return this;
  }

  changeNumberOfCargos(amount) {
    return this.newScreen().withNumberOfCargos(amount);
  }

  execute(screens) {
    this.definitions.forEach(definition => {
      const cargos = _.range(definition.numberOfCargos).map(idx => (
        <Cargo key={idx} />
      ));
      // Modifies the demo pane
      screens.withDemoPane(
        <Vessel>{cargos}</Vessel>
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