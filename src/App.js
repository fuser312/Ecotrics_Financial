import React from 'react';
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import ScrollToTop from './components/ScrollToTop';
import LiveQuote from './pages/LiveQuotes/LiveQuote';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" exxact component={Services} />
          <Route path="/products" exxact component={Products} />
          {/* <Route path="/live_quotes" exxact component={LiveQuote} /> */}
        </Switch>
        <Footer/>
      
    </Router>
  );
}

export default App;
