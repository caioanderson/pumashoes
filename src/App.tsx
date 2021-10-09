import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CartProvider } from './hooks/useCart';
import { Routes } from './routes';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <Routes />
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
