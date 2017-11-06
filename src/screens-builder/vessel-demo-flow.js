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
      justifyContent: "flex-start",

      globalCargoFlexBasis: null,
      globalCargoFlexGrow: null,
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

  withJustifyContent(justify) {
    this.currentDefinition().justifyContent = justify;
    return this;
  }

  withExplanationToAppend(explanation) {
    this.currentDefinition().explanationToAppend = explanation;
    return this;
  }

  withGlobalCargoFlexBasis(basis) {
    this.currentDefinition().globalCargoFlexBasis = basis;
    return this;
  }

  withGlobalCargoFlexGrow(grow) {
    this.currentDefinition().globalCargoFlexGrow = grow;
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

  changeJustifyContent(justify) {
    return this.cloneScreen().withJustifyContent(justify);
  }

  execute(screens) {
    this.definitions.forEach((definition, idx) => {
      const cargos = _.range(definition.numberOfCargos).map(idx => {
        const flexBasis = definition.globalCargoFlexBasis;
        const flexGrow = definition.globalCargoFlexGrow;
        return <Cargo key={idx} flexBasis={flexBasis} flexGrow={flexGrow} />;
      });
      // Modifies the demo pane
      screens.withDemoPane(
        <Vessel
          flexDirection={definition.flexDirection}
          justifyContent={definition.justifyContent}>
          {cargos}
        </Vessel>
      );
      // Appends to the explanation
      if (screens.appendExplanation) {
        screens.appendExplanation(definition.explanationToAppend);
      }
      // Clone the screen to retain whatever was set outside of this flow context
      if (idx < this.definitions.length - 1) {
        screens.cloneScreen();
      }
    });
  }

}