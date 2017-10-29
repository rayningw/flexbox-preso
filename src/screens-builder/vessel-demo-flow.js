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
      explanation: "",
    }];
  }

  currentDefinition() {
    return this.definitions[this.definitions.length - 1];
  }

  withNumberOfCargos(amount) {
    this.currentDefinition().numberOfCargos = amount;
    return this;
  }

  withExplanation(explanation) {
    this.currentDefinition().explanation = explanation;
    return this;
  }

  cloneScreen() {
    this.definitions.push(_.cloneDeep(this.currentDefinition()));
    return this;
  }

  changeNumberOfCargos(amount) {
    return this.cloneScreen().withNumberOfCargos(amount);
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
      screens.addExplanation(definition.explanation);
      // Clone the screen to retain whatever was set outside of this flow context
      screens.cloneScreen();
    });
  }

}