import React from "react";
import styles from "./Display.module.css";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  button: {
    right: "-109px",
    position: "relative",
    zIndex: 10,
    bottom: "4px",
    minWidth: 0,
    borderRadius: "50%",
    color: "white",
  },
  textField: {
    position: "absolute",
    right: "15px",
    top: "130px",
  },
});

const Display = (props) => {
  const classes = useStyles();

  return (
    <>
      <section className={styles.semicircle}>
        <section>
          <div className={styles.top_wave}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className={styles.top_svg}
            >
              <path
                d="M-9.37,129.56 C192.66,207.52 256.43,-73.71 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
                className={styles.top_svg_path}
              ></path>
            </svg>
          </div>
        </section>
      </section>
      <TextField
        className={classes.textField}
        InputProps={{
          disableUnderline: true,
          onKeyDown: (event) => event.preventDefault(),
        }}
        inputProps={{
          style: { textAlign: "right", color: "white", fontSize: "2.5rem" },
          max: 4,
        }}
        value={props.value}
      />
      <Button
        onClick={() => props.number((preValue) => 0)}
        className={classes.button}
      >
        <HistoryOutlinedIcon />
      </Button>
    </>
  );
};

export default Display;
