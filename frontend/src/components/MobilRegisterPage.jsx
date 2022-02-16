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
  display: flex;
  justify-content: center;
  margin-left: -40px;
`;

const TopBar = styled.nav`
   /* height: 40px;
   padding: 1rem;
   color: black;
   background: #4EED8E;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center; */
   position: absolute;
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
    /* color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 170px;
    margin-left: 130px;
    margin-bottom: 4px;  */
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    /* align-items: center; */
    color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    margin-right: 10%;

    .mobil {
      font-size: 25px;
      color: black;
      margin-left: 1%;
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

// const LogoBox = styled.div`
//   margin-right: 130px;
//   .logo {
//         font-size: 25px;
//         color: black;
//     }
// `;

const MiddleBar = styled.nav`
    width: 100%;
    height: 30px;
    padding: 1rem;
    color: black;
    background: #4EED8E;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14%;
    .user {
      margin-left: -90%;
    }
    .mobil {
      margin-left: -50%;
    }
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
    margin-top: -39%;
    margin-left: 35%;
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
    margin-left: 22%;
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
    margin-top: -5%;
    margin-left: 25%;
`;

const GetSerial = styled.input`
    width: 150px;
    margin-left: 17px;
    margin-top: -5px;
    text-align: center;
`;

const BottomBar = styled.nav`
  /* height: 28px;
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
  margin-top: 74%; */
  height: 28px;
  width: 100%;
  padding: 1rem;
  color: black;
  background: #4EED8E;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* bottom: 0;
  left: 0;
  right: 0;  */
  margin-top: 76%;

  .monitor2 {
    margin-bottom: 1px;
    margin-left: -50%;
  }
  .user {
    margin-left: -80%;
  }
  .baby {
    margin-bottom: 1px;
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
        <Title>모빌 등록
          <MdToys className="mobil" />
        </Title>
    </TopBar>
    <MiddleBar>
        <Link to="/bandregisterpage">
            <BsSmartwatch size="27" color="black" />
        </Link>
        <Link to="/mobilregisterpage">
            <MdToys className="mobil" size="30" color="red" />
        </Link>
        <Link to="/userregisterpage">
            <FaUserCircle className="user" size="28" color="black" />
        </Link>
    </MiddleBar>
    <Container1>
    <RegisterForm>
        <InsideLogo>
            <MdToys className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            <InsideTitle>기기 일련번호</InsideTitle>
            <GetSerial type="text" placeholder="Serial Number Here" />
            <RegisterButton>등록</RegisterButton>
        </InsideForm>
    </RegisterForm>
    </Container1>
    {/* <LogoContainer>
        <AiOutlinePlusSquare className="logo4" />
    </LogoContainer> */}
    <BottomBar>
        <Link to="/mainpage">
          <FaBaby className="baby" size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor className="monitor2" size="30" color="black"/>
        </Link>
        <Link to="/registerpage">
          <FaUserCircle className="user" size="35" color="black"/>
        </Link>
    </BottomBar>
  </>
  );
}
