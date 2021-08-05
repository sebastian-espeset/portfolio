import React from "react";
import { useState, useEffect } from "react";
import { Dialog, TextField, Button } from "@material-ui/core";
import emailjs from "emailjs-com";

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
    <div>
      <Dialog open={open}>
        <form className={classes.emailForm}>
          <TextField type="hidden" name="contact_number"></TextField>
          <TextField
            type="text"
            name="user_name"
            placeholder="Your name"
            size="small"
          ></TextField>
          <TextField
            type="email"
            name="user_email"
            placeholder="your@email.com"
            size="small"
          ></TextField>
          <TextField
            multiline
            name="message"
            rows={4}
            placeholder="send me a message!"
            variant="filled"
          ></TextField>
          <Button onClick={handleClose} variant="outlined">Close me</Button>
          <Button onClick={() => console.log("sent")}>Send the message</Button>
        </form>
      </Dialog>
    </div>
  );
}
