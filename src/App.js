import React, {Component} from 'react';
import ProjectList from "./components/project/ProjectList";
import Login from "./components/main/Login";
import Board from "./components/task/Board";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import {Board} from './component/task/Board';

let _columnId = 0;
let _cardId = 0;

const initialCards = Array.from({length: 9}).map(() => ({
  id: ++_cardId,
  title: `Card ${_cardId}`,
}));

const initialColumns = ['TODO', 'Doing', 'Done'].map((title, i) => ({
  id: _columnId++,
  title,
  cardIds: initialCards.slice(i * 3, i * 3 + 3).map(card => card.id),
}));


class App extends Component {
  state = {
    cards: initialCards,
    columns: initialColumns,
  };

  addCard = (columnId, _title) => {
    const title = _title.trim();
    if (!title) return;

    const newCard = {id: ++_cardId, title};
    this.setState(state => ({
      cards: [...state.cards, newCard],
      columns: state.columns.map(
        column =>
          column.id === columnId
            ? {...column, cardIds: [...column.cardIds, newCard.id]}
            : column
      ),
    }));
  };

  moveCard = (cardId, destColumnId, index) => {
    this.setState(state => ({
      columns: state.columns.map(column => ({
        ...column,
        cardIds: _.flowRight(
          // 2) If this is the destination column, insert the cardId.
          ids =>
            column.id === destColumnId
              ? [...ids.slice(0, index), cardId, ...ids.slice(index)]
              : ids,
          // 1) Remove the cardId for all columns
          ids => ids.filter(id => id !== cardId)
        )(column.cardIds),
      })),
    }));
  };

  render() {
    return (
      <Board        
      cards={this.state.cards}
      columns={this.state.columns}
      moveCard={this.moveCard}
      addCard={this.addCard}
      addColumn={this.addColumn}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/project" component={ProjectList}/>
            <Route path="/board/:id"><Board/></Route>
          </Switch>
        </BrowserRouter>
        </Board>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
