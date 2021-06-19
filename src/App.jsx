import React from "react";
import "./App.css";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper/HorizontalLinearStepper";
import TitleBar from "./components/TitleBar/TitleBar.jsx";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Experiences from "./components/Experiences/Experiences.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Languages from "./components/Languages/Languages.jsx";
import Preview from "./components/Preview/Preview.jsx";

const getForm = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <Education />;
    case 2:
      return <Skills />;
    case 3:
      return <Experiences />;
    case 4:
      return <Projects />;
    case 5:
      return <Languages />;
    default:
      return <Preview />;
  }
};

const App = () => {
  const [step, setStep] = React.useState(0);

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

      <TitleBar />
      <HorizontalLinearStepper step={step} setStep={setStep} />
      {getForm(step)}
    </div>
  );
};

export default App;
