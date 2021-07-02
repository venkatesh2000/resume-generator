import React from "react";
import "./App.css";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper/HorizontalLinearStepper";
// import TitleBar from "./components/TitleBar/TitleBar.jsx";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Experiences from "./components/Experiences/Experiences.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Preview from "./components/Preview/Preview.jsx";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/homePage/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const getForm = (step, setStep, numberOfExps, setNumberOfExps, maxSteps) => {
  switch (step) {
    case 0:
      return <PersonalInfo step={step} setStep={setStep} maxSteps={maxSteps} />;
    case 1:
      return <Education step={step} setStep={setStep} maxSteps={maxSteps} />;
    case 2:
      return <Skills step={step} setStep={setStep} maxSteps={maxSteps} />;
    case 3:
      return (
        <Experiences
          step={step}
          setStep={setStep}
          setNumberOfExps={setNumberOfExps}
          maxSteps={maxSteps}
        />
      );
    case 4:
      return (
        <Projects
          step={step}
          setStep={setStep}
          numberOfExps={numberOfExps}
          maxSteps={maxSteps}
        />
      );
    // case 5:
    //   return <Languages step={step} setStep={setStep} maxSteps={maxSteps} />;
    default:
      return <Preview step={step} setStep={setStep} maxSteps={maxSteps} />;
  }
};

const App = () => {
  const [step, setStep] = React.useState(0);
  const [numberOfExps, setNumberOfExps] = React.useState(0);
  const stepNames = [
    "Personal Info",
    "Education",
    "Skills",
    "Experiences",
    "Projects",
    // "Languages",
    "Preview",
  ];
  const optionalSteps = [3, 4];

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/information">
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
              step={step}
              stepNames={stepNames}
              optionalSteps={optionalSteps}
            />
            {getForm(
              step,
              setStep,
              numberOfExps,
              setNumberOfExps,
              stepNames.length
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
