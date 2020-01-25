import React from 'react';
import './App.css';
import KeyMapper from './Components/KeyMapper'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/key-mapper">Key Mapper</Link>
          <Link className="navbar-item" to="/currency-converter">Currency Converter</Link>
          <Link className="navbar-item" to="/to-do-list">To Do List</Link>
        </nav>
        <Switch>

          <Route path="/key-mapper">
            <KeyMapper/>
          </Route>
          <Route path="/currency-converter">
            <CurrencyConverter/>
          </Route>
          <Route path="/to-do-list">
            <ToDoList/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>

    </Router>
      
    
  );
}

const Home = () => {return <h2>Welcome weary traveller</h2>}



const CurrencyConverter = () => {return <h2>Currency Converter</h2>}

const ToDoList = () => {return <h2>To Do List</h2>}
export default App;
