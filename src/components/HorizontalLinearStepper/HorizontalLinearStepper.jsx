import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./HorizontalLinearStepper.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const HorizontalLinearStepper = (props) => {
  const classes = useStyles();
  const { step, setStep } = props;
  const stepNames = [
    "Personal Info",
    "Skills",
    "Education",
    "Experiences",
    "Projects",
    "Languages",
    "Preview",
  ];
  const optionalSteps = [3, 4];

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const isStepOptional = (step) => optionalSteps.includes(step);
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleReset = () => setStep(0);

  return (
    <div className={classes.root}>
      <Stepper activeStep={step}>
        {stepNames.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="buttons">
        {step === stepNames.length - 1 ? (
          <div className="buttons">
            {/* <Typography className={classes.instructions}>
              All steps completed - you&apos;re done!!
            </Typography> */}
            <Button onClick={handleReset} className="normal-button">
              Reset
            </Button>
            <Button onClick={handleBack} className="normal-button">
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {}}
              className="highlighted-button"
            >
              Download
            </Button>
          </div>
        ) : (
          <div className="buttons">
            <Button onClick={handleReset} className="normal-button">
              Reset
            </Button>
            <Button
              disabled={step === 0}
              onClick={handleBack}
              className="normal-button"
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className="highlighted-button"
            >
              {step === stepNames.length - 2 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalLinearStepper;
