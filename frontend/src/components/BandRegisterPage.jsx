import React from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';
import { MdToys } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';

const TopBar = styled.nav`
   height: 40px;
   padding: 1rem;
   color: black;
   background: #13daf5;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div`
    color: white;
    font-weight: normal;
    font-size: 20px;
    width: 170px;
    /* margin: auto; */
    margin-left: 160px;
    margin-bottom: 4px;
    /* margin-left: 3%;
    margin-top: -1%; */
`;

const LogoBox = styled.div`
  margin-right: 130px;
  .logo {
        font-size: 25px;
        color: black;
    }
`;

const MiddleBar = styled.nav`
    height: 30px;
    padding: 1rem;
    color: black;
    background: #13daf5;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Container = styled.div``;

const RegisterForm = styled.div`
    width: 370px;
    height: 170px;
    margin-left: 7%;
    margin-top: 10%;
    border-radius: 10px;
    background-color: white;
    font-size: 20px;
    box-shadow: 4px 4px 0px #e9dadad7;
`;

const InsideForm = styled.div`
    width: 200px;
    height: 170px;
    margin-top: -45%;
    margin-left: 35%;
`;

const InsideLogo = styled.div`
    width: 100px;
    height: 170px;
    margin-right: 0;
    background-color: yellow;

    .logo3 {
        margin-left: 30%;
        margin-top: 60%;
    }

`;

const RegisterButton = styled.button`
    width: 100px;
    height: 35px;
    margin-left: 10%;
    margin-top: 10%;
    background-color: white;
    border-color: white;
    color: #11dbca;
    text-align: center;
    line-height: 35px;
    font-size: 17px;
    font-weight: normal;
`;

const LogoContainer = styled.div`
    .logo4 {
        color: black;
        font-size: 30px;
        margin-left: 48%;
    }
`;

const BottomBar = styled.nav`
  height: 28px;
  padding: 1rem;
  color: black;
  background: #13daf5;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0; 
  margin-top: 62%;
`;

export default function BandRegisterPage() {

  return (
    <>

    <TopBar>
        <Title>밴드 등록</Title>
        <LogoBox>
             <BsSmartwatch className="logo" />
        </LogoBox>
    </TopBar>
    <MiddleBar>
        <Link to="/bandregisterpage">
            <BsSmartwatch size="27" color="red" />
        </Link>
        <Link to="/mobilregisterpage">
            <MdToys size="30" color="black" />
        </Link>
        <Link to="/userregisterpage">
            <FaUser size="27"color="black" />
        </Link>
    </MiddleBar>
    <Container>
    <RegisterForm>
        <InsideLogo>
            <BsSmartwatch className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            기기 일련번호
            <br />
            <input type="text" placeholder="Serial Number Here" />
            <br />
            <RegisterButton>등록</RegisterButton>
        </InsideForm>
    </RegisterForm>
    <br />
    <br />
    <LogoContainer>
        <AiOutlinePlusSquare className="logo4" />
    </LogoContainer>
    </Container>
    <BottomBar>
        <Link to="/mainpage">
          <FaBaby size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor size="30" color="black"/>
        </Link>
        <Link to="/registerpage">
          <FaUser size="30" color="black"/>
        </Link>
    </BottomBar>
  </>
  );
}
