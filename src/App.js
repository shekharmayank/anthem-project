import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductInCart from "./Contexts/ProductInCart";
import Cart from "./Pages/Cart";
import List from "./Pages/List";
import View from "./Pages/View";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <ProductInCart.Provider value={[cart, setCart]}>
        <Router>
          <Switch>
            <Route path={"/product/:id"}>
              <View />
            </Route>
            <Route path={"/cart"}>
              <Cart />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Router>
      </ProductInCart.Provider>
    </>
  );
}

export default App;
