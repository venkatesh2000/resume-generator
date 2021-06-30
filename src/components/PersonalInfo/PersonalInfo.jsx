import "./PersonalInfo.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavButtons from "../NavButtons/NavButtons.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      width: "50ch",
    },
  },
}));

const PersonalInfo = (props) => {
  const classes = useStyles();
  const { step, setStep } = props;
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
    setErrors({
      name: false,
      email: false,
      pno: false,
      github: false,
      linkedin: false,
      website: false,
    });
    setErrorMessages({
      name: "",
      email: "",
      pno: "",
      github: "",
      linkedin: "",
      website: "",
    });

    if (!values.name.length) {
      setErrors((prev) => ({
        ...prev,
        name: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        name: "This is a required field!",
      }));
    }
    if (!values.pno.length) {
      setErrors((prev) => ({
        ...prev,
        pno: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        pno: "This is a required field!",
      }));
    }
    if (!values.email.length) {
      setErrors((prev) => ({
        ...prev,
        email: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        email: "This is a required field!",
      }));
    }
    if (values.email.length && !emailRegex.test(values.email)) {
      setErrors((prev) => ({
        ...prev,
        email: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        email: "Please enter a valid email address!",
      }));
    }
    if (values.github.length && !urlRegex.test(values.github)) {
      setErrors((prev) => ({
        ...prev,
        github: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        github: "Please enter a valid URL!",
      }));
    }
    if (values.linkedin.length && !urlRegex.test(values.linkedin)) {
      setErrors((prev) => ({
        ...prev,
        linkedin: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        linkedin: "Please enter a valid URL!",
      }));
    }
    if (values.website.length && !urlRegex.test(values.website)) {
      setErrors((prev) => ({
        ...prev,
        website: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        website: "Please enter a valid URL!",
      }));
    }
    setIsValidated(true);
  };
  const handleNext = () => {
    if (!Object.values(errors).includes(true)) {
      setStep(step + 1);
    }
  };
  React.useEffect(() => {
    if (isValidated) handleNext();
  }, [isValidated, handleNext]);

  return (
    <div>
      <Card className="card">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="Name"
              variant="outlined"
              value={values.name}
              onChange={(event) => onValueChange("name", event)}
              error={errors.name}
              helperText={errors.name && errorMessages.name}
              required
            />
            <TextField
              label="E-mail"
              variant="outlined"
              type="email"
              value={values.email}
              onChange={(event) => {
                onValueChange("email", event);
              }}
              error={errors.email}
              helperText={errors.email && errorMessages.email}
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={values.pno}
              onChange={(event) => {
                onValueChange("pno", event);
              }}
              error={errors.pno}
              helperText={errors.pno && errorMessages.pno}
              required
            />
          </form>
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="GitHub URL"
              value={values.github}
              onChange={(event) => {
                onValueChange("github", event);
              }}
              error={errors.github}
              helperText={errors.github && errorMessages.github}
              variant="outlined"
            />
            <TextField
              label="LinkedIn URL"
              value={values.linkedin}
              onChange={(event) => {
                onValueChange("linkedin", event);
              }}
              error={errors.linkedin}
              helperText={errors.linkedin && errorMessages.linkedin}
              variant="outlined"
            />
            <TextField
              label="Website URL"
              value={values.website}
              onChange={(event) => {
                onValueChange("website", event);
              }}
              error={errors.website}
              helperText={errors.website && errorMessages.website}
              variant="outlined"
            />
          </form>
        </CardContent>
      </Card>

      <NavButtons {...props} validateInfo={validateInfo} />
    </div>
  );
};

export default PersonalInfo;
