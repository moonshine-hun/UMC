const handleInstagramLogin = () => {
  // Instagram 로그인 버튼 클릭 시 실행되는 함수
  // Instagram 로그인 창을 열고 사용자 인증 처리

  // Instagram API 호출 및 인증 요청
  InstagramAuth.login()
    .then((response) => {
      // 인증 성공 시 처리할 로직
      const accessToken = response.access_token;
      // Access Token을 활용하여 추가 작업 수행
    })
    .catch((error) => {
      // 인증 실패 시 처리할 로직
      console.error("Instagram 로그인 실패:", error);
    });
};