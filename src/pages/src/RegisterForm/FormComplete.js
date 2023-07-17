import React, { Fragment, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    padding: theme.spacing(5, 0),
  },
}));

export default () => {
  const classes = useStyles();
  const reload = () => {
    window.location.href = "/";
  };

  return (
    <Fragment>
      <Typography variant="h5" className={classes.title}>
        Congratulations! You completed registration process.
      </Typography>
      <Button variant="contained" color="primary" onClick={reload}>
        Go to Home
      </Button>
    </Fragment>
  );
};
