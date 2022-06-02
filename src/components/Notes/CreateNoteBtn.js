import React, { Component, useEffect, useState }  from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { createCourse } from '../utils/courses';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import {useMutation} from "@apollo/client"
import {CREATE_NOTE} from "../../GraphQL/Mutations"

const CreateNoteBtn = () => {

    const [createNote, {error}] = useMutation(CREATE_NOTE)


    const clickHandler = async (props) => {
        try{
            console.log(`GEH`)
            await createNote({
                variables:{
                    noteName: "New Note",
                    content: "Type here"
                }
            })
    
            if(error){
                console.log(error);
            }
        }catch (err){
            console.log(err)
        }
    }

  return (
      <Button onClick={clickHandler} variant="contained" startIcon={<AddIcon />}>Create Note</Button>
  );
};

export default CreateNoteBtn;
