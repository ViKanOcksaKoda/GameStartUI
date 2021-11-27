import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigationbar from './components/navbar/Navigationbar';
import HomePage from './components/homepage/HomePage';
import GamePage from './components/gamepage/GamePage';
import ConsolePage from './components/consolepage/ConsolePage';
import ControllerPage from './components/controllerpage/ControllerPage';
import LoginPage from './components/login/LoginPage';
import RegistrationPage from './components/registration/RegistrationPage';
import ShoppingCart from "./components/shoppingcart/Shoppingcart";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/GamePage' element={ <GamePage />} />
          <Route path='/ConsolePage' element={ <ConsolePage />} />
          <Route path='/ControllersPage' element={ <ControllerPage />} />
          <Route path='/LogIn' element={<LoginPage />} />
          {/* <Route path='/AdminPage' element={ <AdminPage /> } /> */}
          <Route path='/SignUp' element={ <RegistrationPage /> } /> 
          <Route path='/Shoppingcart' element={ <ShoppingCart /> } />
        </Routes>
      </div>
    </Router>

  );
}

export default App;