import React, { Component } from "react";
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isFirstHover: false,
    }
  }

  clickOnProduct = () => {
    if (this.props.isAvailable) {
      if (!this.state.isSelected) {
        this.setState({ isSelected: true });
        this.setState({ isFirstHover: true });
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
      this.setState({ isFirstHover: false });
    }
  }

  render() {
    let productBottomBlock;
    if (this.props.isAvailable) {
      if (!this.state.isSelected) {
        productBottomBlock = <div className="product__bottom-promo">
        {this.props.bottomPromo.text} <a href={this.props.bottomPromo.link} onClick={this.clickOnLink}>{this.props.bottomPromo.linkAnchor}</a>
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
        <div className="product__border" onClick={this.clickOnProduct} onMouseLeave={this.mouseLeave}>
          <div className="product__inner">
            <div className="product__top-promo">{this.props.topPromo}</div>
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