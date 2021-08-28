import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './NavPages/HomePage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
