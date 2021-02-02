import {DarkModeContext} from '../../core/contexts/dark-mode';
import useSignOut from '../../core/hooks/use-sign-out';
import defAvatar from '../../assets/images/avatar.jpg';
import React, {useContext, useState} from 'react';
import ClickOut from '../../components/ClickOut';
import Avatar from '../../components/Avatar';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {

    const signOut = useSignOut();
    const {email} = useSelector(s => s['user']);
    const {darkMode, toggle} = useContext(DarkModeContext);
    const [popover, setPopover] = useState<boolean>(false);

    return <div className="header">
        <div className="container mx-auto px-8 h-full flex items-center justify-between">

            <NavLink to="/" className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37.015" viewBox="0 0 32 37.015">
                    <g id="logo" transform="translate(1 36.015) rotate(-90)">
                        <path
                            d="M-1,15A3.821,3.821,0,0,1,.8,11.8a3.938,3.938,0,0,1,3-.4L8,5.2A3.61,3.61,0,0,1,7.7.7,3.765,3.765,0,0,1,10-.9a3.858,3.858,0,0,1,2.8.5,3.215,3.215,0,0,1,1.5,2.1h6.2A4,4,0,0,1,24.3-1,3.631,3.631,0,0,1,26.9.1a3.394,3.394,0,0,1,1,2.7A3.583,3.583,0,0,1,27,5.2l4.1,6.3a4.084,4.084,0,0,1,1.9-.1A3.981,3.981,0,0,1,35.4,13a3.82,3.82,0,0,1-1,5.2,3.677,3.677,0,0,1-3.2.4L27,24.8a3.805,3.805,0,0,1,.8,1.7,3.471,3.471,0,0,1-.6,2.8,3.82,3.82,0,0,1-5.2,1,4.26,4.26,0,0,1-1.5-2H14.3a3.779,3.779,0,0,1-7.4-1v-.1a4.006,4.006,0,0,1,.8-2.3L3.6,18.6A3.706,3.706,0,0,1-.6,16.9,5.847,5.847,0,0,1-1,15Zm4.7-1.5h0a1.5,1.5,0,0,0-1.8,0,1.813,1.813,0,0,0-.7,2.4,1.662,1.662,0,0,0,2.3.6h0a1.167,1.167,0,0,0,.6-.6,2,2,0,0,0,.2-1.3A1.382,1.382,0,0,0,3.7,13.5ZM6.5,15A4.136,4.136,0,0,1,6,16.9a2.651,2.651,0,0,1-.5.6l4,6.2a3.043,3.043,0,0,1,2.1-.1l6.1-11.2a1.03,1.03,0,1,1,1.8,1L13.4,24.6a3.247,3.247,0,0,1,1,1.8h6.1a3.75,3.75,0,0,1,3.6-2.8,5.019,5.019,0,0,1,1.2.2l4.1-6.3a3.751,3.751,0,0,1-.3-4.5c.1-.1.2-.3.3-.4L25.3,6.3a4.253,4.253,0,0,1-1.1.2,2.769,2.769,0,0,1-.9-.1L21.4,9.8a1.03,1.03,0,0,1-1.8-1l1.9-3.4a4.248,4.248,0,0,1-1-1.7H14.4a3.75,3.75,0,0,1-3.6,2.8,3.6,3.6,0,0,1-1.1-.2L5.5,12.5a5.071,5.071,0,0,1,.9,1.6C6.4,14.4,6.5,14.7,6.5,15ZM9.8,25.8h0a1.513,1.513,0,0,0-.7,1.4A1.771,1.771,0,0,0,10.8,29a1.71,1.71,0,0,0,1.8-1.7h0a1.893,1.893,0,0,0-.9-1.6h0A2.086,2.086,0,0,0,9.8,25.8ZM12.6,2.7h0a1.6,1.6,0,0,0-.8-1.4,1.752,1.752,0,0,0-2.4.5,1.668,1.668,0,0,0,.5,2.4h0a1.486,1.486,0,0,0,.9.2,1.653,1.653,0,0,0,1.8-1.7Zm13.3,0A1.752,1.752,0,0,0,24.2,1a1.71,1.71,0,0,0-1.8,1.7h0a1.645,1.645,0,0,0,.8,1.5h.1a2.353,2.353,0,0,0,.8.2,1.689,1.689,0,0,0,1-.3h0a1.486,1.486,0,0,0,.8-1.4Zm-.8,23.1a1.613,1.613,0,0,0-.9-.3,1.774,1.774,0,0,0-1.8,1.7v.1h0a1.723,1.723,0,0,0,.8,1.4,1.752,1.752,0,0,0,2.4-.5,1.517,1.517,0,0,0,.3-1.3,2.1,2.1,0,0,0-.8-1.1Zm6.2-12.3h0c-.2.2-.4.3-.5.5a1.85,1.85,0,0,0,.4,2.4h.1a1.654,1.654,0,0,0,1.9,0,1.733,1.733,0,1,0-1.9-2.9Z"/>
                    </g>
                </svg>
            </NavLink>

            <nav className="flex items-center h-full gap-4">
                <NavLink
                    exact to="/"
                    activeClassName="active"
                    className="nav-item material-icons">
                    public
                </NavLink>
                <NavLink
                    to="/studies"
                    activeClassName="active"
                    className="nav-item material-icons">
                    school
                </NavLink>
                <NavLink
                    exact to="/users"
                    activeClassName="active"
                    className="nav-item material-icons">
                    account_circle
                </NavLink>
                <NavLink
                    exact to="/notifications"
                    activeClassName="active"
                    className="nav-item material-icons">

                    notifications
                </NavLink>
            </nav>

            <div className="relative">

                <Avatar className="w-10 h-10 cursor-pointer" src={defAvatar} onClick={() => setPopover(s => !s)}/>

                {popover && <ClickOut onClickOut={() => setPopover(false)}>
                    <div className="popover">
                        <div className="w-full h-0.5 bg-red-500"/>
                        <div className="w-full p-8 flex items-center justify-center flex-col">
                            <Avatar className="w-32 h-32" src={defAvatar}/>
                            <h4 className="mt-6">{email}</h4>
                        </div>

                        <label className="theme-item flex items-center justify-between">
                            <span>Theme sombre</span>
                            <input type='checkbox' className="switch" checked={darkMode} onChange={toggle}/>
                        </label>

                        <nav className="grid px-8 py-8 gap-3">
                            <NavLink to="/account" className="account-item">Mon profil</NavLink>
                            <NavLink to="/account/badges" className="account-item">Mes badges</NavLink>
                            <NavLink to="/account/messages" className="account-item">Messages</NavLink>
                            <NavLink to="/account/parameters" className="account-item">Paramètres</NavLink>

                            <div onClick={signOut} className="account-item mt-4 opacity-50">Déconnexion</div>
                        </nav>
                    </div>
                </ClickOut>}
            </div>
        </div>
    </div>
}

export default Header;
