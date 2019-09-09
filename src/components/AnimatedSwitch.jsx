import React, { Component } from "react";
import {Animated} from "react-animated-css";
import '../styles/AnimatedSwitch.scss';

class AnimatedSwitch extends Component {
  render() {
    return (
      <div className={this.props.cssClass + " animated-switch"}>
        <Animated className="animated-switch__item" animationInDuration={300} animationOutDuration={300} isVisible={!this.props.isSwitched}>
          {this.props.default}
        </Animated>
        <Animated className="animated-switch__item" animationInDuration={300} animationOutDuration={300} isVisible={this.props.isSwitched}>
          {this.props.switched}
        </Animated>
        </div>
    );
  }
}

export default AnimatedSwitch;