import {Link} from 'react-router-dom'
import React, { Component, useEffect, useState }  from 'react';
import PrivateNotes from './PrivateNotes';
import classes from './CourseList.module.css'
import {useQuery, gql} from "@apollo/client";
import {GET_USER_NOTES} from "../../GraphQL/Querys"
const NoteList = (props) => {

    const {error, loading, data, refetch} = useQuery(GET_USER_NOTES)

  if(loading){
    return <div>Loading ...</div>
  }else if(data){
    return (
      <section>
        <ul className={classes.ul}>
          <PrivateNotes notes={data.getUserNotes}/>
          {/* {props.courses.moderatedCourses?.length > 0 && <ModeratedCourses courses={props.courses.moderatedCourses}/>}
          {props.courses.courses?.length > 0 && <Courses courses={props.courses.courses}/>} */}
        </ul>
      </section>
    );
  }else if(error){
    return <div>ERROR</div>
  }
};

export default NoteList;
