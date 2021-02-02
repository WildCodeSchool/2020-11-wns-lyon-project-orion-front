import {CurrentUserFragment} from '../fragments/current-user.fragment';
import {gql} from '@apollo/client';

export default gql`
    mutation ($input: SignInInput!){
        signIn(input: $input) {
            accessToken
            expiresIn
            user {
                ...CurrentUserFragment
            }
        }
    }
    ${CurrentUserFragment}
`;
