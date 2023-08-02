import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginPage = () => {
  // 로그인 성공 시 실행될 콜백 함수
  const onSuccess = (response) => {
    console.log('로그인 성공:', response);
    // 여기서 response에는 액세스 토큰과 사용자 정보 등이 들어있습니다.
    // 원하는 작업을 수행하시면 됩니다.
  };

  // 로그인 실패 시 실행될 콜백 함수
  const onFailure = (error) => {
    console.log('로그인 실패:', error);
  };

  return (
    <div>
      {/* 구글 로그인 버튼 */}
      <GoogleLogin
        clientId="구글_클라이언트_ID_입력"
        buttonText="Google 계정으로 로그인"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};


