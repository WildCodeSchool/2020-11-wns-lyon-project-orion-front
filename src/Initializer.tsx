import {AccessToken} from './core/store/auth/auth.selectors';
import { DarkModeContext } from './core/contexts/dark-mode';
import {useDarkMode} from './core/hooks/use-dark-mode';
import useRefresh from './core/hooks/use-refresh';
import {useApollo} from './core/apollo/client';
import {ApolloProvider} from '@apollo/client';
import React, {useMemo, useRef} from 'react';
import {useSelector} from 'react-redux';

const Initializer = ({children}) => {

    const refresh = useRefresh();
    const {current} = useRef({refresh});
    const accessToken = useSelector(AccessToken);

    const {darkMode, toggle} = useDarkMode(false);
    const {client} = useApollo(accessToken, current.refresh);

    const init = useMemo(async () => !!await current.refresh(), [current]);

    return <ApolloProvider client={client}>
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {init && children}
        </DarkModeContext.Provider>
    </ApolloProvider>
}

export default Initializer;
