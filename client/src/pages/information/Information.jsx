import React from "react";
import "./information.css";
import HorizontalLinearStepper from "../../components/HorizontalLinearStepper/HorizontalLinearStepper";

export default function Information(props) {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

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
