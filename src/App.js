import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import Movie from './components/Movie';
import { Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Switch>
            <Route exact path='/' component={Movies}/>
            <Route path='/movie/:id' component={Movie} history={history}/>
        </Switch>
      </div>
    );
  }
}

export default App;
