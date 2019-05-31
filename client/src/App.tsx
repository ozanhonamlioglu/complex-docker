import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

const App: FunctionComponent<{ count?: number }> = props => {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/otherpage">Other Page</Link>
        <img src={logo} style={{width: "50px"}} alt="react" />
        <hr/>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
