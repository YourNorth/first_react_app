import React from "react";
import dialogsStyle from './Dialogs.module.css'
import Dialog from './dialog/message/Message'

const Dialogs = () => {
    return (
        <div className={dialogsStyle.dialogs}>
            <Dialog author='Name1' lastMessage='Hello'/>
            <Dialog author='Name2' lastMessage='Hi!'/>
        </div>
    );
}

export default Dialogs;

