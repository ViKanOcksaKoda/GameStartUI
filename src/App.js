import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigationbar from './components/navbar/Navigationbar';
import HomePage from './components/homepage/HomePage';
import GamePage from './components/gamepage/GamePage';
import ConsolePage from './components/consolepage/ConsolePage';
import ControllerPage from './components/controllerpage/ControllerPage';
import RegistrationPage from './components/registration/RegistrationPage';
import './App.css';
import { UserIdContext } from "./components/context/UserIdContext";
import { LoggedInContext } from "./components/context/LoggedInContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <div className="App">
        <UserIdContext.Provider value={{ userId, setUserId }}>
          <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
            <Navigationbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/GamePage' element={<GamePage />} />
              <Route path='/ConsolePage' element={<ConsolePage />} />
              <Route path='/ControllersPage' element={<ControllerPage />} />
              {/* <Route path='/AdminPage' element={ <AdminPage /> } /> */}
              <Route path='/SignUp' element={<RegistrationPage />} />
            </Routes>
          </LoggedInContext.Provider>
        </UserIdContext.Provider>
      </div>
    </Router >
  );
}

export default App;