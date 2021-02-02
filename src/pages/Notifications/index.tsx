import defAvatar from '../../assets/images/avatar.jpg';
import React from 'react';
import Avatar from '../../components/Avatar';

const Notifications = () => {
    return <div className="container mx-auto px-8 max-w-2xl grid gap-4 pt-32 pb-12">
        <div className="card p-4 flex gap-4 items-center">
            <Avatar className="w-10 h-10" src={defAvatar}/>
            <p className="flex-grow font-medium">Ceci est une notification</p>
            <div className="h-3 w-3 bg-red-500 rounded-full"/>
        </div>

        <div className="card p-4 flex gap-4 items-center">
            <Avatar className="w-10 h-10" src={defAvatar}/>
            <p className="flex-grow font-medium">Ceci est une notification</p>
            <div className="h-3 w-3 bg-red-500 rounded-full"/>
        </div>

        <div className="card p-4 flex gap-4 items-center">
            <Avatar className="w-10 h-10" src={defAvatar}/>
            <p className="flex-grow">Ceci est une notification</p>
        </div>

        <div className="card p-4 flex gap-4 items-center">
            <Avatar className="w-10 h-10" src={defAvatar}/>
            <p className="flex-grow">Ceci est une notification</p>
        </div>

        <div className="card p-4 flex gap-4 items-center">
            <Avatar className="w-10 h-10" src={defAvatar}/>
            <p className="flex-grow">Ceci est une notification</p>
        </div>
    </div>
}

export default Notifications;
