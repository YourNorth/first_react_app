import React from "react";
import NewMessageStyle from './NewMessage.module.css'

const NewMessage = (props) => {
    return (
        <div className={NewMessageStyle.newMessage}>
            <form>
                <input type='textarea' name='newMessage'/>
                <input type='submit' value='submit'/>
            </form>
        </div>
    );
}

export default NewMessage;