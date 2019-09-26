import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/home";
import { useHttp } from "./data/http";
import Navbar from "./components/navbar";
import EditUser from "./page/editUser";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id/:index" exact component={EditUser} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
