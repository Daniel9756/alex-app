import React from "react";
import { makeStyles } from "tss-react/mui";
import { Typography } from "@mui/material";
import CustomButton from "./Button";

const useStyles = makeStyles()((theme) => {
  return {
    memberlist: {
      textAlign: "left",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      // marginLeft: 40,
    },
    paragraph: {
      // fontFamily: "Helvetica Neue",
      textTransform: "capitalize",
      fontSize: 12,
      opacity: "0.8",
      margin: 0,
    },
    icon: {
      color: "#fbc531",
      margin: 0,
    },
  };
});

function CardList(props: any) {
  const { classes } = useStyles();
  const { text, icon } = props;
  return (
    <div className={classes.memberlist}>
      <h5 className={classes.paragraph}>{text}</h5>
      <p className={classes.icon}>
        {icon} {icon} {icon}  {icon} 
      </p>
     
    </div>
  );
}

export default CardList;
