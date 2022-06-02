import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import PrivateNotes from "./PrivateNotes";
import { GET_NOTE } from "../../GraphQL/Querys";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import classes from "./Note.module.css";
import {useMutation, gql} from "@apollo/client";
import {UPDATE_NOTE_CONTENT, UPDATE_NOTE_NAME, DELETE_NOTE} from "../../GraphQL/Mutations"

const Note = (props) => {
    const [hide, setHide] = useState(false)
  const [noteName, setNoteName] = useState(props.noteName);
  const [content, setContent] = useState(props.content);
  const [updateContent, {error, loading, data}] = useMutation(UPDATE_NOTE_CONTENT);
  const [updateNoteName, {errorNote, loadingNote, dataNote}] = useMutation(UPDATE_NOTE_NAME);
  const [deleteNote, {errorDel,}] = useMutation(DELETE_NOTE);

  //const {error, loading, data} = useQuery(GET_NOTE)

  const handleNoteNameChange = async (name) => {
    console.log(name.target.value)
    setNoteName(name.target.value)
    updateNoteName({
        variables:{
            _id: props._id,
            noteName: name.target.value,
        }
    })
  }

  const handleNoteChange = async (content) => {
      console.log(content.target.value)
      setContent(content.target.value)
      updateContent({
        variables:{
            _id: props._id,
            content: content.target.value,
        }
    })
  }

  const handleDeleteClick = async () => {
    deleteNote({
        variables:{
            _id: props._id,
        }
    })
    setHide(true)
  }
  if(!hide){
    return (
        <div className={classes.div}>
          <TextField label="Title" defaultValue={noteName} onChange={handleNoteNameChange}></TextField>
          <TextField
            className={classes.content}
            label="Content"
            defaultValue={content}
            multiline
            onChange={handleNoteChange}
          ></TextField>
          <Button onClick={handleDeleteClick}>Delete</Button>
        </div>
      );
  }else{
      return null
  }
};

export default Note;
