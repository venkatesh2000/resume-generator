import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Experiences from "./components/Experiences/Experiences.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Preview from "./components/Preview/Preview.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Information from "./pages/Information/Information.jsx";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const getPdfViewer = (resume, setPdfUrl) => {
  axios
    .post("http://localhost:5000/information/createPdf", resume)
    .then(() => {
      axios
        .get("http://localhost:5000/information/fetchPdf", {
          responseType: "arraybuffer",
        })
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          const url = URL.createObjectURL(pdfBlob);
          setPdfUrl(url);
        })
        .catch(() => {
          alert("Sorry, unable to display PDF!!");
        });
    })
    .catch(() => {
      alert("Sorry, unable to generate PDF!!");
    });
};

const storeDetails = (resume) => {
  let pathName = window.location.pathname;
  pathName = pathName.split("/")[2];
  resume["userId"] = pathName;

  axios
    .post("http://localhost:5000/information/postDetails", resume)
    .then(() => {
      alert("Details saved in the database successfully!!");
    })
    .catch(() => {
      alert("Sorry, unable to store your Resume data in the database!!");
    });
};

const getDetails = (setResume, setNumberOfExps, setReadDb) => {
  let pathName = window.location.pathname;
  pathName = pathName.split("/")[2];
  axios
    .post("http://localhost:5000/information/getDetails", {
      pathName,
    })
    .then((res) => {
      if (res.status === 200 && res.data !== null) {
        setResume({ ...res.data });
        setNumberOfExps(res.data["exps"]);
      }
    })
    .finally(() => {
      setReadDb(false);
    });
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
  setPdfUrl
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
        />
      );

    default: {
      const pdfViewer = `<iframe src="${pdfUrl}" type="application/pdf" width=50% height=1200px></iframe>`;

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
  const [readDb, setReadDb] = React.useState(true);
  const stepNames = [
    "Personal Info",
    "Education",
    "Skills",
    "Experiences",
    "Projects",
    "Preview",
  ];
  const optionalSteps = [3];
  React.useEffect(() => {
    if (step === 5) {
      getPdfViewer(resume, setPdfUrl);
      storeDetails(resume);
    }
  }, [step]);

  if (readDb) {
    getDetails(setResume, setNumberOfExps, setReadDb);
    return (
      <div className="cpb">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <NavBar />
            <Login />
          </Route>
          <Route path="/signup">
            <NavBar />
            <Signup />
          </Route>
          <Route path="/information/:userId">
            <Information
              resume={resume}
              setResume={setResume}
              step={step}
              stepNames={stepNames}
              optionalSteps={optionalSteps}
              step={step}
              setStep={setStep}
              oldNumberOfExps={oldNumberOfExps}
              setOldNumberOfExps={setOldNumberOfExps}
              numberOfExps={numberOfExps}
              setNumberOfExps={setNumberOfExps}
              maxSteps={stepNames.length}
              pdfUrl={pdfUrl}
              setPdfUrl={setPdfUrl}
              getForm={getForm}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
