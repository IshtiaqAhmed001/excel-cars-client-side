import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/cars">
            <Cars></Cars>
          </Route>
          <Route path="/login">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
