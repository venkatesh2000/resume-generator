import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Experiences.css";

const Experience = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(3),
        width: "85%",
      },
    },
  }));
  const classes = useStyles();
  const { id, onChange, values, errors, errorMessages } = props;

  const onValueChange = (key, event) => {
    values[key] = event.target.value;
    onChange(id, values);
  };

  return (
    <div>
      <Card className="card" variant="outlined">
        <CardContent>
          <form className={classes.root} autoComplete="on">
            <TextField
              label="Company"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.company}
              onChange={(event) => onValueChange("company", event)}
              error={errors.company}
              helperText={errors.company && errorMessages.company}
            />
            <TextField
              label="Role"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.role}
              onChange={(event) => onValueChange("role", event)}
              error={errors.role}
              helperText={errors.role && errorMessages.role}
            />
            <TextField
              label="Start Month and Year"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.from}
              onChange={(event) => onValueChange("from", event)}
              error={errors.from}
              helperText={errors.from && errorMessages.from}
            />
            <TextField
              label="End Month and Year"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.to}
              onChange={(event) => onValueChange("to", event)}
              error={errors.to}
              helperText={errors.to && errorMessages.to}
            />
            <TextField
              label="Description"
              InputLabelProps={{ style: { fontSize: 12 } }}
              variant="outlined"
              value={values.desc}
              onChange={(event) => onValueChange("desc", event)}
              error={errors.desc}
              helperText={errors.desc && errorMessages.desc}
              multiline
              rowsMax="5"
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
