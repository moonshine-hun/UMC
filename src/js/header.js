import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';




const PopupContainer = styled.div`
  // 크기
  width: 480px;
  height: 310px;
  position: fixed;

  // 가운데 위치
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background-image: url(background-image.jpg);
  background-size: cover;

  // 테두리
  border: 2px solid #C0C0C0;
  border-radius: 30px;
  margin: 0;
  padding: 0;
`;

const TopImage = styled.img`
  width: 60%;
  height: 70px;
  position: absolute;
  top: 20%;
`;

const Text = styled.p`
  text-align: center;
  position: absolute;
  top: 43%;

  font-family: NanumBarunGothic;
  font-size: 18px;

  letter-spacing: -2px; /* 글자 간격을 좁게 설정 */
  color: #B33E86;
  display: flex;
  align-items: center;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  position: absolute;
  top: 65%;
`;

const ImageButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NanumBarunGothic;
  font-size: 40px;
  color: #C0C0C0;
  transform: scaleY(0.8);
`;

const Header = styled.header`
  // 스크롤 해도 header는 같이 따라오게 하기 위해 fixed로 설정
  position: fixed;
  top: 10px;
  right: 40px;
  width: 100%;
  height: 20%;
  background-color: transparent;
  z-index: 9;
`;



const SubMenu = styled.div`
  position: absolute;
  height: 100%;
  right: 50px;
  top: 0;
  bottom: 0;
`;

const SubMenuUl = styled.ul`
  font-family: NanumBarunGothic;
  display: flex;
`;

const SubMenuLi = styled.li`
  position: relative;
  list-style: none;

  &:before {
    content: "";
    width: 1.7px;
    height: 20px;
    background-color: #808080;
    position: absolute;
    top: 9px;
    bottom: 0;
    margin-top: 0;
  }

  &:first-child:before {
    display: none;
  }
`;

const SubMenuLink = styled.a`
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  display: block;
  color: ${props => props.isActive ? "#000000" : "#808080"};
  font-weight: ${props => props.isActive ? "bold" : "normal"};
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

const SubMenuText = styled.span`
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  display: block;
  color: ${props => props.isActive ? "#000000" : "#808080"};
  font-weight: ${props => props.isActive ? "bold" : "normal"};
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;



const NaverLoginPage = () => {
  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2041.png&fileId=7626&x=1920&y=1080&a=true"
      alt="Naver Login"
      onClick={handleNaverLogin} // 네이버 로그인 처리 함수 연결
    />
  );
};

// 구글 로그인 버튼 컴포넌트
const GoogleLoginPage = () => {
  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2041.png&fileId=7626&x=1920&y=1080&a=true"
      alt="Google Login"
      onClick={handleGoogleLogin} // 구글 로그인 처리 함수 연결
    />
  );
};

// 페이스북 로그인 버튼 컴포넌트
const FacebookLoginPage = () => {
  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2040.png&fileId=7625&x=1920&y=1080&a=true"
      alt="Facebook Login"
      onClick={handleFacebookLogin} // 페이스북 로그인 처리 함수 연결
    />
  );
};

// 카카오톡 로그인 버튼 컴포넌트
const KakaoLoginPage = () => {
  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2036.png&fileId=7624&x=1920&y=1080&a=true"
      alt="Kakao Login"
      onClick={handleKakaoLogin} // 페이스북 로그인 처리 함수 연결
    />
  );
};

// 네이버 로그인 API 호출 함수
const naverLoginAPI = () => {
  return axios.post('/oauth2/authorization/naver');
};

// 구글 로그인 API 호출 함수
const googleLoginAPI = () => {
  return axios.post('/oauth2/authorization/google');
};

// 페이스북 로그인 API 호출 함수
const facebookLoginAPI = () => {
  return axios.post('/oauth2/authorization/facebook');
};

// 카카오톡 로그인 API 호출 함수
const kakaoLoginAPI = () => {
  return axios.post('/oauth2/authorization/kakao');
};



// 네이버 로그인 처리 함수
const handleNaverLogin = () => {
  // 네이버 로그인 API와 연동하여 로그인 처리
  // 로그인 성공 시 받은 토큰을 서버로 전송하거나 필요한 작업 수행
  // 예시: 네이버 로그인 API 호출 및 토큰 처리
  naverLoginAPI()
    .then((response) => {
      const accessToken = response.data.accessToken;
      sendUserDataToServer(accessToken);
    })
    .catch((error) => {
      console.error('네이버 로그인 에러:', error);
    });
};

// 구글 로그인 처리 함수
const handleGoogleLogin = () => {
  // 구글 로그인 API와 연동하여 로그인 처리
  // 로그인 성공 시 받은 토큰을 서버로 전송하거나 필요한 작업 수행
  // 예시: 구글 로그인 API 호출 및 토큰 처리
  googleLoginAPI()
    .then((response) => {
      const accessToken = response.data.accessToken;
      sendUserDataToServer(accessToken);
    })
    .catch((error) => {
      console.error('구글 로그인 에러:', error);
    });
};

// 페이스북 로그인 처리 함수
const handleFacebookLogin = () => {
  // 페이스북 로그인 API와 연동하여 로그인 처리
  // 로그인 성공 시 받은 토큰을 서버로 전송하거나 필요한 작업 수행
  // 예시: 페이스북 로그인 API 호출 및 토큰 처리
  facebookLoginAPI()
    .then((response) => {
      const accessToken = response.data.accessToken;
      sendUserDataToServer(accessToken);
    })
    .catch((error) => {
      console.error('페이스북 로그인 에러:', error);
    });
};

// 카카오톡 로그인 처리 함수
const handleKakaoLogin = () => {
  // 카카오톡 로그인 API와 연동하여 로그인 처리
  // 로그인 성공 시 받은 토큰을 서버로 전송하거나 필요한 작업 수행
  // 예시: 카카오톡 로그인 API 호출 및 토큰 처리
  kakaoLoginAPI()
    .then((response) => {
      const accessToken = response.data.accessToken;
      sendUserDataToServer(accessToken);
    })
    .catch((error) => {
      console.error('카카오톡 로그인 에러:', error);
    });
};

// 토큰을 서버로 전송하는 함수
const sendUserDataToServer = (accessToken) => {
  // access token : Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MSwiZXhwIjoxNjkyNzg1NzE4LCJ1c2VybmFtZSI6Imtha2FvXzI4OTgyMDI5NDQifQ.yFK4TqoT7I2ckMp-pQAytO5vg_IjPr1A3co2iAZMU1OJFkt1H0J2ZxGFSP4Tm-2hnwmvo1OljdxXJCyrHq25Tw
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MSwiZXhwIjoxNjkyNzg1NzE4LCJ1c2VybmFtZSI6Imtha2FvXzI4OTgyMDI5NDQifQ.yFK4TqoT7I2ckMp-pQAytO5vg_IjPr1A3co2iAZMU1OJFkt1H0J2ZxGFSP4Tm-2hnwmvo1OljdxXJCyrHq25Tw';
  // 예시: axios를 사용한 POST 요청
  axios.post('/users/autologin', { accessToken })
    .then((response) => {
      console.log('서버 응답:', response.data);
    })
    .catch((error) => {
      console.error('서버 에러 발생:', error);
    });
};

// 각 SNS 로그인 API 호출 함수는 실제 SNS에서 제공하는 로그인 API와 연동되어야 합니다.
// 위 코드에서는 예시로 토큰만을 처리하는 형식으로 작성되었습니다.









const SignupPopup = styled.div`
  // 팝업창 스타일
  width: 480px;
  height: 310px;
  position: fixed;
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background-image: url(background-image.jpg);
  background-size: cover;
  border: 2px solid #C0C0C0;
  border-radius: 30px;
  margin: 0;
  padding: 0;
`;

const Message = styled.p`
  text-align: center;
  position: absolute;
  top: 41%;
  font-family: NanumBarunGothic;
  font-size: 18px;

  color: #B33E86;
  display: flex;
  align-items: center;
  color: #000000;
  white-space: pre-line; // 줄바꿈을 위한 설정
`;

const SignupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  position: absolute;
  top: 68%;
`;

const SignupButton = styled.button`
  width: 175px;
  height: 50px;
  background-color: #A0136A;
  color: #FFFFFF;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  font-family: NanumBarunGothic;
  /* font-weight: bold; */
  letter-spacing: -2px; /* 글자 간격을 좁게 설정 */
`;

const CancelButton = styled.button`
  width: 175px;
  height: 50px;
  background-color: #FFFFFF;
  color: black;
  font-size: 25px;
  border: 2px solid #A0136A;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  padding: 0px;
  font-family: NanumBarunGothic;
  /* font-weight: bold; */
  letter-spacing: -2px; /* 글자 간격을 좁게 설정 */
`;


// 회원가입 이동 팝업창
const SignupPopupComponent = ({ onClose }) => {
  const handleSignupClick = () => {
    // 회원 가입 창으로 이동하는 로직 작성
    // 예시: window.location.href = '/signup';
    // alert('회원 가입 창으로 이동합니다.');
    onClose(); // 팝업창 닫기
    window.location.href = '/signup';
  };

  const handleCancleClick = () => {
    onClose(); // 팝업 창 닫기
  };


  return (
    <SignupPopup>
      <TopImage src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/10.png&fileId=7306&x=1920&y=1080&a=true" alt="animore" />
      <Message>AniMore에 처음 로그인 하셨습니다.<br />
        SNS 회원가입 화면으로 이동하시겠습니까?</Message>
      <SignupButtonContainer>
      <SignupButton onClick={handleSignupClick}>이동</SignupButton>
      <CancelButton onClick={handleCancleClick}>취소</CancelButton>
      </SignupButtonContainer> 
    </SignupPopup>
  );
};





const HeaderResult = () => {
  const [activeLink, setActiveLink] = useState("/signup");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLinkClick = (event, link) => {
    setActiveLink(link);
  };

  const handleLoginClick = () => {
    setLoggedIn(true);
    setPopupOpen(true);
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
    document.body.style.backgroundColor = "white"; // 팝업이 닫힐 때 화면 밝게 설정
  };

  const logout = () => {
    localStorage.removeItem("loginInfo");
    window.alert("로그아웃되었습니다.");
    setLoggedIn(false);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <Header>
      <SubMenu>
        <SubMenuUl>
          <SubMenuLi>
            <SubMenuLink
              href="/"
              isActive={activeLink === "/"}
              onClick={(event) => handleLinkClick(event, "/")}
            >
              홈
            </SubMenuLink>
          </SubMenuLi>

          <SubMenuLi>
            <SubMenuLink
              href="/hairshop"
              isActive={activeLink === "/hairshop"}
              onClick={(event) => handleLinkClick(event, "/hairshop")}
            >
              미용실
            </SubMenuLink>
          </SubMenuLi>

          <SubMenuLi>
            <SubMenuLink
              href="/reservationdetails"
              isActive={activeLink === "/reservationdetails"}
              onClick={(event) => handleLinkClick(event, "/reservationdetails")}
            >
              예약내역
            </SubMenuLink>
          </SubMenuLi>

          <SubMenuLi>
            <SubMenuLink
              href="/mypage"
              isActive={activeLink === "/mypage"}
              onClick={(event) => handleLinkClick(event, "/mypage")}
            >
              마이페이지
            </SubMenuLink>
          </SubMenuLi>

          <SubMenuLi>
            {/* localStorage에 로그인 정보가 있는지에 따라, header 마지막이 로그인, 로그아웃으로 바뀜 */}
            {isLoggedIn ? (
              <SubMenuText onClick={handleLogoutClick}>로그아웃</SubMenuText>
            ) : (
              <SubMenuText onClick={handleLoginClick}>로그인</SubMenuText>
            )}
          </SubMenuLi>
        </SubMenuUl>
      </SubMenu>

      {isPopupOpen && (
        <div className="login-popup" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div>
            <PopupContainer>
              <CloseButton onClick={handlePopupClose}>X</CloseButton>
              <TopImage src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/10.png&fileId=7306&x=1920&y=1080&a=true" alt="animore" />
              <Text>SNS 계정으로 로그인</Text>
              <ButtonContainer>
                <KakaoLoginPage/>
                <NaverLoginPage/>
                <GoogleLoginPage/>
                <FacebookLoginPage/>
              </ButtonContainer>
              {/* {isLoggedIn && <SignupPopupComponent onClose={handlePopupClose} />} */}
            </PopupContainer>
          </div>
        </div>
      )}
    </Header>
  );
};

export default HeaderResult;
