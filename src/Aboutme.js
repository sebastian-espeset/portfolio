import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const blinkingIcon = require("./BLINKINGICON.gif");

export default function Aboutme() {
  const classes = useStyles();

  return (
    <Container className={classes.aboutMe}>
      <Typography variant="h5">
        Hello there, my name is Sebastian Espeset.{" "}
      </Typography>
      <br></br>
      <Typography variant="body1">
        <space></space>Before the pandemic, I worked in mental health. I’ve been a caregiver
        for developmentally disabled adults, and an RA at a substance abuse
        treatment center. Most of my life has been dedicated to creative stuff
        in one form or another. This pursuit has led me through some pretty
        fantastic experiences, but with the dawning of Covid, sharing my work
        came to a grinding halt. So I was inspired to start a career in tech. I
        enjoy software engineering. I love building stuff. I love solving
        puzzles. I love the immediacy of front-end programming, and I love the
        headiness of back-end development. 
        <br></br>
        As I write this, I’m struggling
        through my first job hunt. The thing keeping me going is learning new
        stuff. I built my first fullstack app in python the other day using
        Flask. I am not proficient in programming applications in Python.
        Completing that application felt like a huge victory, and now I proudly
        display it on my site. Even though it isn’t very shiny. Mostly I work in
        React. This site is built on it. I love working in React. Juggling
        components and state is so satisfying. I’ve used material ui to style,
        which started as an arbitrary journey into google’s styling library. Now
        I’ve come to love it.
      </Typography>
    </Container>
  );
}
