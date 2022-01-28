import React  from 'react';
import styled from 'styled-components';
import { FaBaby } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';

const Container = styled.div`
  height: 800px;
  width: 460px;
  background-color: #80d8ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #ff6f00;
  position: absolute;
  top: 30%;
  left: 55%;
  transform: translate(-50%, -50%);
`;

const UpperContainer = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -400%);
  margin-left: 4.5%;

  .logo {
    font-size: 40px;
    color: #FFD3C3;
  }
`;

const UnderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 4%;

  .logo2 {
    font-size: 20px;
    color: gray;
    position: absolute;
    margin: 4px;
    margin-left: 33%;
  }
`;

const ButtonContainer = styled.div`

  width: 100%;
  position: absolute;
  top: 60%;
  left: 82%;
  transform: translate(-50%, -50%);
  margin-left: 4%;
`;

const LoginButton = styled.button`
  position: center;
  font-size: 0.9em;
  margin-left: 0%;
  padding: 0.25em 4.7em; //세로 가로
  border-radius: 3px;
  color: white;
  background: #ff6f00;
`;

const RegisterButton = styled.button`
  position: center;
  font-size: 0.9em;
  margin-left: 0%;
  padding: 0.25em 4.25em; // 세로 가로
  border-radius: 3px; // 테두리
  color: white;
  background: #ff6f00;
`;

const IdInputBox = styled.input`
  margin-left: 32%;
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;

`;

const NameInputBox = styled.input`
  margin-left: 32%;
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
`;

export default function LoginPage() {

  return (
    // <Form>
      <Container>
        <Title>SIGN IN</Title>
       <UpperContainer>
         <FaBaby className="logo" />
       </UpperContainer>
        <UnderContainer>
         <FaUser className="logo2" />
         <IdInputBox type="text" placeholder='아이디' />
          <br />
          <br />
         <FaKey className="logo2" />
         <NameInputBox type="password" placeholder='비밀번호' />
          <br />
        </UnderContainer>
        <ButtonContainer>
         <Link to="/mainpage">
          <LoginButton>로그인</LoginButton>
         </Link>
         <br />
         <RegisterButton>회원가입</RegisterButton>
        </ButtonContainer>
      </Container>
    // </Form>
  );
}
