import React from "react";
import "./App.scss";
import { Login, Register ,Dashboard,HomePage} from "./components/login/index";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {
  
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
         <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
      </Switch>
  </Router>
    );
  }
}



export default App;