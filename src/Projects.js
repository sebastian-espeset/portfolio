import React from "react";
import { useState } from "react";
import { Box, Container, Typography, withStyles } from "@material-ui/core";
import useStyles from "./styles";
const hrfAsylum = require("./hrf-asylum.png");

const BlueTextTypography = withStyles({
  root: {
    color: "#327fa8",
  },
})(Typography);

// TODO add clickable images which send viewer to hosted site or github repo

// Add responsiveness

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
              HRF-Asylum is a crowd sourced database collection for lawyers
              representing asylum seekers. Front end is built on react, backend
              is Node js. Basically, the user uploads a pdf of a case file and
              the data science magic scrubs those pdfs, redacts private
              information, and then uploads that pdf to an AWS s3 bucket. The
              information we chose to keep gets stored in a postgres database.
              When a user wants to view information, it’s served to them in a
              graph, or a table. I dove into the back-end first. My team and I
              were handed a big pile of legacy code. 40% of the code was
              redundant or unused; routes that led nowhere, models that used
              iteration rather than sql queries, it was kind of a mess. So my
              first job was figuring out the data flow from the front end to AWS
              s3 storage. I had to learn about Okta’s authentication flow, and
              the authentication process involved in saving files to AWS s3. My
              team and I ironed out the routes and queries. The front-end commit
              I had was simple but necessary. In the code we were given, there
              was an axios in four components that checked local storage for an
              authentication token every time it was called. I simplified these
              calls by writing an axiosWithAuth utility function and importing
              it wherever it was needed.
            </Typography>
            <br></br>
            <Typography variant="subtitle1">
              React | Context API | Node js | Knex js | AWS | Okta
            </Typography>
          </Box>
        </Container>
      </Container>
      {/* <Box shadow={3} marginTop="20px" marginLeft="47px"></Box>
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
            <BlueTextTypography variant="h5">
              To be determined
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
      </Container> */}
    </>
  );
}
