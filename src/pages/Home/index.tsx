import React from 'react';
import HomePost from '../../containers/HomePost';

const Home = () => {
    return <div className="container mx-auto px-8 max-w-2xl grid gap-4 pt-32 pb-12">
        <div
            className="fixed bottom-0 right-0 mr-10 mb-10 w-16 bg-red-500 h-16 rounded-full
            flex items-center justify-center cursor-pointer shadow text-white">
            <span className="material-icons">add</span>
        </div>
        <div className="search">
            <span className="material-icons text-gray-500">search</span>
            <input/>
        </div>
        <HomePost/>
        <HomePost/>
        <HomePost/>
        <HomePost/>
    </div>
}

export default Home;
