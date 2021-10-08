import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CartProvider } from './hooks/useCart';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyle />

        <Header />
        <Home />
        <Footer />
        
      </CartProvider>
    </>
  );
}

export default App;
