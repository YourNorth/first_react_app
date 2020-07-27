import React from "react";
import ss  from './CompanionItem.module.css'

const CompanionItem = (props) =>{
    return (
        <div className={ss.companionItem} >
            {props.name}
        </div>
    );
}
export default CompanionItem;