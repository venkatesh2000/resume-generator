import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./PersonalInfo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      width: "50ch",
    },
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className="card">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              required
            />
          </form>
        </CardContent>
      </Card>

      <Card className="card">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              id="outlined-basic"
              label="GitHub URL"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="LinkedIn URL"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Website URL"
              variant="outlined"
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfo;
