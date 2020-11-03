import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import {HomePage} from "./pages/home/home.page";
import {IntroPage} from "./pages/intro/intro.page";
import {LoginPage} from "./pages/login/login.page";
import {ProfilePage} from "./pages/profile/profile.page";

import './App.scss';

function App() {
    return (
        <div className={"app"}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/intro"}>Intro</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/profile"}>Profile</Link>
                        </li>
                    </ul>
                </nav>
                <div className={"content"}>
                    <Switch>
                        <Route path="/intro">
                            <IntroPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/profil">
                            <ProfilePage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
