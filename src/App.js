import React, { Component } from "react";
import './App.scss';
import ProductList from './components/ProductList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
      fetch("./data/data.json")
      .then((response) => response.json())
      .then((response) => {
              this.setState({products: response});
      })
  }
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <h1>Ты сегодня покормил кота?</h1>
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
