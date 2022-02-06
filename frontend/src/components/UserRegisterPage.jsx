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

const TopBar = styled.nav`
   height: 40px;
   padding: 1rem;
   color: black;
   background: #4EED8E;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div`
    color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 180px;
    margin-left: 120px;
    margin-bottom: 4px;
`;

const Logout = styled.div`
  height: 30px;
  width: 30px;

  .logout {
    font-size: 25px;
    color: black;
  }
`;

const LogoBox = styled.div`
  margin-right: 120px;
  .logo {
        font-size: 25px;
        color: black;
    }
`;

const MiddleBar = styled.nav`
    height: 30px;
    padding: 1rem;
    color: black;
    background: #4EED8E;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RegisterForm = styled.div`
    width: 370px;
    height: 170px;
    margin-left: 7%;
    margin-top: 15%;
    border-radius: 10px;
    background-color: white;
    font-size: 20px;
    box-shadow: 4px 4px 0px #e9dadad7;
`;

const InsideForm = styled.div`
    width: 200px;
    height: 170px;
    margin-top: -40%;
    margin-left: 38%;
`;

const InsideLogo = styled.div`
    width: 100px;
    height: 170px;
    margin-right: 0;
    margin-left: 1%;
    background-color: yellow;
    border-radius: 10px;

    .logo3 {
        margin-left: 30%;
        margin-top: 60%;
    }

`;

const RegisterButton = styled.button`
    width: 100px;
    height: 35px;
    margin-left: 20%;
    margin-top: 5%;
    background-color: white;
    border-color: white;
    color: #4EED8E;
    text-align: center;
    line-height: 35px;
    font-size: 17px;
    font-weight: bold;
`;

// const LogoContainer = styled.div`
//     .logo4 {
//         color: black;
//         font-size: 30px;
//         margin-left: 48%;
//     }
// `;

const InsideTitle = styled.div`
    width: 170px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    margin-top: -9%;
    margin-left: 5%;
`;

const GetId = styled.input`
    width: 150px;
    margin-left: 10px;
    text-align: center;
`;

const GetPassword = styled.input`
    width: 150px;
    margin-left: 10px;
    text-align: center;
`;

const BottomBar = styled.nav`
  height: 28px;
  padding: 1rem;
  color: black;
  background: #4EED8E;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0; 
  margin-top: 74%;

  .monitor {
      margin-left: 5px;
  }
`;

export default function BandRegisterPage() {
  return (
    <>
    <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" />
          </Logout>
        </Link>
        <Title>사용자 등록</Title>
        <LogoBox>
            <FaUserCircle className="logo" />
        </LogoBox>
    </TopBar>
    <MiddleBar>
        <Link to="/bandregisterpage">
            <BsSmartwatch size="27" color="black" />
        </Link>
        <Link to="/mobilregisterpage">
            <MdToys size="30" color="black" />
        </Link>
        <Link to="/userregisterpage">
            <FaUserCircle size="27" color="red" />
        </Link>
    </MiddleBar>
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
    {/* <LogoContainer>
        <AiOutlinePlusSquare className="logo4" />
    </LogoContainer> */}
    <BottomBar>
    <Link to="/mainpage">
          <FaBaby size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor className="monitor" size="30" color="black"/>
        </Link>
        <Link to="/registerpage">
          <FaUserCircle size="35" color="black"/>
        </Link>
    </BottomBar>
  </>
  );
}