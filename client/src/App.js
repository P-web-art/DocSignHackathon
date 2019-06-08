import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTopic from "./components/CreateTopic"
import Events from "./components/Events"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      <CreateTopic />
      <Events />
      <Landing />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
