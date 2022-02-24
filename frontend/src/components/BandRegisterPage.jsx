import React from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';
import { MdToys } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
// import { AiOutlinePlusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';

const Container1 = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const TopBar = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   height: 30px;
   width: 100%;
   padding: 1rem;
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
    width: 100%;
    margin-right: 3rem;

    .watch {
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
  width: 100%; 
`;

const MiddleBar = styled.nav`
    position: fixed;
    top: 6vh;
    width: 100%;
    height: 30px;
    padding: 1rem;
    color: black;
    background: #4EED8E;
    font-weight: bold;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;

const BandIconContainer = styled.div`
  width: 2rem;
  height: 2rem;
`;
const MobilIconContainer = styled.div`
  width: 2rem;
  height: 2rem;
`;
const UserIconContainer = styled.div`
  width: 2rem;
  height: 2rem;
`;

const RegisterFormContainer = styled.div`
  width: 100%;
  height: 100vh;
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
    margin-left: 2rem;
`;

const InsideTitle = styled.div`
    width: 170px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    margin-left: 2rem;
`;

const GetSerial = styled.input`
    width: 150px;
    text-align: center;
`;

const BottomBar = styled.nav`
  height: 28px;
  width: 100%;
  padding: 1rem;
  color: black;
  background: #4EED8E;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export default function BandRegisterPage() {

  return (
    <Container1>
    <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" />
          </Logout>
        </Link>
        <Title>밴드 등록
          <BsSmartwatch className="watch" />
        </Title>
    </TopBar>
    <MiddleBarContainer>
    <MiddleBar>
        <Link to="/bandregisterpage">
          <BandIconContainer>
            <BsSmartwatch size="27" color="red" />
          </BandIconContainer>
        </Link>
        <Link to="/mobilregisterpage">
          <MobilIconContainer>
            <MdToys className="mobil" size="30" color="black" />
          </MobilIconContainer>
        </Link>
        <Link to="/userregisterpage">
          <UserIconContainer>
            <FaUserCircle className="user" size="28"color="black" />
          </UserIconContainer>
        </Link>
    </MiddleBar>
    {/* </MiddleBarContainer> */}
    <RegisterFormContainer>
    <RegisterForm>
        <InsideLogo>
            <BsSmartwatch className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            <InsideTitle>기기 일련번호</InsideTitle>
            <GetSerial type="text" placeholder="Serial Number Here" />
            <RegisterButton>등록</RegisterButton>
        </InsideForm>
    </RegisterForm>
    </RegisterFormContainer>
    </MiddleBarContainer>
    <BottomBar>
        <Link to="/mainpage">
          <FaBaby size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor size="30" color="black"/>
        </Link>
          <FaUserCircle size="35" color="black"/>
    </BottomBar>
    </Container1>
  );
}
