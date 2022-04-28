import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';
import { MdToys } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
// import { AiOutlinePlusSquare } from 'react-icons/ai';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';

const Container1 = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const TopBar = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   height: 3rem;
   width: 100vw;
   color: black;
   background: #4EED8E;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 100vw;

    .mobil {
      margin-left: 0.3rem;
      font-size: 25px;
      color: black;
    }
`;

const Logout = styled.div`
  height: 30px;
  width: 30px;

  .logout {
    font-size: 25px;
    color: black;
  }
`;

const MiddleBarContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: start;
  width: 100vw;
`;

const MiddleBar = styled.nav`
   position: fixed;
   top: 3rem;
   width: 100vw;
   height: 3rem;
   color: black;
   background: #4EED8E;
   font-weight: bold;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
`;

const BandIconContainer = styled.div`
  /* width: 2rem;
  height: 2rem; */
`;
const MobilIconContainer = styled.div`
  /* width: 2rem;
  height: 2rem; */
`;
const UserIconContainer = styled.div`
  /* width: 2rem;
  height: 2rem; */
`;

const RegisterFormContainer = styled.div`
  width: 100vw;
  height: calc( 100vh - 12rem );
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.div`
    width: 350px;
    height: 170px;
    border-radius: 10px;
    background-color: white;
    font-size: 20px;
    box-shadow: 4px 4px 0px #e9dadad7;
`;

const InsideLogo = styled.div`
   width: 6rem;
   height: 170px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: yellow;
   border-radius: 10px;
   float: left;
`;

const InsideForm = styled.div`
    margin-top: 1rem;
    margin-right: 3rem;
    float: right;
    width: 10rem;
    height: 10rem;
`;

const RegisterButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: white;
    border-color: white;
    color: #4EED8E;
    text-align: center;
    line-height: 35px;
    font-size: 17px;
    font-weight: bold;
    /* margin-left: 2rem; */
`;

const InsideTitle = styled.div`
    width: 170px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    /* margin-left: 2rem; */
`;

const GetSerial = styled.input`
    width: 150px;
    text-align: center;
`;

const BottomBar = styled.nav`
  height: 3rem;
  width: 100vw;
  color: black;
  background: #4EED8E;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  align-items: center;
`;

const SetBottom = styled.div` // 그냥 크기 맞추는용 없앨수도 있음
  height: 3rem;
  width: 100vw;
  background-color: white;
  color: white;
  position: fixed;
  bottom: 3rem;
`;

const BottomLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-top: 10px;
`;

const BottomBaby = styled.div`
  /* width: 2em;
  height: 1em; */

  .bottombaby {
    font-size: 30px;
    color: #FFD3C3;
  }
`;

const BottomMonitor = styled.div`
  /* width: 2em;
  height: 1em; */

  .bottommonitor {
    font-size: 30px;
    color: black;
  }
`;

const BottomUser = styled.div`
  /* width: 2em;
  height: 1em; */

  .bottomuser {
    font-size: 30px;
    color: black;
  }
`;

const MobilRegisterPage = ({register1, user}) => {
    const history = useHistory();
    const [serialNumber, setSerialNumber] = useState('');
    const [email, setEmail] = useState('');
    const inputRef = useRef()

    const logOut = () => {
      console.log('LogOut');
      user.logout();
      history.push('/');
      }

  const MobilRegister = event => {
      event.preventDefault();
      if(serialNumber === "" || email ===""){
          window.alert("이메일과 모빌의 일련번호를 입력해주세요.");
          return;
      }
      console.log('Mobil Register');
      register1.mobilRegister(email, serialNumber);
  };

  const handleChange = (event) => {
    const type = event.target.name;
    if (type === 'serialNumber') {
        const inputNumber = event.target.value;
        setSerialNumber(inputNumber);
    }
    else if (type === 'email') {
        const inputEmail= event.target.value;
        setEmail(inputEmail);
    }
}
const onReset = () => {
  setEmail('');
  setSerialNumber('');
  inputRef.current.focus();
};

  return (
    <Container1>
    <TopBar>
    <Link to="/">
          <Logout>
            <MdLogout className="logout" onClick={logOut}/>
          </Logout>
        </Link>
        <Title>모빌 등록
          <MdToys className="mobil" />
        </Title>
    </TopBar>
    <MiddleBarContainer>
    <MiddleBar>
        <Link to="/bandregisterpage">
          <BandIconContainer>
            <BsSmartwatch size="27" color="black" />
          </BandIconContainer>
        </Link>
        <Link to="/mobilregisterpage">
          <MobilIconContainer>
            <MdToys className="mobil" size="30" color="red" />
          </MobilIconContainer>
        </Link>
        <Link to="/userregisterpage">
          <UserIconContainer>
            <FaUserCircle className="user" size="28" color="black" />
          </UserIconContainer>
        </Link>
    </MiddleBar>
    <RegisterFormContainer>
    <RegisterForm>
        <InsideLogo>
            <MdToys className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            <InsideTitle>기기 일련번호</InsideTitle>
            <GetSerial 
              type="text" 
              name="email"
              placeholder="email Here" 
              onChange={handleChange}
            />
            <GetSerial 
              type="text" 
              placeholder="Serial Number Here" 
              name="serialNumber"
              ref={inputRef}
              onChange={handleChange}
            />
            <RegisterButton onClick={MobilRegister, onReset}>등록</RegisterButton>
        </InsideForm>
    </RegisterForm>
    </RegisterFormContainer>
    </MiddleBarContainer>
    <SetBottom />
    <BottomBar>
      <BottomLogoContainer>
        <BottomBaby>
        <Link to="/mainpage">
          <FaBaby className="bottombaby" />
        </Link>
        </BottomBaby>
        <BottomMonitor>
        <Link to="/monitoringpage">
          <FiMonitor className="bottommonitor" />
        </Link>
        </BottomMonitor>
        <BottomUser>
        <Link to="/registerpage">
          <FaUserCircle className="bottomuser" />
        </Link>
        </BottomUser>
      </BottomLogoContainer>
    </BottomBar>
    </Container1>
  );
}

export default MobilRegisterPage;