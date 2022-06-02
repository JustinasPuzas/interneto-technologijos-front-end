import {gql} from "@apollo/client";

export const CREATE_NOTE = gql`
mutation createNote($noteName: String! $content: String!) {
    createNote(
        noteName: $noteName
        content: $content
    ) {
        ownerId
        noteName
        content
    }
}
`

export const UPDATE_NOTE_CONTENT = gql`
mutation updateNoteContent($_id: String! $content: String!) {
    updateNoteContent(
        _id: $_id
        content: $content
    ) {
        ownerId
        noteName
        content
    }
}
`

export const UPDATE_NOTE_NAME = gql`
mutation updateNoteName($_id: String! $noteName: String!) {
    updateNoteName(
        _id: $_id
        noteName: $noteName
    ) {
        ownerId
        noteName
        content
    }
}
`

export const DELETE_NOTE = gql`
mutation deleteNote($_id: String!) {
    deleteNote(
        _id: $_id
    ) {
        ownerId
        noteName
        content
    }
}
`
