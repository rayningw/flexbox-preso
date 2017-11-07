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

      flexDirection: null,
      justifyContent: null,
      alignItems: null,
      maxWidth: null,

      globalCargoFlexBasis: null,
      globalCargoFlexGrow: null,
      globalCargoFlexShrink: null,
      globalCargoContent: null,

      particularCargoFlexBasis: {},
      particularCargoFlexGrow: {},
      particularCargoFlexShrink: {},
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

  withAlignItems(align) {
    this.currentDefinition().alignItems = align;
    return this;
  }

  withMaxWidth(maxWidth) {
    this.currentDefinition().maxWidth = maxWidth;
    return this;
  }

  withExplanationToAppend(explanation) {
    this.currentDefinition().explanationToAppend = explanation;
    return this;
  }

  withGlobalCargoFlexBasis(basis) {
    this.currentDefinition().globalCargoFlexBasis = basis;
    this.currentDefinition().particularCargoFlexBasis = {};
    return this;
  }

  withGlobalCargoFlexGrow(grow) {
    this.currentDefinition().globalCargoFlexGrow = grow;
    this.currentDefinition().particularCargoFlexGrow = {};
    return this;
  }

  withGlobalCargoFlexShrink(shrink) {
    this.currentDefinition().globalCargoFlexShrink = shrink;
    this.currentDefinition().particularCargoFlexShrink = {};
    return this;
  }

  withGlobalCargoContent(content) {
    this.currentDefinition().globalCargoContent = content;
    this.currentDefinition().particularCargoContent = {};
    return this;
  }

  withParticularCargoFlexBasis(index, basis) {
    this.currentDefinition().particularCargoFlexBasis[index] = basis;
    return this;
  }

  withParticularCargoFlexGrow(index, grow) {
    this.currentDefinition().particularCargoFlexGrow[index] = grow;
    return this;
  }

  withParticularCargoFlexShrink(index, shrink) {
    this.currentDefinition().particularCargoFlexShrink[index] = shrink;
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
        const flexBasis = definition.particularCargoFlexBasis[idx] || definition.globalCargoFlexBasis;
        const flexGrow = definition.particularCargoFlexGrow[idx] || definition.globalCargoFlexGrow;
        const flexShrink = definition.particularCargoFlexShrink[idx] || definition.globalCargoFlexShrink;
        const content = definition.globalCargoContent;
        return <Cargo key={idx} flexBasis={flexBasis} flexGrow={flexGrow} flexShrink={flexShrink}>
          {content}
        </Cargo>;
      });
      // Modifies the demo pane
      screens.withDemoPane(
        <Vessel
          flexDirection={definition.flexDirection}
          justifyContent={definition.justifyContent}
          alignItems={definition.alignItems}
          maxWidth={definition.maxWidth}
        >
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