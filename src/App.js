import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Search from './views/Search';
import Shelves from './views/Shelves';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Shelves} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
