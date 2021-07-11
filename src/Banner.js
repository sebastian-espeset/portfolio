import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  Toolbar,
  Tooltip,
  Typography,
  AppBar,
  CssBaseline,
  Container,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import useStyles from "./styles";

export default function Banner() {
  const classes = useStyles();
  const history = useHistory();

  function githubTab() {
    window.open(`https://github.com/sebastian-espeset`,'_blank');
  }
  function twitterTab() {
    window.open(`https://twitter.com/seba_espeset`,'_blank');
  }
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar gutterBottom>
          <Typography variant="h4">Sebastian Espeset</Typography>
          <Container align="right">
            <IconButton >
              <Tooltip title="Github">
                <GitHubIcon
                  onClick={githubTab}
                  className={classes.icon}
                />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Email">
                <EmailIcon className={classes.icon} />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Twitter">
                <TwitterIcon onClick={twitterTab} className={classes.icon} />
              </Tooltip>
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
