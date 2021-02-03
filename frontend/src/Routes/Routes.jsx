import React from "react";
import {Route, Switch} from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { ProfilePage } from "../Pages/Profiles/ProfilePage";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/register"/>
            <Route path = "/login" component = {Login}/>
            <Route exact path = "/profiles" component = {ProfilePage}/>
        </Switch>
    )
}