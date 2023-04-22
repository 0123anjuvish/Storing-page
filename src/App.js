import './App.css';
<<<<<<< HEAD
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/header';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<Login />}/>
        {/* <Route path="header/" element={<Header/>}/> */}
        <Route path="home/" element={ <Home/>}/>
   
  
   </Routes>
   </BrowserRouter>
    </>
=======

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Login from './components/login'

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>,
    </div>
>>>>>>> 6f18841bcd4d00bd6c14e5be79dfc5a277b70466
  );
}

export default App;
