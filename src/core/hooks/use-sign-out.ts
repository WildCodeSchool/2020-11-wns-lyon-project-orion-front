import {ApolloClient, InMemoryCache} from '@apollo/client';
import mutation from '../apollo/mutations/sign-out.mutation';
import {RESET_APP} from '../store/root.reducer';
import {useDispatch} from 'react-redux';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3001/graphql',
})

const useSignOut = () => {
    const dispatch = useDispatch();

    return async () => {
        await client.mutate({mutation});
        dispatch({type: RESET_APP});
    }
}

export default useSignOut;
