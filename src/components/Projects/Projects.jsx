import React from "react";
import Project from "./Project.jsx";
import NavButtons from "../NavButtons/NavButtons.jsx";

const Projects = (props) => {
  const { resume, setResume, step, setStep, numberOfExps } = props;
  const value = {
    title: "",
    link: "",
    desc: "",
  };
  const error = {
    title: false,
    link: false,
    desc: false,
  };
  const errorMessage = {
    title: "",
    link: "",
    desc: "",
  };

  const [values, setValues] = React.useState({
    p1: { ...value },
    p2: { ...value },
    p3: { ...value },
    p4: { ...value },
  });
  const [errors, setErrors] = React.useState({
    p1: { ...error },
    p2: { ...error },
    p3: { ...error },
    p4: { ...error },
  });
  const [errorMessages, setErrorMessages] = React.useState({
    p1: { ...errorMessage },
    p2: { ...errorMessage },
    p3: { ...errorMessage },
    p4: { ...errorMessage },
  });
  const [projects, setProjects] = React.useState(0);
  const [isValidated, setIsValidated] = React.useState(false);

  const onChange = (id, value) => {
    values[id] = value;
    setValues({ ...values });
  };
  const validateInfo = () => {
    setIsValidated(false);

    let currProjects = 0;
    for (let pro in values) {
      let newError = {
        title: true,
        link: true,
        desc: true,
      };
      let newErrorMessage = {
        title: "Please provide complete info for this project!",
        link: "Please provide complete info for this project!",
        desc: "Please provide complete info for this project!",
      };

      let flag = false,
        count = 0;
      for (let key in values[pro]) {
        if (values[pro][key].length) {
          flag = true;
          ++count;
          newError[key] = false;
          newErrorMessage[key] = "";
        }
      }

      if (count === 3) ++currProjects;
      if (!flag) {
        newError = {
          title: false,
          link: false,
          desc: false,
        };
        newErrorMessage = {
          title: "",
          link: "",
          desc: "",
        };
      }
      errors[pro] = newError;
      errorMessages[pro] = newErrorMessage;
    }

    setProjects(currProjects);
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

    let minProjects = 0;
    if (numberOfExps === 0) minProjects = 2;
    else if (numberOfExps === 1) minProjects = 1;
    else minProjects = 0;

    if (!flag && projects >= minProjects) {
      setResume({ ...resume, ...values });
      setStep(step + 1);
    }
  };
  React.useEffect(() => {
    if (isValidated) handleNext();
  });
  const InitWhenExpIsOne = () => {
    const newValues = {
      p1: { ...value },
      p2: { ...value },
      p3: { ...value },
    };
    const newErrors = {
      p1: { ...error },
      p2: { ...error },
      p3: { ...error },
    };
    const newErrorMessages = {
      p1: { ...errorMessage },
      p2: { ...errorMessage },
      p3: { ...errorMessage },
    };
    setValues({ ...newValues });
    setErrors({ ...newErrors });
    setErrorMessages({ ...newErrorMessages });
  };
  const InitWhenExpIsTwo = () => {
    const newValues = {
      p1: { ...value },
      p2: { ...value },
    };
    const newErrors = {
      p1: { ...error },
      p2: { ...error },
    };
    const newErrorMessages = {
      p1: { ...errorMessage },
      p2: { ...errorMessage },
    };
    setValues({ ...newValues });
    setErrors({ ...newErrors });
    setErrorMessages({ ...newErrorMessages });
  };
  const InitWhenExpIsThree = () => {
    const newValues = {
      p1: { ...value },
    };
    const newErrors = {
      p1: { ...error },
    };
    const newErrorMessages = {
      p1: { ...errorMessage },
    };
    setValues({ ...newValues });
    setErrors({ ...newErrors });
    setErrorMessages({ ...newErrorMessages });
  };
  React.useEffect(() => {
    if (numberOfExps === 1) InitWhenExpIsOne();
    else if (numberOfExps === 2) InitWhenExpIsTwo();
    else if (numberOfExps === 3) InitWhenExpIsThree();
  }, []);

  if (numberOfExps === 0) {
    return (
      <div>
        <h3>
          As you haven't entered any experiences, please provide at least 2
          projects below
        </h3>
        <Project
          id="p1"
          onChange={onChange}
          values={values["p1"]}
          errors={errors["p1"]}
          errorMessages={errorMessages["p1"]}
        />
        <Project
          id="p2"
          onChange={onChange}
          values={values["p2"]}
          errors={errors["p2"]}
          errorMessages={errorMessages["p2"]}
        />
        <Project
          id="p3"
          onChange={onChange}
          values={values["p3"]}
          errors={errors["p3"]}
          errorMessages={errorMessages["p3"]}
        />
        <Project
          id="p4"
          onChange={onChange}
          values={values["p4"]}
          errors={errors["p4"]}
          errorMessages={errorMessages["p4"]}
        />
        <NavButtons {...props} validateInfo={validateInfo} />
      </div>
    );
  } else if (numberOfExps === 1) {
    return (
      <div>
        <h3>
          As you have entered only 1 experience, please provide at least 1
          project below
        </h3>
        <Project
          id="p1"
          onChange={onChange}
          values={values["p1"]}
          errors={errors["p1"]}
          errorMessages={errorMessages["p1"]}
        />
        <Project
          id="p2"
          onChange={onChange}
          values={values["p2"]}
          errors={errors["p2"]}
          errorMessages={errorMessages["p2"]}
        />
        <Project
          id="p3"
          onChange={onChange}
          values={values["p3"]}
          errors={errors["p3"]}
          errorMessages={errorMessages["p3"]}
        />
        <NavButtons {...props} validateInfo={validateInfo} />
      </div>
    );
  } else if (numberOfExps === 2) {
    return (
      <div>
        <Project
          id="p1"
          onChange={onChange}
          values={values["p1"]}
          errors={errors["p1"]}
          errorMessages={errorMessages["p1"]}
        />
        <Project
          id="p2"
          onChange={onChange}
          values={values["p2"]}
          errors={errors["p2"]}
          errorMessages={errorMessages["p2"]}
        />
        <NavButtons {...props} validateInfo={validateInfo} />
      </div>
    );
  } else if (numberOfExps === 3) {
    return (
      <div>
        <Project
          id="p1"
          onChange={onChange}
          values={values["p1"]}
          errors={errors["p1"]}
          errorMessages={errorMessages["p1"]}
        />
        <NavButtons {...props} validateInfo={validateInfo} />
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          As you have entered 4 experiences, there is no need for projects
        </h3>
        <h4>Please move to the next step</h4>
        <NavButtons {...props} validateInfo={validateInfo} />
      </div>
    );
  }
};

export default Projects;
