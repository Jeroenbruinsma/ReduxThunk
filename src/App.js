import React from 'react';
import './App.css';
import Countries from './pages/Countries';
import { Switch, Route, NavLink, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useDispatch } from 'react-redux';

function App() {
  const history = useHistory()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch({type: "LOGOUT"})
    history.push("/login")
  }


  return (
    <div className="App">
      <NavLink to="/signup" >Signup</NavLink> 
      <br/>
      <NavLink to="/countries" >Countries</NavLink>
      <br/>
      <NavLink to="/" >Home</NavLink>
      <br/>
      <button onClick={logout } >Logout</button>

      
      <Switch>
        <Route  path="/profile" component={Profile} />
        <Route  path="/countries" component={Countries} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/login" component={Login} />
        <Route  path="/" component={Home}/>

      </Switch>

    </div>
  );
}

export default App;
