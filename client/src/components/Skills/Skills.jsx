import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavButtons from "../NavButtons/NavButtons.jsx";

const Skills = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
        width: "75ch",
      },
    },
  }));
  const classes = useStyles();
  const { resume, setResume, step, setStep } = props;
  const [values, setValues] = React.useState({
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
    s10: "",
  });
  const [errors, setErrors] = React.useState({
    s1: false,
    s2: false,
    s3: false,
    s4: false,
  });
  const [errorMessages, setErrorMessages] = React.useState({
    s1: "",
    s2: "",
    s3: "",
    s4: "",
  });
  const [isValidated, setIsValidated] = React.useState(false);

  const onValueChange = (key, event) => {
    values[key] = event.target.value;
    setValues({ ...values });
  };
  const validateInfo = () => {
    setIsValidated(false);

    const newErrors = {
      s1: false,
      s2: false,
      s3: false,
      s4: false,
    };
    const newErrorMessages = {
      s1: "",
      s2: "",
      s3: "",
      s4: "",
    };
    if (!values.s1.length) {
      newErrors["s1"] = true;
      newErrorMessages["s1"] = "This is a required field!";
    }
    if (!values.s2.length) {
      newErrors["s2"] = true;
      newErrorMessages["s2"] = "This is a required field!";
    }
    if (!values.s3.length) {
      newErrors["s3"] = true;
      newErrorMessages["s3"] = "This is a required field!";
    }
    if (!values.s4.length) {
      newErrors["s4"] = true;
      newErrorMessages["s4"] = "This is a required field!";
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

  return (
    <div>
      <Card className="card">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="Skill 1"
              variant="outlined"
              value={values.s1}
              onChange={(event) => onValueChange("s1", event)}
              error={errors.s1}
              helperText={errors.s1 && errorMessages.s1}
              required
            />
            <TextField
              label="Skill 2"
              variant="outlined"
              value={values.s2}
              onChange={(event) => onValueChange("s2", event)}
              error={errors.s2}
              helperText={errors.s2 && errorMessages.s2}
              required
            />
            <TextField
              label="Skill 3"
              variant="outlined"
              value={values.s3}
              onChange={(event) => onValueChange("s3", event)}
              error={errors.s3}
              helperText={errors.s3 && errorMessages.s3}
              required
            />
            <TextField
              label="Skill 4"
              variant="outlined"
              value={values.s4}
              onChange={(event) => onValueChange("s4", event)}
              error={errors.s4}
              helperText={errors.s4 && errorMessages.s4}
              required
            />
          </form>
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="Skill 5"
              variant="outlined"
              value={values.s5}
              onChange={(event) => onValueChange("s5", event)}
            />
            <TextField
              label="Skill 6"
              variant="outlined"
              value={values.s6}
              onChange={(event) => onValueChange("s6", event)}
            />
            <TextField
              label="Skill 7"
              variant="outlined"
              value={values.s7}
              onChange={(event) => onValueChange("s7", event)}
            />
            <TextField
              label="Skill 8"
              variant="outlined"
              value={values.s8}
              onChange={(event) => onValueChange("s8", event)}
            />
            <TextField
              label="Skill 9"
              variant="outlined"
              value={values.s9}
              onChange={(event) => onValueChange("s9", event)}
            />
            <TextField
              label="Skill 10"
              variant="outlined"
              value={values.s10}
              onChange={(event) => onValueChange("s10", event)}
            />
          </form>
        </CardContent>
      </Card>

      <NavButtons {...props} validateInfo={validateInfo} />
    </div>
  );
};

export default Skills;
