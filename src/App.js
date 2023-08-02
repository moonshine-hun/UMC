import React, { useState } from 'react';
import MainPage from './js/mainpage';
import SingUp from './js/singup';
import SingUpNext from './js/signupnext';
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
          <Route path="/" element={<MainPage/>} />
          {/* <SignUp /> */}
          <Route path="/signup" element={<SingUp/>} />
          {/* <SignupNext /> */}
          <Route path="/signupNext" element={<SingUpNext/>} />
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
