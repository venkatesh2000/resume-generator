import React from "react";
import "./information.css";
import HorizontalLinearStepper from "../../components/HorizontalLinearStepper/HorizontalLinearStepper";
import NavBar2 from "../../components/navBar2/NavBar2";

export default function Information(props) {
  return (
    <div className="AppInfo">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <NavBar2 />
      <HorizontalLinearStepper
        step={props.step}
        stepNames={props.stepNames}
        optionalSteps={props.optionalSteps}
      />
      {props.getForm(
        props.resume,
        props.setResume,
        props.step,
        props.setStep,
        props.numberOfExps,
        props.setNumberOfExps,
        props.maxSteps
      )}
    </div>
  );
}
