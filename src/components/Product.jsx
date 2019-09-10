import React, { Component } from "react";
import '../styles/animated.css';
import '../styles/Product.scss';
import AnimatedSwitch from "./AnimatedSwitch";


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isFirstHover: false,
      isSelectedHover: false
    }
  }

  clickOnProduct = () => {
    if (this.props.isAvailable) {
      if (!this.state.isSelected) {
        this.setState({
          isSelected: true,
          isFirstHover: true
        });
      } else {
        this.setState({
          isSelected: !this.state.isSelected,
          isSelectedHover: false
        });
      }

      if (this.state.isFirstHover && this.state.isSelected) {
        this.setState({ isFirstHover: !this.state.isFirstHover });
      }
    }
  }

  clickOnLink = () => {
    if (this.props.isAvailable && !this.state.isSelected) {
      this.setState({ isSelected: true });
    }
  }

  mouseLeave = () => {
    if (this.state.isSelected) {
      this.setState({
        isFirstHover: false,
        isSelectedHover: false
      });
    }
  }

  mouseOver = () => {
    if (this.state.isSelected && !this.state.isFirstHover) {
      this.setState({ isSelectedHover: true });
    }
  }

  render() {
    let productBottomBlock;

    if (this.props.isAvailable) {
        productBottomBlock = <span>{this.props.bottomPromo.text} <button className="product__bottom-link" onClick={this.clickOnLink}>
            {this.props.bottomPromo.linkText}
          </button>
        </span>;
    } else {
      productBottomBlock = this.props.bottomPromo.textDisabled;
    }

    return (
      <div
        className={`product` +
          `${!this.props.isAvailable ? ' product--disabled' : ''}` +
          `${this.state.isSelected === true ? ' product--selected' : ''}` +
          `${this.state.isFirstHover ? ' product--hover-disabled' : ''}`
        }>
        <div className="product__card" onClick={this.clickOnProduct} onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
          <div className="product__inner">
            <AnimatedSwitch
              cssClass="product__top-promo"
              default={this.props.topPromo.text}
              switched={this.props.topPromo.hoverSelected}
              isSwitched={this.state.isSelectedHover}></AnimatedSwitch>
            <h2 className="product__name">{this.props.name}</h2>
            <div className="product__classification">{this.props.classification}</div>
            <div className="product__description" dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
            <div className="product__weight">
              <span>{this.props.weight}</span>
              <span className="product__weight-units">{this.props.units}</span>
            </div>
          </div>
        </div>
        <AnimatedSwitch
          cssClass="product__bottom-promo"
          default={productBottomBlock}
          switched={this.props.bottomPromo.textSelected}
          isSwitched={this.state.isSelected}>
        </AnimatedSwitch>
      </div>
    );
  }
}

export default Product;