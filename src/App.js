import React, { useState } from 'react';
import MainPage from './js/mainpage';
import SingUp from './js/singup';
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
          <Route path="/" element={<MainPage/>} />
          {/* <SignIn /> */}
          <Route path="/signup" element={<SingUp/>} />
        </Routes>
      </BrowserRouter> 

  // <Router>
  // <Switch>
  //   <Route exact path="/" component={Home} />
  //   <Route path="/search/:keyword" component={SearchResults} />
  // </Switch>
  // </Router>

  );
}

export default App;
