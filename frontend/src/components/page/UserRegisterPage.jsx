import React from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';
import { MdToys } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
   background: #ecbd45;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0e3fbd;
    font-weight: bold;
    font-size: 20px;
    width: 100vw;

    .user1 {
      margin-left: 0.3rem;
      font-size: 25px;
      color: #0e3fbd;
    }
`;

const Logout = styled.div`
  height: 30px;
  width: 30px;

  .logout {
    font-size: 25px;
    color: #0e3fbd;
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
    background: #ecbd45;
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
    background: linear-gradient(45deg, #9effed, #acb6e5);
    font-size: 20px;
    box-shadow: 4px 4px 0px #e9dadad7;
`;

const InsideLogo = styled.div`
    width: 6rem;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: yellow; */
    border-radius: 10px;
    float: left;
`;

const InsideForm = styled.div`
    margin-top: 0.2rem;
    margin-right: 2rem;
    float: right;
    width: 12rem;
    height: 10rem;
`;

const RegisterButton = styled.button`
    width: 100px;
    height: 35px;
    background: linear-gradient(45deg, #9effed, #acb6e5);
    border-color: #9effed;
    color: black;
    border-radius: 10px;
    text-align: center;
    line-height: 35px;
    font-size: 17px;
    font-weight: bold;
    margin-top: 0.5rem;
`;

const InsideTitle = styled.div`
    width: 190px;
    color: black;
    font-size: 17px;
    font-weight: bold;
`;

const GetId = styled.input`
    width: 150px;
    text-align: center;
    background-color: white;
`;

const GetPassword = styled.input`
    width: 150px;
    text-align: center;
    background-color: white;
`;

const BottomBar = styled.nav`
  height: 3rem;
  width: 100vw;
  color: black;
  background: #ecbd45;
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
    color: #0e3fbd;
  }
`;

const BottomUser = styled.div`
  /* width: 2em;
  height: 1em; */

  .bottomuser {
    font-size: 30px;
    color: #0e3fbd;
  }
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
        <Title>사용자 등록
            <FaUserCircle className="user1" />
        </Title>
    </TopBar>
    <MiddleBarContainer>
    <MiddleBar>
        <Link to="/bandregisterpage">
          <BandIconContainer>
            <BsSmartwatch size="27" color="#0e3fbd" />
          </BandIconContainer>
        </Link>
        <Link to="/mobilregisterpage">
          <MobilIconContainer>
            <MdToys className="mobil" size="30" color="#0e3fbd" />
          </MobilIconContainer>
        </Link>
        <Link to="/userregisterpage">
          <UserIconContainer>
            <FaUserCircle className="user" size="28" color="red" />
          </UserIconContainer>
        </Link>
    </MiddleBar>
    <RegisterFormContainer>
    <RegisterForm>
        <InsideLogo>
            <FaUserCircle className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            <InsideTitle>사용자 아이디, 비밀번호</InsideTitle>
            <GetId type="text" placeholder="User Id Here" />
            <GetPassword type="password" placeholder="User Password Here" />
            <RegisterButton>등록</RegisterButton>
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