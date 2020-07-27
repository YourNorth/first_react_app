import React from "react";
import ss from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    let profile = '/profile',
        news = '#',
        messages = '/messages',
        profile_name = 'Profile',
        news_name = 'News',
        messages_name = 'Messages';
    return (
        <div className={ss.nav}>
            <div><NavLink className={ss.navLink} activeClassName={ss.activeLink} to={profile}>{profile_name}</NavLink>
            </div>
            <div><NavLink className={ss.navLink} activeClassName={ss.activeLink} to={news}>{news_name}</NavLink>
            </div>
            <div><NavLink className={ss.navLink} activeClassName={ss.activeLink} to={messages}>{messages_name}</NavLink>
            </div>
        </div>
    );
}

export default NavBar;