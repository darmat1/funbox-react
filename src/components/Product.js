import React, { Component } from "react";
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isFirstHover: false,
      bottomPromo: undefined
    }
  }

  componentDidMount() {
    if (this.props.isAvailable) {
      this.setState({ bottomPromo: this.props.bottomPromo });
    }
    else {
      this.setState({ bottomPromo: this.props.bottomPromoDisabled });
    }
  }

  clickOnProduct = () => {
    if (this.props.isAvailable) {
      if (!this.state.isSelected) {
        this.setState({ isSelected: !this.state.isSelected });
        this.setState({ isFirstHover: !this.state.isFirstHover });
        this.setState({ bottomPromo: this.props.bottomPromoSelected });
      } else {
        this.setState({ isSelected: !this.state.isSelected });
        this.setState({ bottomPromo: this.props.bottomPromo });
      }

      if (this.state.isFirstHover && this.state.isSelected) {
        this.setState({ isFirstHover: !this.state.isFirstHover });
      }
    }
  }

  mouseLeave = () => {
    if (this.state.isSelected) {
      this.setState({ isFirstHover: !this.state.isFirstHover });
    }
  }

  render() {
    return (
      <div
        onClick={this.clickOnProduct}
        className={`product` +
          `${!this.props.isAvailable ? ' product--disabled' : ''}` +
          `${this.state.isSelected === true ? ' product--selected' : ''}` +
          `${this.state.isFirstHover ? ' product--first-hover' : ''}`
        }
        onMouseLeave={this.mouseLeave}>
        <div className="product__border">
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
        <div className="product__bottom-promo" dangerouslySetInnerHTML={{ __html: this.state.bottomPromo }}></div>
      </div>
    );
  }
}

export default Product;