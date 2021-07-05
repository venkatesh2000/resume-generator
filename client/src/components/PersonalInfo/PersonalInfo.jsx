import "./PersonalInfo.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavButtons from "../NavButtons/NavButtons.jsx";

const PersonalInfo = (props) => {
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
    name: "",
    email: "",
    pno: "",
    github: "",
    linkedin: "",
    website: "",
  });
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    pno: false,
    github: false,
    linkedin: false,
    website: false,
  });
  const [errorMessages, setErrorMessages] = React.useState({
    name: "",
    email: "",
    pno: "",
    github: "",
    linkedin: "",
    website: "",
  });
  const [isValidated, setIsValidated] = React.useState(false);

  const onValueChange = (key, event) => {
    values[key] = event.target.value;
    setValues({ ...values });
  };
  const validateInfo = () => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    setIsValidated(false);

    const newErrors = {
      name: false,
      email: false,
      pno: false,
      github: false,
      linkedin: false,
      website: false,
    };
    const newErrorMessages = {
      name: "",
      email: "",
      pno: "",
      github: "",
      linkedin: "",
      website: "",
    };
    if (!values.name.length) {
      newErrors["name"] = true;
      newErrorMessages["name"] = "This is a required field!";
    }
    if (!values.pno.length) {
      newErrors["pno"] = true;
      newErrorMessages["pno"] = "This is a required field!";
    }
    if (!values.email.length) {
      newErrors["email"] = true;
      newErrorMessages["email"] = "This is a required field!";
    }
    if (values.email.length && !emailRegex.test(values.email)) {
      newErrors["email"] = true;
      newErrorMessages["email"] = "Please enter a valid email address!";
    }
    if (values.github.length && !urlRegex.test(values.github)) {
      newErrors["github"] = true;
      newErrorMessages["github"] = "Please enter a valid URL!";
    }
    if (values.linkedin.length && !urlRegex.test(values.linkedin)) {
      newErrors["linkedin"] = true;
      newErrorMessages["linkedin"] = "Please enter a valid URL!";
    }
    if (values.website.length && !urlRegex.test(values.website)) {
      newErrors["website"] = true;
      newErrorMessages["website"] = "Please enter a valid URL!";
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
  }, [isValidated, handleNext]);
  const init = () => {
    if ("name" in resume) {
      const newValues = {};
      newValues["name"] = resume["name"];
      newValues["email"] = resume["email"];
      newValues["pno"] = resume["pno"];
      newValues["github"] = resume["github"];
      newValues["linkedin"] = resume["linkedin"];
      newValues["website"] = resume["website"];

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
              label="Name"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.name}
              onChange={(event) => onValueChange("name", event)}
              error={errors.name}
              helperText={errors.name && errorMessages.name}
              required
            />
            <TextField
              label="E-mail"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.email}
              onChange={(event) => onValueChange("email", event)}
              error={errors.email}
              helperText={errors.email && errorMessages.email}
              required
            />
            <TextField
              label="Phone Number"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.pno}
              onChange={(event) => onValueChange("pno", event)}
              error={errors.pno}
              helperText={errors.pno && errorMessages.pno}
              required
            />
          </form>
        </CardContent>
      </Card>

      <Card className="card" variant="outlined">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="GitHub URL"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.github}
              onChange={(event) => onValueChange("github", event)}
              error={errors.github}
              helperText={errors.github && errorMessages.github}
            />
            <TextField
              label="LinkedIn URL"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.linkedin}
              onChange={(event) => onValueChange("linkedin", event)}
              error={errors.linkedin}
              helperText={errors.linkedin && errorMessages.linkedin}
            />
            <TextField
              label="Website URL"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.website}
              onChange={(event) => onValueChange("website", event)}
              error={errors.website}
              helperText={errors.website && errorMessages.website}
            />
          </form>
        </CardContent>
      </Card>

      <NavButtons {...props} validateInfo={validateInfo} />
    </div>
  );
};

export default PersonalInfo;
