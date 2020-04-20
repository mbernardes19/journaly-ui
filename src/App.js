import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home'
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
