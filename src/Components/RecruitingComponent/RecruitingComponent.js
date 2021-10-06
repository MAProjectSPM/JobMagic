import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
export default function Recruiting(props) {
  const useStyles = makeStyles(theme => ({
    background:{
        backgroundColor: "#eef4fb",
        height: "25vh",
        width: "100%"
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