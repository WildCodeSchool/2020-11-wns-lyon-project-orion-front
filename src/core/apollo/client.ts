import {ApolloClient, ApolloLink, HttpLink, InMemoryCache, split} from '@apollo/client';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';

export const useApollo = (token: string, refresh: () => Promise<string>) => {

    const httpLink = new HttpLink({uri: process.env.HTTP_URI, credentials: 'include'});

    const contextLink = setContext(() => ({headers: {authorization: 'Bearer ' + token}}));

    const wsClient = new SubscriptionClient(process.env.WS_URI, {
        reconnect: true,
        lazy: true,
        connectionParams: () => ({
            headers: {authorization: 'Bearer ' + token}
        }),
    });

    const httpAuthLink = contextLink.concat(httpLink);

    const wsAuthLink = new WebSocketLink(wsClient);

    const splitLink = split(({query}) => {
        const definition = getMainDefinition(query);
        return (definition.kind === 'OperationDefinition' && definition.operation === 'subscription');
    }, wsAuthLink, httpAuthLink);

    const onErrorLink = onError(({graphQLErrors, networkError, operation, forward}) => {
        if (networkError) console.log(`[Network error]: ${networkError}`);
        if (graphQLErrors) graphQLErrors.map(async ({message, locations, path, extensions}) => {
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            if (extensions.code === 'UNAUTHENTICATED') {
                // error code is set to UNAUTHENTICATED
                // when AuthenticationError thrown in resolver

                const newAccessToken = await refresh(); // getNewToken()
                if (!newAccessToken) return;

                // modify the operation context with a new token
                const oldHeaders = operation.getContext().headers;
                operation.setContext({headers: {...oldHeaders, authorization: newAccessToken},});

                // retry the request, returning the new observable
                return forward(operation);
            }
        });
    });

    const client = new ApolloClient({
        link: ApolloLink.concat(onErrorLink, splitLink),
        cache: new InMemoryCache(),
        defaultOptions: {
            mutate: {fetchPolicy: 'no-cache', errorPolicy: 'none'},
            query: {fetchPolicy: 'no-cache', errorPolicy: 'none'},
        }
    });

    return {client, wsClient};
}
