import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import "./NavButtons.css";

const NavButtons = (props) => {
  const { setResume, step, setStep, maxSteps, validateInfo } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      float: "right",
      fontSize: 16,
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();

  const handleBack = () => setStep(step - 1);
  const handleReset = () => {
    let pathName = window.location.pathname;
    pathName = pathName.split("/")[2];

    axios
      .post("http://localhost:5000/information/deleteDetails", { pathName })
      .then((res) => {
        alert(res.data);
      })
      .catch((_) => {
        alert("Sorry, unable to delete resume details from the database!!");
      })
      .finally(() => {
        setResume({});
        setStep(0);
      });
  };

  return (
    <div className="buttons">
      {step === maxSteps - 1 ? (
        <div className="buttons">
          <Button onClick={handleReset} className="normal-button">
            Reset
          </Button>
          <Button onClick={handleBack} className="normal-button">
            Back
          </Button>
          <Typography className={classes.instructions}>
            You&apos;re Done!!
          </Typography>
          {/* <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleDownload(resume);
            }}
            className="highlighted-button"
          >
            Download
          </Button> */}
        </div>
      ) : (
        <div className="buttons">
          <Button
            disabled={step === 0}
            onClick={handleReset}
            className="normal-button"
          >
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
