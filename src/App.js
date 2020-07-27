import React from 'react';
import './App.css';
import Header from "./components/index/header/Header";
import NavBar from "./components/index/navbar/NavBar";
import Profile from "./components/content/profile/Profile";
import Footer from "./components/index/footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/content/messages/Messages";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={App.content}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
