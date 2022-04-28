import React, {useState, useRef}  from 'react';
import styled from 'styled-components';
import { FaBaby } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
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
  background-color: #0e3fbd;
`;

const ElementContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  height: 3em;
  width: 6.5em;
  margin-bottom: 0.5em;
  border-radius: 10px;
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #0e3fbd;
  background-color: #ecbd45;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: black;

  .logo {
    font-size: 40px;
    color: #FFD3C3;
  }
`;

const UnderContainer = styled.div`
  top: 50%;
  left: 50%;

  .logo2 {
    font-size: 20px;
    color: #0e3fbd;
    position: absolute;
    margin: 5px;
    margin-left: 1%;
  }
`;

const ButtonContainer = styled.div`
  position: flex;
  top: 50%;
  left: 50%;
`;

const LoginButton = styled.button`
  font-size: 0.9em;
  font-weight: bold;
  width: 100%;
  height: 50%;
  padding: 0em 4.8em;
  border-radius: 3px;
  color: #0e3fbd;
  background: #ecbd45;
  &:hover {
    background-color: white;
    color: #0e3fbd;
  }
`;

const RegisterButton = styled.button`
  font-size: 0.9em;
  font-weight: bold;
  width: 100%;
  height: 50%;
  border-radius: 3px; // 테두리
  color: #0e3fbd;
  background: #ecbd45;
  &:hover {
    background-color: white;
    color: #0e3fbd;
  }
`;

const IdInputBox = styled.input`
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
  background-color: #ecbd45;
  ::placeholder{
    color: #0e3fbd;
  }
`;

const PasswordInputBox = styled.input`
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
  background-color: #ecbd45;
  ::placeholder{
    color: #0e3fbd
  }
`;

const LoginPage = ({user}) => {

  const history = useHistory();
  const inputRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = event => {
    event.preventDefault();
    if(email === "" || password === ""){
        window.alert("Email과 Password를 입력해주세요.");
        return;
    }
    console.log('Login');
    user.login(email, password);
      //.then(data => goToMain(data.access-token));
    history.push('/mainpage');
};  

const goToSignUp = () => {
  history.push('/signup');
}

const handleOnChange = (event) => {
    const type = event.target.name;
    if (type === 'email') {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
    } else if (type === 'password') {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
    }
}

  return (
      <Container>
        <ElementContainer>
        <Title>SIGN IN</Title>
       <LogoContainer>
         <FaBaby className="logo" />
       </LogoContainer>
        <UnderContainer>
         <FaUser className="logo2"/>
         <IdInputBox 
          type="text" 
          placeholder='Email'
          name="email"
          ref={inputRef}
          onChange={handleOnChange}
          />
          <br />
         <FaKey className="logo2" />
         <PasswordInputBox 
          type="password" 
          placeholder='Password' 
          name="password"
          onChange={handleOnChange}
          />
          <br />
        </UnderContainer>
        <br />
        <ButtonContainer>
         <Link to="/mainpage">
          <LoginButton onClick={onLogin}>로그인</LoginButton>
         </Link>
         <br />
         <Link to='/register'>
          <RegisterButton onClick={goToSignUp}>회원가입</RegisterButton>
         </Link>
        </ButtonContainer>
        </ElementContainer>
      </Container>
  );
}

export default LoginPage;
