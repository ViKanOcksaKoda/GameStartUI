import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigationbar from './components/navbar/Navigationbar';
import HomePage from './components/homepage/HomePage';
import GamePage from './components/gamepage/GamePage';
import ConsolePage from './components/consolepage/ConsolePage';
import ControllerPage from './components/controllerpage/ControllerPage';
import AdminPage from './components/adminpage/AdminPage';
import LoginPage from './components/login/LoginPage';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import RegistrationPage from './components/registration/RegistrationPage';
import { StatusContext } from './components/context/StatusContext';
import { UserContext } from './components/context/UserContext';
import { RoleContext } from './components/context/RoleContext';
import { CartContext } from './components/context/CartContext';
import './App.css';

function App() {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("guest");
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <StatusContext.Provider value={{ status, setStatus }}>
          <UserContext.Provider value={{ user, setUser }}>
            <RoleContext.Provider value={{ role, setRole }}>
              <CartContext.Provider value={{ cart, setCart }}>
                <Navigationbar />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/GamePage' element={<GamePage />} />
                  <Route path='/ConsolePage' element={<ConsolePage />} />
                  <Route path='/ControllersPage' element={<ControllerPage />} />
                  <Route path='/LogIn' element={<LoginPage />} />
                  <Route path='/AdminPage' element={<AdminPage />} />
                  <Route path='/SignUp' element={<RegistrationPage />} />
                  <Route path='/Shoppingcart' element={<ShoppingCart />} />
                </Routes>
              </CartContext.Provider>
            </RoleContext.Provider>
          </UserContext.Provider>
        </StatusContext.Provider>
      </div>
    </Router>

  );
}

export default App;