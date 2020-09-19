import React from "react";
import "./App.scss";
// import { Header } from "./components/Header/Header";
// import { MainSection } from "./components/MainSection/MainSection";
// import Informations from "./components/Acordian/Accordian";
import { Informations, MainSection, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Informations />
    </div>
  );
}

export default App;
