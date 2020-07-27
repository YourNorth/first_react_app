import React from "react";
import messageStyle from './Message.module.css'

const Message = (props) => {
    return (
        <div className={messageStyle.message}>
            <div>
                author: {props.author}
            </div>
            <div>
                message: {props.lastMessage}
            </div>
        </div>
    );
}
export default Message;