import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CreateNoteBtn from "./CreateNoteBtn";
import classes from "./OwnedCourses.module.css";
import Note from "./Note";
const PrivateNotes = (props) => {
  const handleClick = (index) => {
    console.log(index);
    window.location.href = `http://localhost:3000/note/${index}`;
  };

  console.log(props.notes);
  return (
    <Paper elevation={3} className={classes.box}>
      <Box sx={{ flexGrow: 2 }}>
        <div className={classes.div}>
          <h2>Your Notes</h2>
          <CreateNoteBtn />
        </div>
        {props.notes &&
          props.notes.map((note) => (
            <Grid container key={note._id}>
              <Note
                noteName={note.noteName}
                content={note.content}
                _id={note._id}
              ></Note>
            </Grid>
          ))}
      </Box>
    </Paper>
  );
};

export default PrivateNotes;
