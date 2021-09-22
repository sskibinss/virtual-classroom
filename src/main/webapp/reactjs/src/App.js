import './App.css';
import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MembersTable from "./components/MembersTable";
import AddMember from "./components/AddMember";

function App() {
  return (
    <Router>
        <Switch>
            <Route path={"/"} exact component={AddMember}/>
            <Route path={"/classroom"} exact component ={MembersTable}/>
        </Switch>
    </Router>
  );
}

export default App;
