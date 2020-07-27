import React from "react";

const NavButton = (props) => {
    return (
        <div /*className={navButtonStyle.navButton}*/>
            <a href={props.href}>{props.value}
            </a>
        </div>
    );
}

export default NavButton;