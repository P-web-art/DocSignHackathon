import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import CreateTopic from "./components/CreateTopic"
import Events from "./components/Events"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/create-topic" component={CreateTopic}/>
        <Route exact path="/events" component={Events}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/" component={Landing}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
