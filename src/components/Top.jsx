import React, { Component } from "react";
import {Animated} from "react-animated-css";

class Top extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="product__top-promo">
        <Animated isVisible={this.props.isSelectedHover}>
          {this.props.text}
        </Animated>
        <Animated isVisible={!this.props.isSelectedHover}>
          {this.props.hoverText}
        </Animated>
      </div>
    );
  }
}

export default Top;