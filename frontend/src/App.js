import React from 'react';
import MainView from './components/MainView';
import Login from './components/Login';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
