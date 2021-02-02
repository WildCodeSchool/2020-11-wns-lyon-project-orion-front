import {createContext} from 'react';

export const DarkModeContext = createContext<{darkMode: boolean, toggle: () => void}>(null);
