import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './NavPages/HomePage'
import MarketPage from './NavPages/MarketPage';
import JobsPage from './NavPages/JobsPage';
import InfoPage from './NavPages/InfoPage';
import BrokerRatingPage from './NavPages/BrokerRatingPage';
import './App.css'

const App = () => {
  return (
    <div className="App bg-dark bg-gradient">
      <Router>
        <h1 className='text-center display-1 text-primary fas'>
          <NavLink className='nav-link active' to="/">
            Global Spy Network 
            <i class="fab fa-redhat"></i>
          </NavLink>
        </h1>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Info' component={InfoPage} />
            <Route exact path='/Market' component={MarketPage} />
            <Route exact path='/Jobs' component={JobsPage} />
            <Route exact path='/Brokers' component={BrokerRatingPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
