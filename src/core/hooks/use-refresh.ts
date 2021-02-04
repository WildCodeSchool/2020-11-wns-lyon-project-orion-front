import { ApolloClient, InMemoryCache } from '@apollo/client';
import mutation from '../apollo/mutations/refresh.mutation';
import { UPDATE_AUTH } from '../store/auth/auth.actions';
import { UPDATE_USER } from '../store/user/user.actions';
import { useDispatch } from 'react-redux';
import useSignOut from './use-sign-out';

const client = new ApolloClient({
    credentials: 'included',
    cache: new InMemoryCache(),
    uri: 'http://localhost:3001/graphql',
})

export const useRefresh = () => {

    const dispatch = useDispatch();
    const signOut = useSignOut();

    return async () => {
        try {
            const { data } = await client.mutate({ mutation });
            const { refresh: { user, ...auth } } = data;
            dispatch({ type: UPDATE_AUTH, payload: { auth } });
            dispatch({ type: UPDATE_USER, payload: { user } });
            return auth.accessToken;
        } catch (e) {
            await signOut();
        }
    }
}

export default useRefresh;
