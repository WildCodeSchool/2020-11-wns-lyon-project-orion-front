import React from 'react';

const HomePost = () => {
    return <div className="card p-6 flex">
        <div className="mr-6">
            <div className="w-14 h-14 flex overflow-hidden rounded-full cursor-pointer">
                <img alt="" className="object-cover"
                     src="https://image.freepik.com/vecteurs-libre/illustration-conception-logo-astronaute_105179-74.jpg"/>
            </div>
        </div>
        <div className="">
            <div className="flex items-center mb-4">
                <h5>Gaston Dupont</h5>
                <span className="text-sm ml-4 text-gray-500">il y a 19 minutes</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-6 gap-6 flex items-center justify-between text-gray-400">

                <div className="flex gap-1 items-center">
                    <span className="material-icons-outlined">comment</span>
                    <span className="text-sm">14</span>
                </div>

                <div className="flex gap-1 items-center">
                    <span className="material-icons-outlined">favorite</span>
                    <span className="text-sm">14</span>
                </div>

                <div className="flex-grow"/>
            </div>
        </div>
    </div>
}

export default HomePost;
