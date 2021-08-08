import React from "react";
import { useState, useEffect } from "react";
import { Dialog, TextField, Button, requirePropFactory } from "@material-ui/core";
import emailjs from "emailjs-com";
import useStyles from "./styles";
import dotenv from "dotenv";

dotenv.config();

//Configure emailjs
const initialValues={
  from_name:"",
  reply_to:"",
  message:""
};

const userId = process.env.REACT_APP_EMAILJSID

export default function EmailDialogue(props) {
  const classes = useStyles();
  const [formData,setFormData]=useState(initialValues);
  const [open, isOpen] = useState(true);
  

  const changeHandler=(e)=>{
    e.preventDefault();
    const {name, value}=e.target;

    setFormData({...formData,
      [name] : value
    });
  };

  const handleClose = (e) => {
    e.preventDefault();
    isOpen(!open);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(userId)
    
    emailjs.send('from_portfolio_site','template_1m29p6p',formData,userId)
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      });
  };

  return (
    <div>
      <Dialog open={open}>
        <form className={classes.emailForm}>
          <TextField type="hidden" name="contact_number"></TextField>
          <TextField
            type="text"
            name="from_name"
            placeholder="Your name"
            size="small"
            onChange={changeHandler}
          ></TextField>
          <TextField
            type="email"
            name="reply_to"
            placeholder="your@email.com"
            size="small"
            onChange={changeHandler}
          ></TextField>
          <TextField
            multiline
            padding="none"
            name="message"
            rows={4}
            placeholder="send me a message!"
            variant="filled"
            onChange={changeHandler}
          ></TextField>
          <Button onClick={handleClose} variant="outlined">Close me</Button>
          <Button onClick={submitHandler}>Send the message</Button>
        </form>
      </Dialog>
    </div>
  );
}
