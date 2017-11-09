import React, { Component } from "react";
import KeyHandler, { KEYPRESS } from "react-key-handler";

import ScreensBuilder, { VesselDemoFlow } from "../screens-builder";
import Screen from "../screen";
import WhatsApp, { WhatsAppChatRow } from "../whatsapp";

import "./app.css";

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      /** Linear sequence of screens */
      screens: this.buildInitialScreens(),
      /** Index of the current screen */
      currentScreen: 45,
    };
  }

  buildInitialScreens() {
    const builder = new ScreensBuilder();

    builder
      .newScreen("Flexbox Preso")
      .withExplanation("## Welcome to the Flexbox presentation")
      .appendExplanation("![cover](http://www.artnet.com/WebServices/images/ll00076lld98QJFgDVECfDrCWvaHBOcUREF/piet-mondrian-ohne-titel-(3-works).jpg)")
      .newScreen("Flexbox Basics")
      .appendExplanation("## Containers and children")
      .appendExplanation("Flexbox arranges elements within a container")
      .appendExplanation("Set CSS property `display: flex` on the container to enable it")
      .appendExplanation("Applies only to direct children. Children themselves can have `display: flex` set to make them a flex container too.")
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
      .appendExplanation("## Axes")
      .appendExplanation("![cover](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)")
      .cloneScreen()
      .appendExplanation("CSS `flex-direction` property")
      .appendExplanation("Specifies the direction of the **main axis**")
      .appendExplanation("At the same time implies the direction of the **cross axis**")
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
      .appendExplanation("## Justifying items along the main axis")
      .appendExplanation("![cover](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)")
      .appendExplanation("Use the CSS `justify-content` property")
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

    builder
      .newScreen("Alignment")
      .appendExplanation("## Aligning items along the cross axis")
      .appendExplanation("![cover](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)")
      .appendExplanation("CSS `align-items` property")
      .appendExplanation("**Demo**")
      .cloneScreen();
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withAlignItems("stretch")
      .withExplanationToAppend("`align-items: stretch` (default)")
      .cloneScreen()
      .withAlignItems("center")
      .withExplanationToAppend("`align-items: center`")
      .cloneScreen()
      .withAlignItems("flex-start")
      .withExplanationToAppend("`align-items: flex-start`")
      .cloneScreen()
      .withAlignItems("flex-end")
      .withExplanationToAppend("`align-items: flex-end`")
      .cloneScreen()
      .withJustifyContent("flex-end")
      .withAlignItems("flex-end")
      .withExplanationToAppend(
        "Combining justification and alignment\n" +
        "```\n" +
        "justify-content: flex-end\n" +
        "align-items: flex-end\n" +
        "```\n"
      )
      .execute(builder);
    
    builder
      .newScreen("Sizing")
      .appendExplanation("## Flex Basis")
      .appendExplanation("Flex Basis determines the **main size** of the item")
      .appendExplanation("Main size refers to the size along its main axis")
      .appendExplanation("**Demo**")
      .cloneScreen();
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withGlobalCargoFlexBasis("auto")
      .withExplanationToAppend("`flex-basis: auto` (default)")
      .cloneScreen()
      .withGlobalCargoFlexBasis("160px")
      .withExplanationToAppend("`flex-basis: 160px`")
      .cloneScreen()
      .withGlobalCargoFlexBasis("auto")
      .withParticularCargoFlexBasis(1, "300px")
      .withExplanationToAppend("`flex-basis: 300px` on second cargo only")
      .execute(builder);
    
    builder
      .cloneScreen()
      .appendExplanation("## Flex Grow")
      .appendExplanation("Flex Grow determines the **rate** of growth to fill the container")
      .appendExplanation("`flex-grow` CSS property on the flex item (cargo)")
      .appendExplanation("Growth rate is relative to siblings")
      .appendExplanation("**Demo**")
      .withDemoPane(null)
      .cloneScreen();
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withGlobalCargoFlexGrow("0")
      .withExplanationToAppend("`flex-grow: 0` (default). No growth.")
      .cloneScreen()
      .withGlobalCargoFlexGrow("1")
      .withExplanationToAppend("`flex-grow: 1`. Free space is distributed evenly across all cargos.")
      .cloneScreen()
      .withGlobalCargoFlexGrow("2")
      .withExplanationToAppend("`flex-grow: 2`. No visual change.")
      .cloneScreen()
      .withGlobalCargoFlexGrow("1")
      .withParticularCargoFlexGrow(1, 3)
      .withExplanationToAppend(
        "`flex-grow: 3` on second item, `flow-grow: 1` on others" +
        "\n\nFor every 1 pixel of free space given to the others, 3 pixels are given to the second item")
      .execute(builder);
    
    builder
      .newScreen("Sizing")
      .appendExplanation("## Flex Shrink")
      .appendExplanation("Flex Shrink determines the **rate** of shrinkage to fit into the container")
      .appendExplanation("`flex-shrink` CSS property on the flex item (cargo)")
      .appendExplanation("Similar to `flex-grow`, the shrink rate is relative to siblings")
      .appendExplanation("**Demo**")
      .withDemoPane(null)
      .cloneScreen();
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withGlobalCargoFlexShrink("1")
      .withGlobalCargoContent("More text to illustrate shrinking")
      .withExplanationToAppend("`flex-shrink: 1` (default). Shrink at the same rate.")
      .cloneScreen()
      .withMaxWidth("800px")
      .withExplanationToAppend("Shrinking the vessel reduces available space.")
      .withExplanationToAppend("All cargos shrink to the same size.")
      .cloneScreen()
      .withGlobalCargoFlexShrink("1")
      .withParticularCargoFlexShrink(1, 3)
      .withExplanationToAppend(
        "`flex-shrink: 3` on second item, `flow-shrink: 1` on others" +
        "\n\nFor every 1 pixel of free space taken away from others, 3 pixels are taken away from the second item")
      .cloneScreen()
      .withGlobalCargoFlexShrink("0")
      .withExplanationToAppend("`flex-shrink: 0`. Do not shrink.")
      .execute(builder);
    
    builder
      .cloneScreen()
      .appendExplanation("## Flex Shorthand")
      .appendExplanation("`flex` CSS property is simply a shorthand");
    
    new VesselDemoFlow()
      .withNumberOfCargos(4)
      .withExplanationToAppend("Usage 1: `flex: <flex-grow>`")
      .cloneScreen()
      .withParticularCargoFlexGrow(1, 1)
      .withExplanationToAppend("Setting `flex: 1` on one item but not others makes it fill remaining space")
      .execute(builder);
    
    builder
      .cloneScreen()
      .appendExplanation("Usage 2: `flex: <flex-grow> <flex-shrink> <flex-basis>`")
      .cloneScreen()
      .appendExplanation("NOTE: React Native treats `flex` differently. See docs.");
    
    builder
      .newScreen("Building WhatsApp Interface")
      .appendExplanation("![whatsapp](https://fd681cd3a0a40380ca85-667b5de929945cccc984187d6da5be32.ssl.cf1.rackcdn.com/preview/screenshots_ios/chats/cZuZ+2c1p3pmeG-rijU5/chat-thumb-iphone-1.png)")
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={0} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={1} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={2} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={3} />)
      .cloneScreen()
      .withDemoPane(<WhatsAppChatRow stage={1} title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />)
      .cloneScreen()
      .withDemoPane(<WhatsAppChatRow stage={2} title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />)
      .cloneScreen()
      .withDemoPane(<WhatsAppChatRow stage={3} title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />)
      .cloneScreen()
      .withDemoPane(<WhatsAppChatRow stage={4} title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />)
      .cloneScreen()
      .withDemoPane(<WhatsAppChatRow stage={5} title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />)
      .cloneScreen()
      .withDemoPane(<WhatsAppChatRow stage={6} title="7 Hudson" lastMessage="Someone's at the door go fetch them" lastMessageUser="Doorbot" lastMessageTime="11:45 AM" />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={4} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={5} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={6} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={7} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={8} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={9} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={10} />)
      .cloneScreen()
      .withDemoPane(<WhatsApp stage={11} />)
    ;

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
            {this.state.currentScreen}
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
