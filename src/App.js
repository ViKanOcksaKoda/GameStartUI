import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigationbar from './components/navbar/Navigationbar';
import HomePage from './components/homepage/HomePage';
import GamePage from './components/gamepage/GamePage';
import ConsolePage from './components/consolepage/ConsolePage';
import ControllerPage from './components/controllerpage/ControllerPage';
import AdminPage from './components/adminpage/AdminPage';
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
          <Route path='/AdminPage' element={ <AdminPage /> } />
        </Routes>
      </div>
    </Router>

  );
}

export default App;