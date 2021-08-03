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
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import MusicNote from "@material-ui/icons/MusicNote";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useStyles from "./styles";
import colors from "./styles";


const theme = createTheme({
  typography: {
    fontFamily: ["Gowun Dodum", "sans-serif"].join(","),
  },
});

export default function Banner() {
  const classes = useStyles();
  const history = useHistory();

  function githubTab() {
    window.open(`https://github.com/sebastian-espeset`, "_blank");
  }
  function twitterTab() {
    window.open(`https://twitter.com/seba_espeset`, "_blank");
  }
  function soundcloudTab() {
    window.open(`https://soundcloud.com/midi-goblins`, "_blank");
  }
  function linkedInTab() {
    window.open(`https://www.linkedin.com/in/sebastian-espeset/`, "_blank");
  }
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} >
        <Toolbar>
          <Typography className={classes.firstName}>
            {" "}
            S E B A S T I A N E S P E S E T{" "}
          </Typography>
          <Container className={classes.iconContainer}>
            <IconButton>
              <Tooltip title="Github">
                <GitHubIcon onClick={githubTab} className={classes.icon} />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="LinkedIn">
                <LinkedInIcon onClick={linkedInTab} className={classes.icon} />
              </Tooltip>
            </IconButton>

            <IconButton>
              <Tooltip title="Twitter">
                <TwitterIcon onClick={twitterTab} className={classes.icon} />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Email">
                <EmailIcon className={classes.icon} />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Soundcloud">
                <MusicNote onClick={soundcloudTab} className={classes.icon} />
              </Tooltip>
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
