import React from "react";
import infoStyle from "./InfoStyle.module.css"

const Info = () => {
    return (
        <div className={infoStyle.info}>
            <div>
                Profiler name
            </div>
            <div>
                Description
            </div>
            <div>
                Religion
            </div>
        </div>
    );
}

export default Info;