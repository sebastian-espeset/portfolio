import React from "react";
import {
  Toolbar,
  Tooltip,
  Typography,
  AppBar,
  CssBaseline,
  Container,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import useStyles from "./styles";

export default function Banner() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar gutterBottom>
          <Typography variant="h4">
            Sebastian Espeset
            </Typography>
            <Container  align="right">
            <Tooltip title="Github">
              <GitHubIcon className={classes.icon} />
            </Tooltip>
            <Tooltip title="Email">
              <EmailIcon className={classes.icon} />
            </Tooltip>
            <Tooltip title="Twitter">
              <TwitterIcon className={classes.icon} />
            </Tooltip>
            </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
