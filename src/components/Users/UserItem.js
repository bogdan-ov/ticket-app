import React from "react";
import { NavLink } from "react-router-dom";

const UserItem = ({ _id, avatar, reportedTime, asset_name, status })=> {

    const statuses = {
        "completed": "COM",
        "unassigned": "UNA",
        "assigned": "ASD"
    }

    return (
        <NavLink to={ `/ticket/${ _id }` } activeClassName="user-item-acvtive">
            <li className="user-item">

                <div className="user-info">
                    <img alt="avatar" src={ avatar } className="user-avatar" />
                    <time className="date">
                        { `${ new Date(reportedTime).getDate() }/${ new Date(reportedTime).getMonth() + 1 }/${ new Date(reportedTime).getFullYear().toString().slice(2, 4) } ${ new Date(reportedTime).getHours() }:${ new Date(reportedTime).getMinutes() }` }
                    </time>
                    <span>
                        { asset_name }
                    </span>
                </div>
                <div className={ "status " + statuses[status] }>
                    { statuses[status] }
                </div>

            </li>
        </NavLink>
    );
};

export default UserItem;