import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'

import Index from '../views/index-sections/Index'
// import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from '../views/LoginPage/LoginPage'
import LandingPage from '../views/LandingPage/LandingPage'
import ProfilePage from '../views/ProfilePage/ProfilePage'
import SignUp from '../views/SignUp/SignUp'
import Details from '../views/Details/Details'
import EditUser from '../views/EditUser/EditUser'
import Sell from '../views/Sellitems/Sell'

export default function Navigation({user}) {
    return (
        <Router>
            <div>

                <Switch>

                    <Route path="/" exact >
                        {AuthChecker(!user ,<LoginPage/>,'/index')}
                
                    </Route>

                    <Route path="/index" >
                        {AuthChecker(user , <Index user={user}/>)}
                      
                       </Route>

                

                    <Route path="/landingpage">
                        {AuthChecker(user , <LandingPage/>)}
                        
                    </Route>

                    <Route path="/profilepage">
                        {AuthChecker(user,<ProfilePage user={user}/>,'/profilepage')}
                        
                    </Route>
                    
                    <Route path="/signup"  >
                        {AuthChecker(!user ,<SignUp/>)}
                        
                    </Route>
                    <Route path="/dashboard/details/:adId">
                        {AuthChecker(user,<Details user={user}/>)}

                    </Route>
                    <Route path="/edituser"exact >
                        {AuthChecker(user,<EditUser user={user}/>)}

                    </Route>
                    <Route path="/sell"  >
                        {AuthChecker(user,<Sell user={user}/>)}

                    </Route>




                </Switch>
            </div>

        </Router>

    )
    function AuthChecker(user, component, path = "/") {
        return user ? component : <Redirect to={path} />

    }
}