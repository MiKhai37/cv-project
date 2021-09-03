// App.js

import React, { Component } from "react";
import "./styles/App.css";import Header from "./components/Header";
import Footer from "./components/Footer";
import Generators from "./components/Generators";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className='main-flex-child'>
            <Generators />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
