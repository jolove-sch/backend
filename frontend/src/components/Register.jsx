import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { GoSignIn } from 'react-icons/go';
import { Link } from 'react-router-dom';

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
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #3dbefa;
`;

const LogoContainer = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: black;

  .logo {
    font-size: 40px;
    color: black;
  }
`;

const UnderContainer = styled.div`
  position: flex;
  top: 50%;
  left: 50%;

  .logo2 {
    font-size: 20px;
    color: gray;
    position: absolute;
    margin: 5px;
    margin-left: 3%;
  }
`;

const InputId = styled.input`
  padding: 0.5rem 2.5rem; // 세로길이, 가로길이
  text-align: center;
`;

const IdLabel = styled.label`
  color: black;
  font-size: 17px;
`;

const InputPassword = styled.input`
  padding: 0.5rem 2.5rem; // 세로길이, 가로길이
  text-align: center;
`;

const PasswordLabel = styled.label`
  color: black;
  font-size: 17px;
`;

const InputName = styled.input`
  padding: 0.5rem 2.5rem; // 세로길이, 가로길이
  text-align: center;
`;

const NameLabel = styled.label`
  color: black;
  font-size: 17px;
`;

const RegisterButton = styled.button`
  position: center;
  font-size: 0.9rem;
  /* padding: 0.25rem 6rem; //세로 가로 */
  width: 100%;
  height: 10%;
  border-radius: 3px;
  color: white;
  background: #3dbefa;
  &:hover {
    background-color: white;
    color: #3dbefa;
  }
  
`;

const ResetButton = styled.button`
  position: center;
  font-size: 0.9rem;
  /* padding: 0.25rem 6rem; //세로 가로 */
  width: 100%;
  height: 10%;
  border-radius: 3px;
  color: white;
  background: #3dbefa;
  &:hover {
    background-color: white;
    color: #3dbefa;
  }
`;

const InputSample = () => {
  const inputRef = useRef(); //ref 객체 생성.
  
  const [user, setUser] = useState({
    userid: "",
    userpassword: "",
    username: "",
  });
  const { userid, userpassword, username } = user;

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onReset = () => {
    setUser({ userid: "", userpassword: "", username: "" });
    inputRef.current.focus();
  };

  return (
      <Container>
        <ElementContainer>
        <Title>회원가입</Title>
         <LogoContainer>
             <GoSignIn className="logo" />
         </LogoContainer>
        <UnderContainer>
          <IdLabel>ID</IdLabel>
          <br />
          <InputId 
            type="text"
            name="userid" 
            placeholder="Input Id Here"
            value={userid}
            onChange={onChangeInput}
            ref={inputRef}
          />
          <br />
          <br />
          <PasswordLabel>PASSWORD</PasswordLabel>
          <br />
          <InputPassword 
            type="password" 
            name="userpassword"
            value={userpassword}
            placeholder="Input Password Here"
            onChange={onChangeInput} 
          />
          <br />
          <br />
          <NameLabel>NAME</NameLabel>
          <br />
          <InputName 
            type="text"
            name="username"
            value={username}
            placeholder="Input Name Here"
            onChange={onChangeInput} 
          />
          <br />
          <br />
          <Link to="/">
            <RegisterButton onClick={() => {alert("가입을 환영합니다!")}}>Sign Up</RegisterButton>
          </Link>
          <br />
          <br />
          <ResetButton onClick={onReset}>Reset</ResetButton>
        </UnderContainer>
        </ElementContainer>
     </Container>
  );
};

export default InputSample;
