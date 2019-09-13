import React from 'react';
import './App.css';
import Contact from "./components/Contact";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import Action from "./components/send_mail.php";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/contact_us" exact component={Contact} />
                <Route path="/send_mail" exact component={Action} />
            </Switch>
        </div>
    );
}

export default App;
