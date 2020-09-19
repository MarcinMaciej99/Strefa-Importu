import React from "react";
import Accordian from "../Acordian/Accordian";
import "./Informations.scss";

function Informations() {
  return (
    <div className="informations">
      <div className="informations__rules">
        <div className="informations__rule">Zasady Zakupu</div>
        <div className="informations__accordian">
          <Accordian />
        </div>
      </div>
    </div>
  );
}

export default Informations;
