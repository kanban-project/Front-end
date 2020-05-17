import React, {Component} from 'react';
import ProjectList from "./components/project/ProjectList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ProjectList />
      </div>
    );
  }
}

export default App;
