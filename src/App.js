import React from 'react';
import './App.css';
import Countries from './pages/Countries';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <NavLink to="/signup" >Signup</NavLink> 
      <br/>
      <NavLink to="/countries" >Countries</NavLink>
      <br/>
      <NavLink to="/" >Home</NavLink>
      <br/>
      
      <Switch>
        <Route  path="/countries" component={Countries} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/login" component={Login} />
        <Route  path="/" component={Home}/>

      </Switch>

    </div>
  );
}

export default App;
