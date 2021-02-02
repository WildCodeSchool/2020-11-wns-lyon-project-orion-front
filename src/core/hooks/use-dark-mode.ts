import {useEffect, useState} from 'react';

export const useDarkMode = (initial: boolean) => {

    const toggle = () => setDarkMode(state => !state);
    const [darkMode, setDarkMode] = useState<boolean>(!!localStorage.getItem('theme') || initial);

    useEffect(() => {
        document.documentElement.setAttribute('class', darkMode ? 'dark' : null);
        darkMode ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
    }, [darkMode])

    return {darkMode, toggle};
}
