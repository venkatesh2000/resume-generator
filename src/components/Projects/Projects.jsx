import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavButtons from "../NavButtons/NavButtons.jsx";

const Projects = (props) => {
  const { step, setStep, numberOfExps } = props;
  const validateInfo = () => {};

  return (
    <div>
      <NavButtons {...props} validateInfo={validateInfo} />
    </div>
  );
};

export default Projects;
