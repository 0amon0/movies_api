import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Register from './components/Register';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Head from './components/Head';




class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
        <Head/>
         
          <Switch>
            <Route path="/" component={Movies} exact/> 
            <Route path="/register" component={Register} exact />
            <Route path="/:id" component={Movie} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
