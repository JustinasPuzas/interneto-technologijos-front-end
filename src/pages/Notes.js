import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import NoteList from "../components/Notes/NoteList";
import CircularProgress from "@mui/material/CircularProgress";
import {getCourses } from "../components/utils/courses";
import {useQuery, gql} from "@apollo/client";
import {GET_USER} from '../GraphQL/Querys'
const NotesPage = () => {
  const [courses, setCourses] = useState({
    ownedCourses: [],
    moderatedCourses: [],
    courses: [],
  });

  const {error, loading, data} = useQuery(GET_USER)

  if (loading) {
    return (
      <section>
          <CircularProgress />
      </section>
    );
  } else if (error){
    window.location.href = `http://localhost:3000/login`;
    return null
  }else if (data.getUser) {
    const {userName} = data.getUser
    return (
      <section>
        <h1>Hello</h1>
        <h1>{userName}</h1>
        <NoteList courses={courses} />
      </section>
    );
  }else{
    window.location.href = `http://localhost:3000/login`;
    return null
  }
};

export default NotesPage;
