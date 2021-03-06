import React from "react";
import { makeStyles } from "tss-react/mui";
import { Typography, Container, Box } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import Country from "../Country";
import CustomButton from "../Button";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      textAlign: "center",
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
      // gap: "5px",
      marginLeft: "120px",
    },
  };
});

export default function Group1() {
  const { classes } = useStyles();

  const plans = [
    {
      id: "1",
      icon: <AiFillStar style={{ fontSize: 14 }} />,
      btn: <CustomButton />,
      state: "CUBA",
      text1: "One root Account",
      text2: "No joint Account",
      text3: "One free Single Class",
      url: "https://images.unsplash.com/photo-1589401901631-356b7ae2f5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      icon: <AiFillStar style={{ fontSize: 14 }} />,
      btn: <CustomButton />,
      state: "NEW YORK",
      text1: "One root Account",
      text2: "No joint Account",
      text3: "One free Single Class",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      icon: <AiFillStar style={{ fontSize: 14 }} />,
      btn: <CustomButton />,
      state: "PARIS",
      text1: "One root Account",
      text2: "No joint Account",
      text3: "One free Single Class",
      url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div>
      <Box className={classes.container}>
        {plans.map((item) => (
          <Country
            key={item.id}
            icon={item.icon}
            state={item.state}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
            url={item.url}
            btn={item.btn}
          />
        ))}
      </Box>
    </div>
  );
}
