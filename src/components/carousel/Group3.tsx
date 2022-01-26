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
    //   gap: "4px",
      marginLeft: "120px"

    },
  };
});

export default function Group3() {
  const { classes } = useStyles();

  const plans = [
    {
      id: "1",
      icon: <AiFillStar style={{ fontSize: 14 }} />,
      btn: <CustomButton />,
      state: "CHICAGO",
      text1: "One root Account",
      text2: "No joint Account",
      text3: "One free Single Class",
      url: "https://images.unsplash.com/photo-1417716146732-918825b83fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "2",
      icon: <AiFillStar style={{ fontSize: 14 }} />,
      btn: <CustomButton />,
      state: "BERLIN",
      text1: "One root Account",
      text2: "No joint Account",
      text3: "One free Single Class",
      url: "https://images.unsplash.com/photo-1462007895615-c8c073bebcd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "3",
      icon: <AiFillStar style={{ fontSize: 14 }} />,
      btn: <CustomButton />,
      state: "ROME",
      text1: "One root Account",
      text2: "No joint Account",
      text3: "One free Single Class",
      url: "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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
