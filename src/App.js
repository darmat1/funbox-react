import React, { Component } from "react";
import './App.scss';
import ProductList from './components/ProductList';

const products = [
  {
    "id": 1,
    "name": "Нямушка",
    "classification": "c фуа-гра",
    "topPromo": "Сказочное заморское яство",
    "description": "<strong>10</strong> порций <br> мышь в подарок",
    "bottomPromo": {
      "link": "#",
      "linkAnchor": "купи",
      "text": "Чего сидишь? порадуй котэ,",
      "textSelected": "Печень утки разварная с артишоками.",
      "textDisabled": "Печалька, с фуа-гра закончился."
    },
    "weight": "0,5",
    "units": "кг",
    "isAvailable": true
  },
  {
    "id": 2,
    "name": "Нямушка",
    "classification": "c рыбой",
    "description":
      "<strong>40</strong> порций <br><strong>2</strong> мыши в подарок",
    "topPromo": "Сказочное заморское яство",
    "bottomPromo": {
      "link": "#",
      "linkAnchor": "купи",
      "text": "Чего сидишь? порадуй котэ, ",
      "textSelected": "Головы щучьи с чесноком да свежайшая сёмгушка.",
      "textDisabled": "Печалька, с рыбой закончился.",
    },
    "weight": "2",
    "units": "кг",
    "isAvailable": true
  },
  {
    "id": 3,
    "name": "Нямушка",
    "classification": "c курой",
    "description":
      "<strong>100</strong> порций <br><strong>5</strong> мышей в подарок <br>заказчик доволен",
    "topPromo": "Сказочное заморское яство",
    "bottomPromo": {
      "link": "#",
      "linkAnchor": "купи",
      "text": "Чего сидишь? порадуй котэ, ",
      "textSelected": "Филе из цыплят с трюфелями в бульоне.",
      "textDisabled": "Печалька, с курой закончился."
    },
    "weight": "5",
    "units": "кг",
    "isAvailable": false
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <h1>Ты сегодня покормил кота?</h1>
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default App;
