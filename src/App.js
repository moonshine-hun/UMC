import React, { useState } from 'react';
import MainPage from './js/mainpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>

  // <Router>
  // <Switch>
  //   <Route exact path="/" component={Home} />
  //   <Route path="/search/:keyword" component={SearchResults} />
  // </Switch>
  // </Router>

  );
}

export default App;
