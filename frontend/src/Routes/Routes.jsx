import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import RegisterContinue from '../Components/RegisterContinue'
import RegisterForm from '../Components/RegisterForm'
import RegisterPlan from '../Components/RegisterPlan'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Home/>} />
                <Route path="/signup" exact render={() => <RegisterContinue/>} />
                <Route path="/signup/regform" exact render={() => <RegisterForm/>} />
                <Route path="/signup/planform" exact render={() => <RegisterPlan/>} />
            </Switch>
        </div>
    )
}

export default Routes
