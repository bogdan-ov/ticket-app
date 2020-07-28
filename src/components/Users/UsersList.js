import React  from "react";
//
import UserItem from "./UserItem";

const UsersList = ({ tickets })=> {

    return (
        <div className="users-list-box">
            <ol className="users-list">

                {
                    tickets.map((ticket, index)=> (
                        <UserItem _id={ ticket.ticketId } avatar={ ticket.owner.avatar } reportedTime={ ticket.reportedTime } asset_name={ ticket.asset.name } status={ ticket.status } key={ index } />
                    ))
                }

            </ol>
        </div>
    );
};

export default UsersList;