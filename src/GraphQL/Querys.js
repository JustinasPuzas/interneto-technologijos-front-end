import {gql} from "@apollo/client";

export const GET_USER = gql`
    query{
        getUser{
            userName
            email
        }
    }
`

export const GET_USER_NOTES = gql`
    query{
        getUserNotes{
            _id
            noteName
            content
            isPublic
        }
    }

`