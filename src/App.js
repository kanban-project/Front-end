import React, {Component} from 'react';
import ProjectList from "./components/project/ProjectList";
import Board from "./components/task/Board";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ProjectList}></Route>
          <Route path="/project" component={ProjectList}></Route>
          <Route path="/board/:id"><Board/></Route>
        </BrowserRouter>
      </div> 
    );
  }
}

export default App;
