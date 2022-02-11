import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { GoSignIn } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Container = styled.div`
  /* height: 900px;
  width: 500px;
  background-color: #bcddce;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
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

const Title = styled.div`
  /* font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #3dbefa;
  position: absolute;
  top: 15%;
  left: 52%;
  transform: translate(-50%, -50%); */
  display: flex;
  margin-top: 50%;
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #3dbefa;
`;

const LogoContainer = styled.div`
  /* font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 43%;
  left: 49%;
  transform: translate(-50%, -400%);
  margin-left: 3%; */
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
  /* width: 100%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: -1%;
  margin-top: 35%; */
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
  /* margin-left: 36%; */
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
`;

const IdLabel = styled.label`
  color: black;
  font-size: 17px;
  /* margin-left: 36%; */
`;

const InputPassword = styled.input`
  /* margin-left: 36%; */
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
`;

const PasswordLabel = styled.label`
  color: black;
  font-size: 17px;
  /* margin-left: 36%; */
`;

const InputName = styled.input`
  margin-left: 36%;
  padding: 0.5em 1.5em; // 세로길이, 가로길이
  text-align: center;
`;

const NameLabel = styled.label`
  color: black;
  font-size: 17px;
  margin-left: 36%;
`;

const RegisterButton = styled.button`
  position: center;
  font-size: 0.9em;
  margin-left: 36%;
  padding: 0.25em 5.25em; //세로 가로
  border-radius: 3px;
  color: white;
  background: #3dbefa;
`;

const ResetButton = styled.button`
  position: center;
  font-size: 0.9em;
  margin-left: 36%;
  padding: 0.25em 4.9em; //세로 가로
  border-radius: 3px;
  color: white;
  background: #3dbefa;
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
    <>
      <Container>
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
            <RegisterButton onClick={() => {alert("가입을 환영합니다!")}}>등록</RegisterButton>
          </Link>
          <br />
          <br />
          <ResetButton onClick={onReset}>Reset</ResetButton>
        </UnderContainer>
     </Container>
    </>
  );
};

export default InputSample;
