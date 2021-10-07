import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import './recruiting.css';

export default function Recruiting(props) {
  const useStyles = makeStyles(theme => ({
    background:{
        backgroundColor: "#eef4fb",
        height: "25vh",
        width: "100%",
        boxShadow: "0px 2px 8px #b9abab"
    }
  }));
  const classes = useStyles();
  return (
    <>
      <div className={classes.background} >
        {props.children}
      </div>
    </>
  )
}