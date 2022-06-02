import React, { Component }  from 'react';
import {useState, useEffect} from "react";
import {NavLink} from 'react-router-dom'

import classes from "./Auth.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { login, getUser} from "../utils/auth";

const LoginForm = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(null);


  const updateEmail = (input) => {
    setEmail(input.target.value)
  }

  const updatePassword = (input) => {
    setPassword(input.target.value)
  }

  useEffect(()=>{
    getUser().then(usr => {
      console.log(usr)
      setUser(usr.data.nickname)
    }).catch(err => {
      setUser("Err")
    })
    console.log(`USE Effect`)
  },[])

  const submitHandler = async () => {
    login(email, password).then(res => {
      console.log("logedIn")
      window.location.href = `http://localhost:3000/notes`;
    }).catch(err => {
      setErrMessage(`Wrong User Name or Password `)
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
      <TextField onChange={updateEmail} id="email" label="Email" variant="standard" type="email" />
      <TextField onChange={updatePassword} id="password" label="Password" variant="standard" type="password" />
      <div>
        <Button onClick={submitHandler} variant="contained">LOGIN</Button>
        <NavLink to="/register"><Button>REGISTER</Button></NavLink>
      </div>
    </Box>
  );
};

export default LoginForm;
