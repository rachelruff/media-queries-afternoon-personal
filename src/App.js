import React, { Component } from "react";
import "./App.css";
import aftproj from "./aftproj.jpg";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
// import Team from "./components/Team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button class="logo">Start Bootstrap</button>
          <div class="list">
            <button class="header-item">SERVICES</button>
            <button class="header-item">PORTFOLIO</button>
            <button class="header-item">ABOUT</button>
            <button class="header-item">TEAM</button>
            <button class="header-item">CONTACT</button>
          </div>
        </header>
        <div class="welcomeBody ">
          <h1 className="welcome">Welcome To Our Studio!</h1>
          <div class="meet">IT'S NICE TO MEET YOU</div>
          <button class="more">TELL ME MORE</button>
        </div>
      </div>
    );
    <Services />;
  }
}

export default App;
