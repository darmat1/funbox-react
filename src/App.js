import React, { Component } from "react";
import './App.scss';
import ProductList from './components/ProductList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      dataUrl: "https://preview.khaztech.com/zzz/datatest.php",
      // dataUrl: "./data/data.json",
      em: null
    };

  }
  fetchData = (url) => {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    
    fetch(url, {
      mode: 'cors',
      headers: {
      }
    })
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({ 
            products: data
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
            em: error.message
          });
        }
      )
  }
  componentDidMount() {
    this.fetchData(this.state.dataUrl);
    setInterval(() => {
      this.fetchData(this.state.dataUrl);
    }, 2000);
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
