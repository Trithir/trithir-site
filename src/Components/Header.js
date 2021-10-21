import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import TemporaryDrawer from './dashboard/NewDash';
import TrithirLogo256 from './images/TrithirLogo256.png';



const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={TrithirLogo256} alt="Eric Stevens" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["The Eric Stevens"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Mobile Developer",
            "Unreal Developer",
            "Music Player",
            "Awesome Duder",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          />
      </Typography>
      <TemporaryDrawer />
    </Box>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));