/* eslint-disable no-eval */
import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
// import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Button from "@material-ui/core/Button";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faDivide,
  faPlus,
  faMinus,
  faEquals,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {
    padding: "0 0",
  },
  historyButton: {
    position: "absolute",
  },
  numberPadContainer: {
    maxWidth: "fit-content",
  },
  container: {
    padding: "25px 0 20px",
  },
  buttonContainer: {
    padding: "0 0",
  },
  button: {
    color: "#848484",
  },
  equalsToButtonContainer: {
    display: "flex",
    backgroundColor: "#017aff",
    maxWidth: "55%",
    marginLeft: "10px",
    borderRadius: "25px",
    position: "relative",
    bottom: "4px",
  },
  equalsToButton: {
    borderRadius: "25px",
    minWidth: "44px",
    color: "white",
  },
  dot: {
    fontSize: "6px",
  },
});

const NumberPad = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.value === 0) setValue("");
  }, [props.value]);

  function handleNumberClick(e) {
    setValue((preValue) => {
      props.number(preValue + e.currentTarget.name);
      return preValue + e.currentTarget.name;
    });
  }

  function handleBackClick() {
    setValue(value.slice(0, -1));
    props.number(value.slice(0, -1));
  }

  function handleEqualToClick() {
    try {
      setValue(eval(value).toString());
      props.number(eval(value).toString());
    } catch (err) {
      setValue("ERROR");
      props.number("ERROR");
    }
  }

  const classes = useStyles();
  const buttons = [
    <Button name="7" onClick={handleNumberClick} className={classes.button}>
      7
    </Button>,
    <Button name="8" onClick={handleNumberClick} className={classes.button}>
      8
    </Button>,
    <Button name="9" onClick={handleNumberClick} className={classes.button}>
      9
    </Button>,
    <Button name="4" onClick={handleNumberClick} className={classes.button}>
      4
    </Button>,
    <Button name="5" onClick={handleNumberClick} className={classes.button}>
      5
    </Button>,
    <Button name="6" onClick={handleNumberClick} className={classes.button}>
      6
    </Button>,
    <Button name="1" onClick={handleNumberClick} className={classes.button}>
      1
    </Button>,
    <Button name="2" onClick={handleNumberClick} className={classes.button}>
      2
    </Button>,
    <Button name="3" onClick={handleNumberClick} className={classes.button}>
      3
    </Button>,
    <Button name="*100/" onClick={handleNumberClick} className={classes.button}>
      <FontAwesomeIcon icon={faPercent} />
    </Button>,
    <Button name="0" onClick={handleNumberClick} className={classes.button}>
      0
    </Button>,
    <Button name="back" onClick={handleBackClick} className={classes.button}>
      <BackspaceOutlinedIcon className={classes.icon} />
    </Button>,
    <Button name="+" onClick={handleNumberClick} className={classes.button}>
      <FontAwesomeIcon icon={faPlus} />
    </Button>,
    <Button name="-" onClick={handleNumberClick} className={classes.button}>
      <FontAwesomeIcon icon={faMinus} />
    </Button>,
    <Button name="*" onClick={handleNumberClick} className={classes.button}>
      <ClearIcon className={classes.icon} />
    </Button>,
  ];

  return (
    <Container className={classes.root}>
      <Grid container className={classes.container}>
        <Grid
          container
          className={classes.numberPadContainer}
          item
          xs={9}
          spacing={0}
        >
          {buttons.map((button, index) => (
            <Grid className={classes.buttonContainer} key={index} item xs={4}>
              {button}
            </Grid>
          ))}
        </Grid>
        <Grid direction="column" container item xs={3} spacing={0}>
          <Grid item xs={3}>
            <Button
              name="."
              onClick={handleNumberClick}
              className={`${classes.button} ${classes.dot}`}
            >
              <FontAwesomeIcon icon={faCircle} size="xs" />
            </Button>
          </Grid>
          <Grid className={classes.equalsToButtonContainer} item xs={6}>
            <Button
              onClick={handleEqualToClick}
              name="="
              className={`${classes.button} ${classes.equalsToButton}`}
            >
              <FontAwesomeIcon icon={faEquals} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={handleNumberClick}
              name="/"
              className={classes.button}
            >
              <FontAwesomeIcon icon={faDivide} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NumberPad;
