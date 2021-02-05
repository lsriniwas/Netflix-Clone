import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import Payment from '../Components/Payment'
import RegisterContinue from '../Components/RegisterContinue'
import RegisterForm from '../Components/RegisterForm'
import RegisterPlan from '../Components/RegisterPlan'
import Browse from '../Pages/Browse/Browse'
import MyList from '../Pages/List/MyList'
import { Login } from "../Pages/Login/Login";
import VideoPlayer from '../Pages/PlayVedio/VideoPlayer'
import { ProfilePage } from "../Pages/Profiles/ProfilePage";
import PrivateRoute from './PrivateRoute'

const Routes = () => {
    return (
        
            <Switch>
                <Route path="/" exact render={(props) => <Home {...props}/>} />
                <Route path="/register" exact render={(props) => <Login {...props}/>} />
                <Route path="/signup" exact render={(props) => <RegisterContinue {...props}/>} />
                <Route path="/signup/regform" exact render={(props) => <RegisterForm {...props}/>} />
                <Route path="/signup/planform" exact render={(props) => <RegisterPlan {...props}/>} />
                <Route path="/signup/payment" exact  render={(props) => <Payment {...props} />} />
                <Route path = "/login" exact component = {Login}/>
                <Route path = "/browse" exact component = {Browse}/>
                <Route path = "/video/:id" exact component = {VideoPlayer}/>
                <PrivateRoute path = "/myList" exact component = {MyList}/>
                <PrivateRoute exact path = "/profiles" Component={ProfilePage}/>
            </Switch>
       
    )
}

export default Routes
