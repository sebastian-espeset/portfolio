import React from "react";
import  {Box, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
const hrfAsylum=require("./hrf-asylum.png");

export default function Projects() {
  const classes=useStyles();
  return (
    <>
    <Box shadow={3} marginTop="20px" marginLeft="47px" >
      <Typography variant="h3">
        P r o j e c t s
      </Typography>
    </Box>
    <Container  className={classes.projectContainer} maxWidth="lg">
      <img src={hrfAsylum} alt="HRF asylum login page"  className={classes.projectImage}></img>
      <Container className={classes.projectDescription}></Container>
    </Container>
    <Box shadow={3} marginTop="20px" marginLeft="47px" >
    </Box>
    <Container  className={classes.projectContainer} maxWidth="lg">
      <Container className={classes.projectDescription}></Container>
      <img src={hrfAsylum} alt="HRF asylum login page"  className={classes.projectImage}></img>
    </Container>
    </>
  );
}
