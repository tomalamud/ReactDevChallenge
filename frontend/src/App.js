import React from 'react';
import MainView from './components/MainView';
import Login from './components/Login';
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const authToken = useSelector(state => state.user.userToken);
  return (
    <>
      <Routes>
        {authToken && (
          <Route path="/" element={<MainView/>}/>
        )}
        {!authToken && (
          <Route path="login" element={<Login/>}/>
        )}
      </Routes>
    </>
  );
}

export default App;
