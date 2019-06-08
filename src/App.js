import React from 'react';
import './App.css';
import Character from './components/Character';
import List from './components/List';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App App-header">
       <Router>
       <Redirect
        from="/"
        to="/" />
        <Switch>
          <Route exact path="/" component={Character} />
          <Route exact path="/List"
              component={List} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
