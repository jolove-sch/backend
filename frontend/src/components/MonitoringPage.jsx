import React  from 'react';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopBar = styled.nav`
   height: 40px;
   padding: 1rem;
   color: black;
   background: #e574f0;
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
    margin-left: 140px;
    margin-bottom: 4px;
    /* margin-left: 3%;
    margin-top: -1%; */
`;

const LogoBox = styled.div`
  margin-right: 110px;
  .logo {
        font-size: 25px;
        color: black;
    }
`;

const VideoBox = styled.div`
    width: 370px;
    height: 250px;
    margin-left: 7%;
    margin-top: 10%;
    border-radius: 10px;
    background-color: #d1cccc;
`;

const ControlBox = styled.div`
  width: 130px;
  height: 35px;
  margin-left: 35%;
  margin-top: 20%;
  border-radius: 20px;
  background-color: #ff6f00;
  color: white;
  text-align: center;
  line-height: 35px;
`;

const OnButton = styled.button`
    width: 100px;
    height: 35px;
    margin-left: 25%;
    margin-top: 5%;
    border-radius: 20px;
    background-color: #5ff15f;
    color: black;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    font-weight: normal;
`;

const OffButton = styled.button`
    width: 100px;
    height: 35px;
    margin-left: 3%;
    margin-top: 5%;
    border-radius: 20px;
    background-color: #80d8ff;
    color: black;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    font-weight: normal;
`;

const BottomBar = styled.nav`
  height: 28px;
  padding: 1rem;
  color: black;
  background: #e574f0;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0; 
  margin-top: 36%;
`;

export default function MonitoringPage() {
  return (
      <>
      {/* <Navbar /> */}
      <TopBar>
         <Title>아이 모니터링</Title>
         <LogoBox>
             <FiMonitor className="logo" />
         </LogoBox>
      </TopBar>
      <VideoBox />
      <ControlBox>모빌</ControlBox>
      <OnButton>ON</OnButton>
      <OffButton>OFF</OffButton>
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
