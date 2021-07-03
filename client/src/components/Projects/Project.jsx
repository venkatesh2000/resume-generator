import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Project = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
        width: "75ch",
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
      <Card className="card">
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
