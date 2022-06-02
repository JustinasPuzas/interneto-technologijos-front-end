import React, { Component }  from 'react';
import {useState} from "react";
import {NavLink} from 'react-router-dom'

import classes from "./Auth.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { register } from "../utils/auth";

const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [err, setErr] = useState(false);;
  const [errMessage, setErrMessage] = useState(null);
  const validatePassword = (password) => {
    if(password1.length > 0 && password != password1 ) setErr(true)
    else setErr(false)
  };

  const updatePassword1 = (input) => {
    setPassword1(input.target.value)
    validatePassword(input.target.value)
  }

  const updatePassword2 = (input) => {
    setPassword2(input.target.value)
    validatePassword(input.target.value)
  }

  const updateUserName = (input) => {
    setUserName(input.target.value);
  }

  const updateEmail = (input) => {
    setEmail(input.target.value)
  }

  const submitHandler = async () => {
    register(userName, email, password1).then(res => {
      console.log(res)
      setErrMessage(`${res.data.userName}`)
      
      if(userName === res.data.userName){
        window.location.href = `http://localhost:3000/login`
      }
    }).catch(err => {
      console.log(err)
      setErrMessage(`${err}`)
    })
  }

  return (
    <Box
    className={classes.form}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
    //   autoComplete="off"
    >
      <h4>{errMessage}</h4>
      <TextField onChange={updateUserName} id="userName" label="Username" variant="standard" />
      <TextField onChange={updateEmail} id="email" label="Email" variant="standard" type="email"/>
      <TextField onChange={updatePassword1} id="password1" label="Password" variant="standard" type="password" />
      <TextField onChange={updatePassword2} error={err} id="password2" label="Repeat password" variant="standard" type="password" />
      <div>
        <Button onClick={submitHandler} variant="contained">REGISTER</Button>
        <NavLink to="/login"><Button>LOGIN</Button></NavLink>
      </div>
    </Box>
  );
};

export default RegistrationForm;
