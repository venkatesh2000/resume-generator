import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavButtons from "../NavButtons/NavButtons.jsx";
import "./Education.css";

const Education = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(3),
        width: "85%",
      },
    },
  }));
  const classes = useStyles();
  const { resume, setResume, step, setStep } = props;
  const [values, setValues] = React.useState({
    college: "",
    degree: "",
    cgpa: "",
    from: "",
    to: "",
  });
  const [errors, setErrors] = React.useState({
    college: false,
    degree: false,
    cgpa: false,
    from: false,
    to: false,
  });
  const [errorMessages, setErrorMessages] = React.useState({
    college: "",
    degree: "",
    cgpa: "",
    from: "",
    to: "",
  });
  const [isValidated, setIsValidated] = React.useState(false);

  const onValueChange = (key, event) => {
    values[key] = event.target.value;
    setValues({ ...values });
  };
  const validateInfo = () => {
    setIsValidated(false);

    const newErrors = {
      college: false,
      degree: false,
      cgpa: false,
      from: false,
      to: false,
    };
    const newErrorMessages = {
      college: "",
      degree: "",
      cgpa: "",
      from: "",
      to: "",
    };

    if (!values.college.length) {
      newErrors["college"] = true;
      newErrorMessages["college"] = "This is a required field!";
    }
    if (!values.degree.length) {
      newErrors["degree"] = true;
      newErrorMessages["degree"] = "This is a required field!";
    }
    if (!values.cgpa.length) {
      newErrors["cgpa"] = true;
      newErrorMessages["cgpa"] = "This is a required field!";
    }
    if (isNaN(values.cgpa)) {
      newErrors["cgpa"] = true;
      newErrorMessages["cgpa"] = "Please enter a valid number!";
    }
    if (!values.from.length) {
      newErrors["from"] = true;
      newErrorMessages["from"] = "This is a required field!";
    }
    if (isNaN(values.from)) {
      newErrors["from"] = true;
      newErrorMessages["from"] = "Please enter a valid number!";
    }
    if (!values.to.length) {
      newErrors["to"] = true;
      newErrorMessages["to"] = "This is a required field!";
    }
    if (isNaN(values.to)) {
      newErrors["to"] = true;
      newErrorMessages["to"] = "Please enter a valid number!";
    }

    setErrors({ ...newErrors });
    setErrorMessages({ ...newErrorMessages });
    setIsValidated(true);
  };
  const handleNext = () => {
    if (!Object.values(errors).includes(true)) {
      setResume({ ...resume, ...values });
      setStep(step + 1);
    }
  };
  React.useEffect(() => {
    if (isValidated) handleNext();
  });
  const init = () => {
    if ("college" in resume) {
      const newValues = {};
      newValues["college"] = resume["college"];
      newValues["degree"] = resume["degree"];
      newValues["cgpa"] = resume["cgpa"];
      newValues["from"] = resume["from"];
      newValues["to"] = resume["to"];

      setValues({ ...newValues });
    }
  };
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Card className="card" variant="outlined">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="College"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.college}
              onChange={(event) => onValueChange("college", event)}
              error={errors.college}
              helperText={errors.college && errorMessages.college}
              required
            />
            <TextField
              label="Degree"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.degree}
              onChange={(event) => onValueChange("degree", event)}
              error={errors.degree}
              helperText={errors.degree && errorMessages.degree}
              required
            />
            <TextField
              label="CGPA"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.cgpa}
              onChange={(event) => onValueChange("cgpa", event)}
              error={errors.cgpa}
              helperText={errors.cgpa && errorMessages.cgpa}
              required
            />
            <TextField
              label="Joining Year"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.from}
              onChange={(event) => onValueChange("from", event)}
              error={errors.from}
              helperText={errors.from && errorMessages.from}
              required
            />
            <TextField
              label="Year of Graduation"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.to}
              onChange={(event) => onValueChange("to", event)}
              error={errors.to}
              helperText={errors.to && errorMessages.to}
              required
            />
          </form>
        </CardContent>
      </Card>
      <NavButtons {...props} validateInfo={validateInfo} />
    </div>
  );
};

export default Education;
