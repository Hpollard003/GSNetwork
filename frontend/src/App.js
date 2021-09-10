import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Containers/Home";
import "./App.css";
import JobsBoard from "./Containers/JobsBoard";

const App = () => {
  return (
    <div className="App bg-dark bg-gradient">
      <Router>
        <h1 className="text-center display-1 text-primary fas">
          <NavLink className="nav-link active" to="/">
            Global Spy Network <i className="fab fa-redhat"></i>
          </NavLink>
        </h1>

        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Jobs" component={JobsBoard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
