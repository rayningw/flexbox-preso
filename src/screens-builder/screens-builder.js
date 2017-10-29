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
    });
    return this;
  }

  /**
   * Sets the current screen's left content
   */
  withLeft(left) {
    this.currentScreen().left = left;
    return this;
  }

  /**
   * Sets the current screen's right content
   */
  withRight(right) {
    this.currentScreen().right = right;
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
   * Clones the current screen then sets the left content
   */
  changeLeft(left) {
    return this.cloneScreen().withLeft(left);
  }

  /**
   * Clones the current screen then sets the right content
   */
  changeRight(right) {
    return this.cloneScreen().withRight(right);
  }

  /**
   * Builds the screens
   */
  build() {
    return this.screens;
  }

}