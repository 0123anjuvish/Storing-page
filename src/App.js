
import './App.css';
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
  );
}

export default App;
