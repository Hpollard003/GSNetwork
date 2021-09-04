import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage'
import JobsPage from './containers/JobsPage';
import IntelPage from './containers/IntelPage';
import './App.css'

const App = () => {
  return (
    <div className="App bg-dark bg-gradient">
      <Router>

        <h1 className='text-center display-1 text-primary fas'>
          <NavLink className='nav-link active' to="/">
            Global Spy Network <i className="fab fa-redhat"></i>
          </NavLink>
        </h1>
        <NavBar/>


          <Switch>

            <Route exact path='/' component={HomePage} />

            <Route exact path='/Intel' component={IntelPage} />

            <Route exact path='/Jobs' component={JobsPage} />

          </Switch>

      </Router>

    </div>
  );
}

export default App;
