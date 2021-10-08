import React from 'react';
import ReactDOM from 'react-dom';

import { createServer } from 'miragejs';
import { shoes, stock } from './utils/shoes';

import App from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/shoes', () => {
      return shoes;
    });

    this.get('/shoes/:id', (schema, request) => {
      let id = request.params.id;
      const shoe = shoes.filter(shoe => String(shoe.id) === id);
      return shoe;
    })

    this.get('/stock/:id', (schema, request) => {
      let id = request.params.id;
      const shoe = stock.filter(shoe => String(shoe.id) === id);
      return shoe;
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);