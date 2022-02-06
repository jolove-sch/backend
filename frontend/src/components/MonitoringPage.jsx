import React  from 'react';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    width: 170px;
    margin-left: 110px;
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
  background-color: #f7f709;
  color: black;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
  font-size: 20px;
`;

const OnButton = styled.button`
    width: 100px;
    height: 35px;
    margin-left: 25%;
    margin-top: 5%;
    border-radius: 20px;
    background-color: #0068FA;
    color: black;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
`;

const OffButton = styled.button`
    width: 100px;
    height: 35px;
    margin-left: 3%;
    margin-top: 5%;
    border-radius: 20px;
    background-color: #FA1201;
    color: black;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
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
  margin-top: 34%;

  .monitor {
    margin-left: 5px;
  }
`;

export default function MonitoringPage() {
  return (
      <>
      <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" />
          </Logout>
        </Link>
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
          <FiMonitor className="monitor" size="30" color="black"/>
        </Link>
        <Link to="/bandregisterpage">
          <FaUserCircle size="35" color="black"/>
        </Link>
      </BottomBar>
    </>
  );
}
