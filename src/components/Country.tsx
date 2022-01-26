import React from "react";
import {
  Typography,
  CardContent,
  Card,
  Box,
  CardMedia,
  CardActions,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import CustomButton from "./Button";
import CardList from "./CardList";
import { AiFillStar } from "react-icons/ai";

// const useStyles = makeStyles()((theme) => {
//     return {
//         card: {
//             width: "270px",
//             height: "450px",
//             margin: theme.spacing(0.5),
//             elevation: "0",
//           },

//         why: {
//             textAlign: "flex-start",
//             fontWeight: "bold",
//             fontFamily: "serif",
//             textTransform: "capitalize",
//             marginTop: theme.spacing(1),
//             opacity: "0.5",
//             color: "#6ab04c",
//           },
//           container: {
//             textAlign: "center",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           },

//           memberlist: {
//             textAlign: "center",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           },
//           title: {
//             marginBottom: theme.spacing(0.5),
//           },
//           status: {
//             fontFamily: "Helvetica Neue",
//             color: "#130f40",
//             fontWeight: "bold",
//           },
//           membermark: {
//             textAlign: "center",
//             fontSize: 12,
//             color: "#6ab04c",
//             marginRight: 8,
//             fontWeight: "bold",
//           },

//           paragraph: {
//             fontFamily: "Helvetica Neue",
//             textTransform: "capitalize",
//             fontSize: "1rem",
//             opacity: "0.8",
//           },
//           icon: {
//             fontSize: 120,
//             color: "#130f40",
//             borderRadius: "50%",
//             opacity: "0.8",
//             textAlign: "center",
//           },

//           "@media (max-width: 960px)": {
//             card: {
//               width: "360px",
//               height: "500px",
//             },
//       },
//     };
//   });

const useStyles = makeStyles()((theme) => {
  return {
    card: {
      width: "240px",
      height: "450px",
      elevation: "0",
      textAlign: 'center',
    },
    why: {
      textAlign: "left",
      fontSize: 15,
      textTransform: "capitalize",
      marginTop: theme.spacing(1),
      opacity: "0.5",
      color: "#b71540",
    },
    btn: {     
      textAlign: "center",
      marginLeft: 65,
    },
    text: {
      textAlign: "left",
    },
  };
});

function Country(props: any) {
  const { classes } = useStyles();
  const { state, text1, text2, text3, icon, url, btn } = props;

  return (

      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="200"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <div>
            <h2 className={classes.why}>{state}</h2>
          </div>

          <h4 className={classes.text}>
            <CardList icon={icon} text={text1} />
            <CardList icon={icon} text={text2} />
            <CardList icon={icon} text={text3} />
          </h4>
        </CardContent>
        <CardActions className={classes.btn}>
          <div>{btn}</div>
        </CardActions>
      </Card>
   
  );
}



export default Country;
