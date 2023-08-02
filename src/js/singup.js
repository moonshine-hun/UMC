import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Background = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const FirstTextContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
`;

const FirstText = styled.div`
  font-family: NanumBarunGothic;
  font-size: 33px;
  line-height: 48px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -2px;
  font-weight: bold;
`;

const FirstextImg = styled.img`
  width: 240px;
  height: 60px;
`;

const SecondTextContainer = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 수직으로 정렬하기 위해 추가 */
  justify-content: center;
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
`;

const SecondText = styled.div`
  font-family: NanumBarunGothic;
  font-size: 18px;
  line-height: 40px;
  display: flex;
  align-items: left;
  padding-left: 15px;
  padding-top: 12px;
  letter-spacing: -2px;
  color: #808080;
`;

const SecondTextOption = styled.div`
  font-family: NanumBarunGothic;
  font-size: 18px;
  line-height: 40px;
  display: flex;
  align-items: left;
  padding-left: 15px;
  padding-top: 12px;
  letter-spacing: -2px;
  font-weight: bold;
`;

const Divider = styled.div`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: #C0C0C0;
`;

const XText = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 20px;
  color: #C0C0C0;
  background-color: white;
  height: 1px; /* 구분선의 높이를 1px로 설정합니다. */
`;

const HorizontalDivider = () => {
  return (
    <Divider>
      <XText>x</XText>
    </Divider>
  );
};


const Input = styled.input`
  /* input 요소의 스타일을 지정합니다. */
  width: 60%;
  padding: 10px 15px;
  font-size: 18px;
  border: 0px;
  border-radius: 5px;
  outline: none; /* 포커스 시 외곽선 제거 */
  box-shadow: none; /* 포커스 시 그림자 제거 */
  margin: 0 auto; 
  position: absolute;
  left: 33%;
  font-weight: bold;
  font-family: NanumBarunGothic;
  letter-spacing: -2px;

  /* 포커스 시 테두리 스타일 설정 */
  &:focus {
    box-shadow: 0 0 5px gray; /* 포커스 시 테두리에 약간의 그림자 효과 추가 */
  }
`;

const Select = styled.select`
  position: absolute;
  left: 35%;
  height: 35px;
  width: 150px;
  font-size: 20px;
  /* font-weight: bold; */
  font-family: NanumBarunGothic;
  letter-spacing: -2px;

`;


const Padding1 = styled.div`
  padding-left: 160px; 
`;

const Padding2 = styled.div`
  padding-left: 48px; 
`;

const Label = styled.label`
  /* margin-left: 100px; */ 
  display: flex;
  align-items: center;
  flex-direction: row-reverse; /* 라디오 버튼을 텍스트의 오른쪽에 배치하기 위해 요소 순서를 반대로 조정합니다. */
  justify-content: flex-end; /* 텍스트를 라디오 버튼의 오른쪽으로 이동시킵니다. */
  font-weight: bold;
  font-family: NanumBarunGothic;
  letter-spacing: -2px;
  font-size: 18px; /* 체크 마크의 크기를 조정합니다. */
  font-weight: bold;
  color: #000; /* 체크 마크의 색상을 설정합니다. */
`;


const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  vertical-align: middle;
  appearance: none;
  border: 2px solid gray;
  border-radius: 3px;
  width: 20px;
  height: 30px;
  margin-left: 30px;
  

  &:checked {
  /* 체크 마크를 표시하기 위한 가상 요소(::before)를 사용합니다. */
  &::before {
    content: '\u2713'; /* 유니코드로 체크 마크(✓)를 표시합니다. */
    display: block;
    position: absolute;
    font-size: 20px; /* 체크 마크의 크기를 조정합니다. */
    font-weight: bold;
    color: #000; /* 체크 마크의 색상을 설정합니다. */
    pointer-events: none; /* 체크 마크가 실제로 클릭되지 않도록 이벤트를 무시합니다. */
  }
}
`;


const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  justify-content: center;
  top: 88%;
`;

const NextButton = styled.button`
  width: 210px;
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




const SignUp = () => {
  // 추가 정보 입력 상태 정의 및 초기값 설정
  const [address, setAddress] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState(''); // 강아지의 종류를 저장하는 상태
  const [petSex, setPetSex] = useState(''); // 강아지의 성별을 저장하는 상태
  const [petWeight, setPetWeight] = useState(0); // 강아지의 몸무게를 저장하는 상태
  const [age, setAge] = useState(0); // 강아지의 나이를 저장하는 상태
  const [features, setFeatures] = useState('');

  const navigate = useNavigate();

  // "다음" 버튼 클릭 시 동작하는 함수
  const handleNextClick = () => {
    // 입력된 정보를 여기서 활용하거나 다음 단계로 이동하는 로직을 작성하세요.
    // 예시로 입력된 정보를 콘솔에 출력하는 것으로 대체하겠습니다.
    console.log('Address:', address);
    console.log('Pet Name:', petName);
    console.log('Pet Type:', petType);
    console.log('Pet Sex:', petSex);
    console.log('Pet Weight:', petWeight);
    console.log('Age:', age);
    console.log('Features:', features);
    // 다음 페이지로 이동하는 코드
    navigate('/signupNext');
  };

  return (
    <Background>
      <FirstTextContainer>
        <FirstextImg src="https://cloud.adofai.gg/apps/files_sharing/publicpreview/cj4GTz3xLmExWjG?file=/10.png&fileId=7306&x=1920&y=1080&a=true" alt="이미지" />
        <FirstText>회원가입</FirstText>
      </FirstTextContainer>

      <SecondTextContainer>
        <SecondTextOption>추가정보기입 (선택)</SecondTextOption>
        <HorizontalDivider />

        <SecondText>
            주소:
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </SecondText>
        <HorizontalDivider />

        <SecondText>
          반려동물이름:
          <Input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
        </SecondText>
        <HorizontalDivider />

        <SecondText>
          반려동물종류:
          <Select value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="">선택하세요</option>
            <option value="Dog">개</option>
            <option value="Cat">고양이</option>
            <option value="Hamster">햄스터</option>
            {/* 추가적인 강아지의 종류 옵션을 필요에 맞게 추가하세요 */}
          </Select>
        </SecondText>
        <HorizontalDivider />

        <SecondText>
            성별:   
            <Padding1></Padding1>                   
            <Label>
              <CheckBoxInput
                name="petSex"
                value="Male"
                checked={petSex.Male}
                onChange={() => setPetSex((prevState) => ({ ...prevState, Male: !prevState.Male }))}
              />수컷
            </Label>
            <Padding2></Padding2>
            <Label>
              <CheckBoxInput
                name="petSex"
                value="Female"
                checked={petSex.Female}
                onChange={() => setPetSex((prevState) => ({ ...prevState, Female: !prevState.Female }))}
              />
              암컷
            </Label>
            <Padding2></Padding2>
            <Label>
              <CheckBoxInput
                name="petSex"
                value="Neutral"
                checked={petSex.Neutral}
                onChange={() => setPetSex((prevState) => ({ ...prevState, Neutral: !prevState.Neutral }))}
              />
              중성화
            </Label>
        </SecondText>
        <HorizontalDivider />

        <SecondText>
          반려동물무게(kg):
          <Input type="number" value={petWeight} onChange={(e) => setPetWeight(e.target.valueAsNumber)} />
        </SecondText>
        <HorizontalDivider />

        <SecondText>
          나이:
          <Input type="number" value={age} onChange={(e) => setAge(e.target.valueAsNumber)} />
        </SecondText>
        <HorizontalDivider />

        <SecondText>
          특이사항:
          <Input type="text" value={features} onChange={(e) => setFeatures(e.target.value)} />
        </SecondText>
        <HorizontalDivider />
      
      </SecondTextContainer>
      <ButtonContainer>
        {/* 다음 버튼 클릭 시 handleNextClick 함수 호출 */}
        <NextButton onClick={handleNextClick}>다음</NextButton>
      </ButtonContainer>
    </Background>
  );
};

export default SignUp;