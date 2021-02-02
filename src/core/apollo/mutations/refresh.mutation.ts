import {CurrentUserFragment} from '../fragments/current-user.fragment';
import {gql} from '@apollo/client';

export default gql`
    mutation {
        refresh {
            accessToken
            expiresIn
            user {
                ...CurrentUserFragment
            }
        }
    }
    ${CurrentUserFragment}
`;
