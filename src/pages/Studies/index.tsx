import React from 'react';
import {NavLink} from 'react-router-dom';

const Studies = ({children}) => {
    return <div className="flex">
        <div
            className="sticky z-0 top-0 left-0 w-64 h-screen bg-gray-200 pt-32 pb-12 flex-shrink-0 px-8 flex flex-col gap-6 dark:bg-gray-950">
            <NavLink to="/studies" className="flex items-center gap-4 text-gray-500 font-medium">
                <span className="material-icons">event</span>
                <span className="text-sm">Calendrier</span>
            </NavLink>
            <NavLink to="/studies/medias" className="flex items-center gap-4 text-gray-500 font-medium">
                <span className="material-icons">folder_open</span>
                <span className="text-sm">Médiathèque</span>
            </NavLink>
            <NavLink to="/studies/Exam" className="flex items-center gap-4 text-gray-500 font-medium">
                <span className="material-icons">flaky</span>
                <span className="" text-sm>Quiz</span>
            </NavLink>
        </div>
        {children}
    </div>
}

export default Studies;
