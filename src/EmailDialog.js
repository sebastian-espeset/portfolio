import React from "react";
import { useState, useEffect } from "react";
import { Dialog, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";

//Configure emailjs

export default function EmailDialogue(props) {
  const classes = useStyles();

  const [open, isOpen] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    isOpen(!open);
  };

  return (
    <div className={classes.emailForm}>
      <Dialog open={open}>
        <TextField></TextField>
        <Button onClick={handleClose}>Close me</Button>
        <Button onClick={()=>console.log("sent")}>Send the message</Button>
      </Dialog>
      
    </div>
  );
}
