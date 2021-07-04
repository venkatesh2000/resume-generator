import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Projects.css";

const Project = (props) => {
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
              label="Title"
              variant="outlined"
              value={values.title}
              onChange={(event) => onValueChange("title", event)}
              error={errors.title}
              helperText={errors.title && errorMessages.title}
            />
            <TextField
              label="Link"
              variant="outlined"
              value={values.link}
              onChange={(event) => onValueChange("link", event)}
              error={errors.link}
              helperText={errors.link && errorMessages.link}
            />
            <TextField
              label="Start Month and Year"
              variant="outlined"
              value={values.from}
              onChange={(event) => onValueChange("from", event)}
              error={errors.from}
              helperText={errors.from && errorMessages.from}
            />
            <TextField
              label="End Month and Year"
              variant="outlined"
              value={values.to}
              onChange={(event) => onValueChange("to", event)}
              error={errors.to}
              helperText={errors.to && errorMessages.to}
            />
            <TextField
              label="Description"
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

export default Project;
