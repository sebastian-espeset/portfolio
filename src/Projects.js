import React from "react";
import {useState} from "react";
import { Box, Container, Typography, withStyles } from "@material-ui/core";
import useStyles from "./styles";
const hrfAsylum = require("./hrf-asylum.png");

const BlueTextTypography = withStyles({
  root: {
    color: "#327fa8",
  },
})(Typography);

// TODO add clickable images which send viewer to hosted site or github repo
// Figure out email situation.


export default function Projects() {
  const classes = useStyles();
 
  return (
    <>
      <Box marginTop="20px" marginLeft="47px">
        <BlueTextTypography variant="h3">P r o j e c t s</BlueTextTypography>
      </Box>
      <Container className={classes.projectContainer} maxWidth="lg">
        <img
          src={hrfAsylum}
          alt="HRF asylum login page"
          className={classes.projectImage}
        ></img>
        <Container className={classes.projectDescription}>
          <Box boxShadow={1} padding="10px">
            <BlueTextTypography variant="h5" align="left">
              Human Rights First: Asylum
            </BlueTextTypography>

            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              elementum orci velit, id interdum leo dignissim sed. Aliquam sit
              amet risus sed mi congue sollicitudin. Integer egestas volutpat
              libero vitae dignissim. Integer vel mi eleifend, mattis quam sed,
              viverra est. Integer sed leo congue, scelerisque nibh sed, posuere
              risus. Donec tempus, nisl ut laoreet posuere, tortor sapien
              pretium quam, id semper magna augue id diam. Aliquam erat
              volutpat. Donec bibendum dui a risus interdum sollicitudin. Sed
              accumsan leo semper, egestas sem ut, mollis odio. Praesent
              volutpat lobortis metus et blandit. Proin scelerisque ligula est,
              a malesuada leo auctor at. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </Typography>
            <br></br>
            <Typography variant="subtitle1">
              React | Context API | Node js | Knex js | AWS | Okta
            </Typography>
          </Box>
        </Container>
      </Container>
      <Box shadow={3} marginTop="20px" marginLeft="47px"></Box>
      <Container className={classes.projectContainer} maxWidth="lg">
      <Box boxShadow={1} padding="10px">
        <Container className={classes.projectDescription}>
          <BlueTextTypography variant="h5" align="left">
            Another Weather App
          </BlueTextTypography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            elementum orci velit, id interdum leo dignissim sed. Aliquam sit
            amet risus sed mi congue sollicitudin. Integer egestas volutpat
            libero vitae dignissim. Integer vel mi eleifend, mattis quam sed,
            viverra est. Integer sed leo congue, scelerisque nibh sed, posuere
            risus. Donec tempus, nisl ut laoreet posuere, tortor sapien pretium
            quam, id semper magna augue id diam. Aliquam erat volutpat. Donec
            bibendum dui a risus interdum sollicitudin. Sed accumsan leo semper,
            egestas sem ut, mollis odio. Praesent volutpat lobortis metus et
            blandit. Proin scelerisque ligula est, a malesuada leo auctor at.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            React | Context API | Node js | Knex js | AWS | Okta
          </Typography>
        </Container>
        </Box>
        <img
          src={hrfAsylum}
          alt="HRF asylum login page"
          className={classes.projectImage}
        ></img>
      </Container>
      <Box shadow={3} marginTop="20px" marginLeft="47px"></Box>
      <Container className={classes.projectContainer} maxWidth="lg">
        <img
          src={hrfAsylum}
          alt="HRF asylum login page"
          className={classes.projectImage}
        ></img>
        <Container className={classes.projectDescription}>
        <Box boxShadow={1} padding="10px">
          <BlueTextTypography variant="h5">To be determined</BlueTextTypography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            elementum orci velit, id interdum leo dignissim sed. Aliquam sit
            amet risus sed mi congue sollicitudin. Integer egestas volutpat
            libero vitae dignissim. Integer vel mi eleifend, mattis quam sed,
            viverra est. Integer sed leo congue, scelerisque nibh sed, posuere
            risus. Donec tempus, nisl ut laoreet posuere, tortor sapien pretium
            quam, id semper magna augue id diam. Aliquam erat volutpat. Donec
            bibendum dui a risus interdum sollicitudin. Sed accumsan leo semper,
            egestas sem ut, mollis odio. Praesent volutpat lobortis metus et
            blandit. Proin scelerisque ligula est, a malesuada leo auctor at.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            React | Context API | Node js | Knex js | AWS | Okta
          </Typography>
        </Box>
        </Container>
      </Container>
    </>
  );
}
