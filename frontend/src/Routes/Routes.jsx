import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import Payment from '../Components/Payment'
import RegisterContinue from '../Components/RegisterContinue'
import RegisterForm from '../Components/RegisterForm'
import RegisterPlan from '../Components/RegisterPlan'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={(props) => <Home {...props}/>} />
                <Route path="/signup" exact render={(props) => <RegisterContinue {...props}/>} />
                <Route path="/signup/regform" exact render={(props) => <RegisterForm {...props}/>} />
                <Route path="/signup/planform" exact render={(props) => <RegisterPlan {...props}/>} />
                <Route path="/signup/payment" exact  render={(props) => <Payment {...props} />} />
            </Switch>
        </div>
    )
}

export default Routes
