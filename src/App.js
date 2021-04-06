import React from "react";
import './default.scss';
import Header from './components/Header';
import HomePage from "./pages/Homepage/index";
import Registration from "./pages/Registration";

import {Route,Switch} from 'react-router-dom'
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
    <Header/>
      <div className='main'>
        <HomePage/>
      <div clasName = "main">
            <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/Registration" component={Registration}/>
      </Switch>
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
