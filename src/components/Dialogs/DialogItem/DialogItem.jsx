import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div>
        <NavLink to={path}>
            <div> <img src={props.avatar}/>

                {props.name}</div>
        </NavLink>
    </div>
}

export default DialogItem;