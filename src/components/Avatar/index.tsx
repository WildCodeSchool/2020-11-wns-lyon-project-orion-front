import React from 'react';

const Avatar = (props) => {
    return <div className={props.className + " flex overflow-hidden rounded-full"} onClick={props.onClick}>
        <img alt="" className="object-cover" src={props.src}/>
    </div>
}

export default Avatar;
