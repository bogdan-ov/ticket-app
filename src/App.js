import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { TicketSkelet, TicketsManager } from './managers/tickets.manager';
//
import UsersList from "./components/Users/UsersList";
import TicketViewer from './components/TicketViewer';

function App() {

    const [tickets, setTickets] = useState([TicketSkelet]);

    useEffect(()=> {
        
        TicketsManager.get()
            .then(res=> setTickets(res));

    }, []);

    return (
        <div className="app">
            
            <UsersList tickets={ tickets } />
            <Route path="/" exact component={ ()=> <span className="warn_title">Choose a ticket</span> } />
            <Route path="/ticket/:id" component={ e=> TicketViewer({ match: e.match, tickets: tickets }) } />
        
        </div>
    );
}

export default App;
