import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from './components/navbar/Navigationbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/GamePage' component={GamePage} />
          <Route path='/ConsolePage' component={ConsolePage} />
          <Route path='/ControllerPage' component={ControllerPage} />
          <Route path='/AdminPage' component={AdminPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;