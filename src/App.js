import React, {Component} from 'react';
import ProjectList from "./components/project/ProjectList";
import Login from "./components/main/Login";
import Board from "./components/task/Board";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/project" component={ProjectList}/>
            <Route path="/board/:id"><Board/></Route>
          </Switch>
        </BrowserRouter>
      </div> 
    );
  }
}

export default App;