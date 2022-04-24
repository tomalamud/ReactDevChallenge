import React from 'react';
import MainView from './components/MainView';
import Login from './components/Login';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const authToken = useSelector(state => state.user.userToken);
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            authToken ? (
              <MainView/>
            ) : (
              <Navigate replace to="login"/>
            )
          }/>
        <Route 
          path="login" 
          element={
            !authToken ? (
              <Login/>
            ) : (
              <Navigate replace to="/"/>
            )
          }/>
      </Routes>
    </>
  );
}

export default App;
