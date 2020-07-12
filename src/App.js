import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.components.jsx";
import ShopPage from "./pages/shop/shop.components";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Router>
    </div>
  );
}

export default App;
