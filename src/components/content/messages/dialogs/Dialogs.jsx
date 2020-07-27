import React from "react";
import ss from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogItem}>
                <div className={ss.message}>
                    Hello!
                </div>
                <div className={ss.message}>
                    How r u?!
                </div>
                <div className={ss.message}>
                    Hello, im fine!
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

