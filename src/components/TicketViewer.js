import React, { useState, useEffect } from "react";
import { TicketSkelet } from "../managers/tickets.manager";

const TicketViewer = ({ match, tickets })=> {

    const [ticket, setTicket] = useState(TicketSkelet);
    const statuses = {
        "completed": "COM",
        "unassigned": "UNA",
        "assigned": "ASD"
    }

    useEffect(()=> {

        setTicket(Object(tickets.filter(tkt=> tkt.ticketId === +match.params.id)[0]));

    });

    return (
        <main className="ticket-viewer">
            <div className="block">
                <h3 className="block-title">
                    Owner
                </h3>
                <main className="block-content">
                    <div className="user">
                        <img className="avatar" alt="avatar" src={ Object(ticket.owner).avatar } />
                        <span className="user-name">
                            <span>
                                { `${ Object(ticket.owner).firstName } ${ Object(ticket.owner).lasName }` }  
                            </span>
                            <span className="specialities">
                                {
                                    Array(Object(ticket.owner).specialities).map((sp, index)=> (
                                        <span key={ index } className="specialitie">
                                            { sp }
                                        </span>
                                    ))
                                }
                            </span>
                        </span>
                    </div>
                </main>
            </div>
            <div className="block">
                <h3 className="block-title">
                    Details
                </h3>
                <main className="block-content">
                    <div className="block-slot">
                        <span className="slot-title">
                            Reported:
                        </span>
                        <span>
                            { `${ new Date(ticket.reportedTime).getDate() }/${ new Date(ticket.reportedTime).getMonth() + 1 }/${ new Date(ticket.reportedTime).getFullYear().toString().slice(2, 4) } ${ new Date(ticket.reportedTime).getHours() }:${ new Date(ticket.reportedTime).getMinutes() }` }
                        </span>
                    </div>
                    <div className="block-slot">
                        <span className="slot-title">
                            Status:
                        </span>
                        <div className={ "status " + statuses[ticket.status] }>
                            { statuses[ticket.status] }
                        </div>
                    </div>
                    <div className="block-slot">
                        <span className="slot-title">
                            Description:
                        </span>
                        <span>
                            { ticket.description }
                        </span>
                    </div>
                </main>
            </div>
            <div className="block">
                <h3 className="block-title">
                    Asset
                </h3>
                <main className="block-content">
                    <div className="block-slot">
                        <span className="slot-title">
                            Name:
                        </span>
                        <span>
                            { Object(ticket.asset).name }
                        </span>
                    </div>
                    <div className="block-slot">
                        <span className="slot-title">
                            Geo code:
                        </span>
                        <span>
                            { Object(ticket.asset).geoCode }
                        </span>
                    </div>
                    <div className="block-slot">
                        <span className="slot-title">
                            Location:
                        </span>
                        <div className="geo-loc">
                            <div className="loc">
                                { Object(ticket.asset).kmFrom }
                            </div>
                            <div className="loc">
                                { Object(ticket.asset).kmTo }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
};

export default TicketViewer;