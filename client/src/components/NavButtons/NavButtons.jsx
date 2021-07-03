import Button from "@material-ui/core/Button";
import "./NavButtons.css";

const NavButtons = (props) => {
  const { step, setStep, maxSteps, validateInfo, resume, handleDownload } =
    props;

  const handleBack = () => setStep(step - 1);
  const handleReset = () => setStep(0);

  return (
    <div className="buttons">
      {step === maxSteps - 1 ? (
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
            onClick={() => {
              handleDownload(resume);
            }}
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
            onClick={validateInfo}
            className="highlighted-button"
          >
            {step === maxSteps - 2 ? "Finish" : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavButtons;
