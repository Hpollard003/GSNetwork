import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './NavPages/HomePage'
import NavBar from './components/NavBar';
import MarketPage from './NavPages/MarketPage';
import JobsPage from './NavPages/JobsPage';
import InfoPage from './NavPages/InfoPage';
import BrokerRatingPage from './NavPages/BrokerRatingPage';
import DeaddropPage from './NavPages/DeaddropPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <h1 className='text-center display-1'>Global_Spy_Network</h1>
        <NavBar/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Info' component={InfoPage} />
        <Route exact path='/Market' component={MarketPage} />
        <Route exact path='/Jobs' component={JobsPage} />
        <Route exact path='/Brokers' component={BrokerRatingPage} />
        <Route exact path='/Deaddrops' component={DeaddropPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
