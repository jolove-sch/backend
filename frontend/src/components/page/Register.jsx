import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { GoSignIn } from 'react-icons/go';
import { Link, useHistory } from 'react-router-dom';

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
    color: #ecbd45;
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
  background-color: #ecbd45;
`;

const IdLabel = styled.label`
  color: #ecbd45;
  font-size: 17px;
  font-weight: bold;
`;

const InputPassword = styled.input`
  padding: 0.5rem 2.5rem; // 세로길이, 가로길이
  text-align: center;
  background-color: #ecbd45;
`;

const PasswordLabel = styled.label`
  color: #ecbd45;
  font-size: 17px;
  font-weight: bold;
`;

const InputName = styled.input`
  padding: 0.5rem 2.5rem; // 세로길이, 가로길이
  text-align: center;
  background-color: #ecbd45;
`;

const NameLabel = styled.label`
  color: #ecbd45;
  font-size: 17px;
  font-weight: bold;
`;

const RegisterButton = styled.button`
  position: center;
  font-size: 0.9rem;
  font-weight: 600;
  /* padding: 0.25rem 6rem; //세로 가로 */
  width: 100%;
  height: 10%;
  border-radius: 3px;
  color: #0e3fbd;
  background: #ecbd45;
  &:hover {
    background-color: white;
    color: #0e3fbd;
  }
`;

const ResetButton = styled.button`
  position: center;
  font-size: 0.9rem;
  font-weight: 600;
  /* padding: 0.25rem 6rem; //세로 가로 */
  width: 100%;
  height: 10%;
  border-radius: 3px;
  color: #0e3fbd;
  background: #ecbd45;
  &:hover {
    background-color: white;
    color: #0e3fbd;
  }
`;

const GotoLogin = styled.button`
  position: center;
  font-size: 0.9rem;
  font-weight: 600;
  width: 100%;
  height: 10%;
  border-radius: 3px;
  color: #0e3fbd;
  background: #ecbd45;
  &:hover {
    background-color: white;
    color: #0e3fbd;
  }
`;

const Register = ({user}) => {
  const inputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const history = useHistory();

    const goToLogin = () => {
        history.push('/');
    }


  const handleChange = (event) => {
    const type = event.target.name;
    if (type === 'email') {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
    } else if (type === 'password') {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
    } else if (type === 'phoneNumber') {
        const inputPhoneNumber = event.target.value;
        setPhoneNumber(inputPhoneNumber);
    }
}

const onSignUp =  async event => {
  event.preventDefault();
  if(email === "" || password === "" || phoneNumber === ""){
    window.alert("Email과 Password, 전화번호를 입력해주세요.");
    return;
  }
  console.log('Signup');  
  await user//
        .signup(email, password, phoneNumber)
        .then(() => goToLogin)
  }

  const onReset = () => {
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    inputRef.current.focus();
  };

  return (
      <Container>
        <ElementContainer>
        <Title>회원가입</Title>
         <LogoContainer>
             <GoSignIn className="logo" onClick={goToLogin} />
         </LogoContainer>
        <UnderContainer>
          <IdLabel>이메일</IdLabel>
          <br />
          <InputId 
            type="text"
            name="email" 
            placeholder="Input Id Here"
            value={email}
            onChange={handleChange}
            ref={inputRef}
          />
          <br />
          <br />
          <PasswordLabel>비밀번호</PasswordLabel>
          <br />
          <InputPassword 
            type="password" 
            name="password"
            value={password}
            placeholder="Input Password Here"
            onChange={handleChange} 
          />
          <br />
          <br />
          <NameLabel>전화번호</NameLabel>
          <br />
          <InputName 
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Input phoneNumber Here"
            onChange={handleChange} 
          />
          <br />
          <br />
          <Link to="/">
            <RegisterButton onClick={() => {alert("가입을 환영합니다!")}}>Sign Up</RegisterButton>
          </Link>
          <br />
          <br />
          <ResetButton onClick={onReset}>Reset</ResetButton>
          <br />
          <br />
          <Link to='/'>
            <GotoLogin>
              Back to Login Page
            </GotoLogin>
          </Link>
        </UnderContainer>
        </ElementContainer>
     </Container>
  );
};

export default Register;
