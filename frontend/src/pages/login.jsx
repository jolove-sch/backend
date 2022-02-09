import React, {useState, useRef}  from 'react';
import styled from 'styled-components';
import { FaBaby } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';


const Login = ({user}) => {
    const history = useHistory();
    const inputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   const goToMain = (userEmail) => {
        history.push({
            pathname: '/mainpage',

            state: {id: userEmail}
        })
    }

    const goToSignUp = () => {
        history.push('/signup');
    }

    const onLogin = event => {
        event.preventDefault();
        if(email === "" || password === ""){
            window.alert("Email과 Password를 입력해주세요.");
            return;
        }
        console.log('Login');
        user.login(email, password);
    };  

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


    return(
        <Container>
            <Title>SIGN IN</Title>
        <LogoContainer>
            <FaBaby className="logo" />
        </LogoContainer>
        <UnderContainer >
            <FaUser className="logo2" />
            <IdInputBox 
                type="text" 
                placeholder='Email' 
                name="email"
                ref={inputRef}
                onChange={handleOnChange} />
            <br />
            <br />
            <FaKey className="logo2" />
            <NameInputBox 
                type="password" 
                placeholder='Password'
                name="password"
                
                onChange={handleOnChange} />
            <br />
        </UnderContainer>
        <ButtonContainer>
                <LoginButton onClick={onLogin}>로그인</LoginButton>
            <br />
            <RegisterButton onClick={goToSignUp}>회원가입</RegisterButton>

        </ButtonContainer>
    </Container>
    )
}

const Container = styled.div`
  height: 800px;
  width: 460px;
  background-color: #bcddce;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  font-weight: bold;
  color: #3dbefa;
  position: absolute;
  top: 30%;
  left: 52%;
  transform: translate(-50%, -50%);
`;

const LogoContainer = styled.div`
    font-size: 2em;
    font-family: sans-serif;
    font-weight: bold;
    color: black;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -400%);
    margin-left: 3%;
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
    margin-left: 2%;
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
    margin-left: 2%;
`;

const LoginButton = styled.button`
    position: center;
    font-size: 0.9em;
    margin-left: 0%;
    padding: 0.25em 4.75em; //세로 가로
    border-radius: 3px;
    color: white;
    background: #3dbefa;
`;

const RegisterButton = styled.button`
    position: center;
    font-size: 0.9em;
    margin-left: 0%;
    padding: 0.25em 4.35em; // 세로 가로
    border-radius: 3px; // 테두리
    color: white;
    background: #3dbefa;
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

export default Login;