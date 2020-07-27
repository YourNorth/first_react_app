import React from "react";
import ss from './Companions.module.css';
import CompanionItem from './CompanionItem/CompanionItem';

const Companions = (props) => {
    return (
        <div className={ss.companions}>
            <CompanionItem name='Arthur'/>
            <CompanionItem name='Maria'/>
        </div>
    );
}

export default Companions;