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
  const handleNaverLoginClick = () => {
    window.location.href = "https://animore.co.kr/oauth2/authorization/naver";
  };

  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2041.png&fileId=7626&x=1920&y=1080&a=true"
      alt="Naver Login"
      onClick={handleNaverLoginClick} // 네이버 로그인 처리 함수 연결
    />
  );
};

// 구글 로그인 버튼 컴포넌트
const GoogleLoginPage = () => {
  const handleGoogleLoginClick = () => {
    window.location.href = "https://animore.co.kr/oauth2/authorization/google";
  };
  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2041.png&fileId=7626&x=1920&y=1080&a=true"
      alt="Google Login"
      onClick={handleGoogleLoginClick} // 구글 로그인 처리 함수 연결
    />
  );
};

// 페이스북 로그인 버튼 컴포넌트
const FacebookLoginPage = () => {
  const handleFacebookLoginClick = () => {
    window.location.href = "https://animore.co.kr/oauth2/authorization/Facebook";
  };

  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2040.png&fileId=7625&x=1920&y=1080&a=true"
      alt="Facebook Login"
      onClick={handleFacebookLoginClick} // 페이스북 로그인 처리 함수 연결
    />
  );
};

// 카카오톡 로그인 버튼 컴포넌트
const KakaoLoginPage = () => {
  const handleKakaoLoginClick = () => {
    window.location.href = "https://animore.co.kr/oauth2/authorization/kakao";
  };

  return (
    <ImageButton
      src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/image%2036.png&fileId=7624&x=1920&y=1080&a=true"
      alt="Kakao Login"
      // onClick={handleKakaoLogin} // 페이스북 로그인 처리 함수 연결
      onClick={handleKakaoLoginClick}
    />
  );
};



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
  const [token, setToken] = useState(null);

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
    setToken(null); // 토큰도 초기화
  };

  const handleLogoutClick = () => {
    logout();
  };

  const handleLoginSuccess = async (resultToken) => {
    try {
      const response = await axios.get(
        "https://animore.co.kr/login/oauth2/code/kakao",
        {
          headers: {
            Authorization: `Bearer ${resultToken}`,
          },
        }
      );

      const apiResult = response.data;

      setLoggedIn(true);
      setToken(resultToken); // 토큰 저장


      handlePopupClose();

      // 로그인 성공 후 메인 페이지로 이동
      window.location.href = "/sdfsdf"; // 메인 페이지의 경로로 수정해주세요
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
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
                <KakaoLoginPage onLoginSuccess={handleLoginSuccess} />
                <NaverLoginPage onLoginSuccess={handleLoginSuccess} />
                <GoogleLoginPage onLoginSuccess={handleLoginSuccess} />
                <FacebookLoginPage onLoginSuccess={handleLoginSuccess} />
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
