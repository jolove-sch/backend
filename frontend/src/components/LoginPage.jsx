import React  from 'react';
import styled from 'styled-components';
import { FaBaby } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: default;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #bcddce;
  /* height: 800px;
  width: 460px; */
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
`;

const Title = styled.div`
  display: flex;
  margin-top: 50%;
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #3dbefa;
  /* position: absolute;
  top: 30%;
  left: 52%;
  transform: translate(-50%, -50%); */
  /* display: flex;
  top: 0;
  left: 0; */
  /* justify-content: center;
  align-items: center; */
`;

const LogoContainer = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  /* position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -400%);
  margin-left: 3%; */

  .logo {
    font-size: 40px;
    color: #FFD3C3;
  }
`;

const UnderContainer = styled.div`
  /* top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: default;
  align-items: center; */
  /* flex-direction: column; */
  position: flex;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  /* margin-left: 2%; */

  .logo2 {
    font-size: 20px;
    color: gray;
    position: absolute;
    margin: 5px;
    margin-left: 3%;
  }
`;

const ButtonContainer = styled.div`

  /* width: 100%; */
  position: flex;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%);
  margin-left: 2%; */
`;

const LoginButton = styled.button`
  /* position: center; */
  font-size: 0.9em;
  /* margin-left: 0%; */
  padding: 0.25em 4.75em; //세로 가로
  border-radius: 3px;
  color: white;
  background: #3dbefa;
`;

const RegisterButton = styled.button`
  /* position: center; */
  font-size: 0.9em;
  /* margin-left: 0%; */
  padding: 0.25em 4.35em; // 세로 가로
  border-radius: 3px; // 테두리
  color: white;
  background: #3dbefa;
`;

const IdInputBox = styled.input`
  /* margin-left: 32%; */
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;

`;

const PasswordInputBox = styled.input`
  /* margin-left: 32%; */
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
`;

export default function LoginPage() {

  return (
    // <Form>
      <Container>
        <Title>SIGN IN</Title>
       <LogoContainer>
         <FaBaby className="logo" />
       </LogoContainer>
        <UnderContainer>
         <FaUser className="logo2"/>
         <IdInputBox type="text" placeholder='아이디' />
          <br />
         <FaKey className="logo2"/>
         <PasswordInputBox type="password" placeholder='비밀번호' />
          <br />
        </UnderContainer>
        <br />
        <ButtonContainer>
         <Link to="/mainpage">
          <LoginButton>로그인</LoginButton>
         </Link>
         <br />
         <Link to='/register'>
          <RegisterButton>회원가입</RegisterButton>
         </Link>
        </ButtonContainer>
      </Container>
    // </Form>
  );
}
