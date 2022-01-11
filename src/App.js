import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import NumberPad from "./Components/NumberPad";
import Container from "@material-ui/core/Container";
import styles from "./App.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 0,
    boxShadow: "4px 3px 7px 2px #00000040",
    borderRadius: "25px",
    background: "#f1f5f8",
  },
  icon: {
    stroke: "black",
    strokeWidth: 1.7,
  },
});

function App() {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  function getNumber(receivedValue) {
    setValue(receivedValue);
  }

  return (
    <div className={styles.container}>
      <Container className={classes.root}>
        <Display number={getNumber} value={value} />
        <NumberPad number={getNumber} value={value} />
      </Container>
    </div>
  );
}

export default App;
