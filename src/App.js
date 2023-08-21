import React, { useState } from 'react';
import MainPage from './js/mainpage';
import SingUp from './js/singup';
import SingUpNext from './js/signupnext';
import Main from './js/main';
import UserToken from './js/userToken';
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
          <Route path="/" element={<MainPage/>} />
          <Route path="/main/:oauth" element={<Main/>} />
          <Route path="/userToken" element={<UserToken/>} />
          {/* <SignUp /> */}
          <Route path="/signup" element={<SingUp/>} />
          {/* <SignupNext /> */}
          <Route path="/signupNext" element={<SingUpNext/>} />
          {/* 미용실 */}
          <Route path="/hairshop" element={<SingUpNext/>} />
          {/* 예약내역 */}
          <Route path="/reservationdetails" element={<SingUpNext/>} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={<SingUpNext/>} />
          
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
