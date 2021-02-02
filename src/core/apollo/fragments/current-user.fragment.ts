import {gql} from '@apollo/client';

export const CurrentUserFragment = gql`fragment CurrentUserFragment on User {
    id
    pid
    roles
    email
    gender
    lastName
    firstName
    createdAt
    updatedAt
}`
