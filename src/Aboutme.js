import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const blinkingIcon=require("./BLINKINGICON.gif");

export default function Aboutme() {
  const classes=useStyles();

  return (
    <Box className={classes.aboutMe}>
      <Typography variant="h5">
        Hey there. My name is Sebastian Espeset. I'm a recent graduate from Lambda School's full-stack web dev track.
      </Typography>
      <br></br>
      <Typography variant="body1">
        A bit about my front end...
        React, Redux, Material UI, SASS, HTML5, Cascading Style Sheets
      </Typography>
      <Typography variant="body1">
        A bit about my back end...
        <img src={blinkingIcon} width="32px"></img>
        Node js, Knex, Express js, Postgres, Mysql, SQLite
      </Typography>
    </Box>
  );
}
