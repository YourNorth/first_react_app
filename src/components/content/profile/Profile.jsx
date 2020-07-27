import React from 'react';
import ss from "./Profile.module.css"
import Info from "./info/Info.jsx"
import Posts from "./posts/Posts"


const Profile = () => {
    return (
        <div className={ss.content}>
            <Info/>
            <Posts/>
        </div>
    );
}

export default Profile;