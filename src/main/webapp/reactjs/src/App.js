import './App.css';
import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MembersTable from "./components/MembersTable";
import AddMember from "./components/AddMember";
import UserContext from "./components/UserContext";
/*import addMemberDataToContext from "./components/AddMemberDataToContext";*/

function App() {
    return (
        /*<UserContext.Provider value={addMemberDataToContext()}>*/
            <Router>
                <Switch>
                    <Route path={"/"} exact component={AddMember}/>
                    <Route path={"/classroom"} exact component={MembersTable}/>
                </Switch>
            </Router>
/*        </UserContext.Provider>*/
    );
}

export default App;
