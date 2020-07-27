import React from 'react';
import ss from './Messages.module.css'
import Dialogs from "./dialogs/Dialogs";
import Companions from "./companions/Companions";

const Messages = (props) => {
    return (
        <div className={ss.messages}>
            <div>
            <Companions/>
            </div>
            <div>
            <Dialogs/>
            </div>
        </div>
    );
}

export default Messages;