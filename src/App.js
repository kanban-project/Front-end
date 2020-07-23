import React, {Component} from 'react';
import ProjectList from "./components/project/ProjectList";
import Login from "./components/main/Login";
import Board from "./components/task/Board";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import TrelloList from "./TrelloList"
import { connect } from "react-redux"

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/project" component={ProjectList}/>
            <Route path="/board/:id"><Board/></Route>
    <Route path="/TrelloList">
      <h2>Hello Kanban <div style={styles.listsContainer}> {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards} />)}</div></h2></Route>
          </Switch>
        </BrowserRouter>
      </div> 
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    marginRight: 8
  }
};

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
