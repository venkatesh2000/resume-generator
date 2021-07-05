import React from "react";
import Experience from "./Experience.jsx";
import NavButtons from "../NavButtons/NavButtons.jsx";

const Experiences = (props) => {
  const {
    resume,
    setResume,
    step,
    setStep,
    setOldNumberOfExps,
    numberOfExps,
    setNumberOfExps,
  } = props;
  const value = {
    company: "",
    role: "",
    from: "",
    to: "",
    desc: "",
  };
  const error = {
    company: false,
    role: false,
    from: false,
    to: false,
    desc: false,
  };
  const errorMessage = {
    company: "",
    role: "",
    from: "",
    to: "",
    desc: "",
  };
  const [values, setValues] = React.useState({
    e1: { ...value },
    e2: { ...value },
    e3: { ...value },
    e4: { ...value },
  });
  const [errors, setErrors] = React.useState({
    e1: { ...error },
    e2: { ...error },
    e3: { ...error },
    e4: { ...error },
  });
  const [errorMessages, setErrorMessages] = React.useState({
    e1: { ...errorMessage },
    e2: { ...errorMessage },
    e3: { ...errorMessage },
    e4: { ...errorMessage },
  });
  const [exps, setExps] = React.useState(0);
  const [isValidated, setIsValidated] = React.useState(false);

  const onChange = (id, value) => {
    values[id] = value;
    setValues({ ...values });
  };
  const validateInfo = () => {
    setIsValidated(false);

    let currExps = 0;
    for (let exp in values) {
      let newError = {
        company: true,
        role: true,
        from: true,
        to: true,
        desc: true,
      };
      let newErrorMessage = {
        company: "Please provide complete info for this experience!",
        role: "Please provide complete info for this experience!",
        from: "Please provide complete info for this experience!",
        to: "Please provide complete info for this experience!",
        desc: "Please provide complete info for this experience!",
      };

      let flag = false,
        count = 0;
      for (let key in values[exp]) {
        if (values[exp][key].length) {
          flag = true;
          ++count;
          newError[key] = false;
          newErrorMessage[key] = "";
        }
      }

      if (count === 5) ++currExps;
      if (!flag) {
        newError = {
          company: false,
          role: false,
          from: false,
          to: false,
          desc: false,
        };
        newErrorMessage = {
          company: "",
          role: "",
          from: "",
          to: "",
          desc: "",
        };
      }
      errors[exp] = newError;
      errorMessages[exp] = newErrorMessage;
    }

    setExps(currExps);
    setErrors({ ...errors });
    setErrorMessages({ ...errorMessages });
    setIsValidated(true);
  };
  const handleNext = () => {
    let flag = false;
    for (let error of Object.values(errors)) {
      if (Object.values(error).includes(true)) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      setOldNumberOfExps(numberOfExps);
      setNumberOfExps(exps);
      setResume({ ...resume, ...values, exps: exps });
      setStep(step + 1);
    }
  };
  React.useEffect(() => {
    if (isValidated) handleNext();
  });
  const init = () => {
    const newValues = {};
    for (let i = 1; i <= 4; ++i) {
      if (`e${i}` in resume) newValues[`e${i}`] = resume[`e${i}`];
    }

    if (Object.keys(newValues).length) setValues({ ...newValues });
  };
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Experience
        id="e1"
        onChange={onChange}
        values={values["e1"]}
        errors={errors["e1"]}
        errorMessages={errorMessages["e1"]}
      />
      <Experience
        id="e2"
        onChange={onChange}
        values={values["e2"]}
        errors={errors["e2"]}
        errorMessages={errorMessages["e2"]}
      />
      <Experience
        id="e3"
        onChange={onChange}
        values={values["e3"]}
        errors={errors["e3"]}
        errorMessages={errorMessages["e3"]}
      />
      <Experience
        id="e4"
        onChange={onChange}
        values={values["e4"]}
        errors={errors["e4"]}
        errorMessages={errorMessages["e4"]}
      />
      <NavButtons {...props} validateInfo={validateInfo} />
    </div>
  );
};

export default Experiences;
