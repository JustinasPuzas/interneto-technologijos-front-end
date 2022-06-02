import React, { Component }  from 'react';
import { Button } from '@mui/material';
import {Link, NavLink} from 'react-router-dom'
import { useState, useEffect } from "react";
import classes from './MainHeader.module.css'
import { logout } from './utils/auth';
import {getUser} from "./utils/auth";

const MainHeader = () => {

  const [user, setUser] = useState(null);
  const logoutClickHandler = () => {
    logout().then(res => {
      window.location.href = `http://localhost:3000/login`;
    }).catch(err => {
      console.log(err)
    })
  }

  const loginClickHandler = () => {
      window.location.href = `http://localhost:3000/login`;
  }

  useEffect(()=> {
    getUser().then( res => {

      setUser(res)

    }).catch(err => {
      console.log(err)
      //window.location.href = `http://localhost:3000/login`;
    })
  }, [])

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/notes">Notes</NavLink>
          </li>
          <li>
            {user && <Button onClick={logoutClickHandler} variant="contained">Logout</Button>}
            {!user && <Button onClick={loginClickHandler} variant="contained">Login</Button>}
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

export default MainHeader;
