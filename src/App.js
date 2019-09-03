import React, { Component } from "react";
import './App.scss';
import ProductList from './components/ProductList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      dataUrl: "./data/data.json"
    };

  }
  fetchData = (url) => {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data })
      )
  }
  componentDidMount() {
    this.fetchData(this.state.dataUrl);
    setInterval(() => {
      this.fetchData(this.state.dataUrl);
    }, 1000);
  }
  render() {
    return (
      <div className="wrapper">
        <h1>Ты сегодня покормил кота?</h1>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
