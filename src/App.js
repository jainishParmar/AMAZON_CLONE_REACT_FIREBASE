// import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KXeo0SE4MIn1VsMvIf99Kby3CrtswEHJvTLtb9W1K5WZqcNrnpjb7FbLPl4rLPATGX785Wk0hha62fehfQlyIe700JaH2BuyC"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //bem
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          ></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
