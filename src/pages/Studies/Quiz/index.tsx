import React from 'react';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
    return (
        <div className="w-full flex flex-col gap-4 pt-32 pb-12 px-8 container mx-auto">
            <h5>Quiz works</h5>
            <div className="search">
                <span className="material-icons text-gray-500">search</span>
                <input />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <NavLink to="/studies/answer">
                    <div className="card h-40 p-4">MockQuiz</div>
                </NavLink>
                <div className="card h-40 p-4">d</div>
                <div className="card h-40 p-4">d</div>
                <div className="card h-40 p-4">d</div>
                <div className="card h-40 p-4">d</div>

            </div>
        </div>)
}

export default Quiz;
