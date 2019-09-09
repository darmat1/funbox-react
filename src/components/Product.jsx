import React, { Component } from "react";
import '../styles/Product.scss';
import Top from "./Top";


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isFirstHover: false,
      isSelectedHover: false
    }
    this.clickOnProduct = this.clickOnProduct.bind(this);
  }

  clickOnProduct = () => {
    if (this.props.isAvailable) {
      if (!this.state.isSelected) {
        this.setState({
          isSelected: true,
          isFirstHover: true
        });
      } else {
        this.setState({ isSelected: !this.state.isSelected });
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
    if (this.state.isSelected) {
      this.setState({ isSelectedHover: true });
    }
  }

  render() {
    let productBottomBlock;

    if (this.props.isAvailable) {
      if (!this.state.isSelected) {

        productBottomBlock = <div className="product__bottom-promo">
          {this.props.bottomPromo.text} 
          <span onClick={this.clickOnLink}>{this.props.bottomPromo.linkAnchor}</span>
        </div>;

      } else {
        productBottomBlock = <div className="product__bottom-promo">{this.props.bottomPromo.textSelected}</div>
      }
      
    } else {
      productBottomBlock = <div className="product__bottom-promo">{this.props.bottomPromo.textDisabled}</div>;
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
            <Top text={this.props.topPromo.text} hoverText={this.props.topPromo.hoverSelected} hoverActive={this.state.isSelectedHover}></Top>
            <h2 className="product__name">{this.props.name}</h2>
            <div className="product__classification">{this.props.classification}</div>
            <div className="product__description" dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
            <div className="product__weight">
              <span>{this.props.weight}</span>
              <span className="product__weight-units">{this.props.units}</span>
            </div>
          </div>
        </div>
        {productBottomBlock}
      </div>
    );
  }
}

export default Product;