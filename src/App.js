import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';
import List from './components/List';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      info:{},
    }

  }
  render(){
  return (
    <div className="App App-header">
       <Router>
       <Redirect
        from="/"
        to="/" />
        <Switch>
          <Route exact path="/" 
             render={(props) => <Character {...props} info={this.state.info} />}
            />
          <Route exact path="/List"
            render={(props) => <List {...props} info={this.state.info} />} 
            />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
