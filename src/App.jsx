import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper/HorizontalLinearStepper";
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
import axios from "axios";

// const createAndDownloadPDF = (resume) => {
//   axios
//     .post("http://localhost:5000/create-pdf", resume)
//     .then(() => {
//       axios
//         .get("http://localhost:5000/fetch-pdf", { responseType: "arraybuffer" })
//         .then((res) => {
//           const pdfBlob = new Blob([res.data], { type: "application/pdf" });
//           saveAs(pdfBlob, `${resume["name"]} - Resume.pdf`);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const getPdfViewer = async (resume) => {
  await axios.post("http://localhost:5000/create-pdf", resume);
  const res = await axios.get("http://localhost:5000/fetch-pdf", {
    responseType: "arraybuffer",
  });
  const pdfBlob = new Blob([res.data], { type: "application/pdf" });
  const url = URL.createObjectURL(pdfBlob);

  return url;
};

const getPdfViewerHelper = async (resume) => {
  const url = await getPdfViewer(resume);

  return url;
};

const getForm = (
  resume,
  setResume,
  step,
  setStep,
  oldNumberOfExps,
  setOldNumberOfExps,
  numberOfExps,
  setNumberOfExps,
  maxSteps,
  pdfUrl,
  setPdfUrl,
  getUrl,
  setGetUrl
) => {
  switch (step) {
    case 0:
      return (
        <PersonalInfo
          resume={resume}
          setResume={setResume}
          step={step}
          setStep={setStep}
          maxSteps={maxSteps}
        />
      );
    case 1:
      return (
        <Education
          resume={resume}
          setResume={setResume}
          step={step}
          setStep={setStep}
          maxSteps={maxSteps}
        />
      );
    case 2:
      return (
        <Skills
          resume={resume}
          setResume={setResume}
          step={step}
          setStep={setStep}
          maxSteps={maxSteps}
        />
      );
    case 3:
      return (
        <Experiences
          resume={resume}
          setResume={setResume}
          step={step}
          setStep={setStep}
          setOldNumberOfExps={setOldNumberOfExps}
          numberOfExps={numberOfExps}
          setNumberOfExps={setNumberOfExps}
          maxSteps={maxSteps}
        />
      );
    case 4:
      return (
        <Projects
          resume={resume}
          setResume={setResume}
          step={step}
          setStep={setStep}
          oldNumberOfExps={oldNumberOfExps}
          setOldNumberOfExps={setOldNumberOfExps}
          numberOfExps={numberOfExps}
          maxSteps={maxSteps}
          setPdfUrl={setPdfUrl}
          setGetUrl={setGetUrl}
        />
      );
    // case 5:
    //   return <Languages step={step} setStep={setStep} maxSteps={maxSteps} />;
    default: {
      if (getUrl) {
        let url = getPdfViewerHelper(resume);
        url.then((res) => {
          setPdfUrl(res);
          setGetUrl(false);
        });
      }
      const pdfViewer = `<iframe src="${pdfUrl}" type="application/pdf" width=1200px height=1200px></iframe>`;
      console.log(pdfViewer);
      return (
        <Preview
          resume={resume}
          setResume={setResume}
          step={step}
          setStep={setStep}
          maxSteps={maxSteps}
          pdf={pdfViewer}
        />
      );
    }
  }
};

const App = () => {
  const [resume, setResume] = React.useState({});
  const [step, setStep] = React.useState(0);
  const [oldNumberOfExps, setOldNumberOfExps] = React.useState(0);
  const [numberOfExps, setNumberOfExps] = React.useState(0);
  const [pdfUrl, setPdfUrl] = React.useState("");
  const [getUrl, setGetUrl] = React.useState("");
  const stepNames = [
    "Personal Info",
    "Education",
    "Skills",
    "Experiences",
    "Projects",
    // "Languages",
    "Preview",
  ];
  const optionalSteps = [3];

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
              resume,
              setResume,
              step,
              setStep,
              oldNumberOfExps,
              setOldNumberOfExps,
              numberOfExps,
              setNumberOfExps,
              stepNames.length,
              pdfUrl,
              setPdfUrl,
              getUrl,
              setGetUrl
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
