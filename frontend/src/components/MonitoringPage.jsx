import React  from 'react';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Container1 = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
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
    /* justify-content: space-between; */
    /* align-items: center; */
    color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 100%;

    .monitor {
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

// const LogoBox = styled.div`
//   margin-right: 110px;
//   .logo {
//         font-size: 25px;
//         color: black;
//     }
// `;

const VideoBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const VideoBox = styled.div`
    width: 370px;
    height: 250px;
    border-radius: 10px;
    background-color: #d1cccc;
`;

const ControlBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
`;

const ControlBox = styled.div`
  width: 130px;
  height: 35px;
  border-radius: 20px;
  background-color: #f7f709;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 35px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
`;

const OnButton = styled.button`
    width: 100px;
    height: 35px;
    /* margin-left: 25%;
    margin-top: 5%; */
    border-radius: 20px;
    background-color: #0068FA;
    color: black;
    text-align: center;
    vertical-align: center;
    /* line-height: 35px; */
    font-size: 20px;
    font-weight: bold;
`;

const OffButton = styled.button`
    width: 100px;
    height: 35px;
    /* margin-left: 3%;
    margin-top: 5%; */
    border-radius: 20px;
    background-color: #FA1201;
    color: black;
    text-align: center;
    vertical-align: center;
    /* line-height: 35px; */
    font-size: 20px;
    font-weight: bold;
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
  margin-top: 34%; */
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
  position: fixed;
  bottom: 0;
`;

export default function MonitoringPage() {
  return (
      <Container1>
      <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" />
          </Logout>
        </Link>
         <Title>아이 모니터링
           <FiMonitor className="monitor" />
         </Title>
      </TopBar>
      <VideoBoxContainer>
      <VideoBox />
      {/* <ControlBoxContainer> */}
      {/* <ControlBox>모빌</ControlBox> */}
      <ControlBoxContainer>
      <ControlBox>모빌</ControlBox>
      </ControlBoxContainer>
      <ButtonContainer>
      <OnButton>ON</OnButton>
      <OffButton>OFF</OffButton>
      </ButtonContainer>
      {/* </ControlBoxContainer> */}
      </VideoBoxContainer>
      <BottomBar>
        <Link to="/mainpage">
          <FaBaby size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor size="30" color="black"/>
        </Link>
        <Link to="/bandregisterpage">
          <FaUserCircle size="35" color="black"/>
        </Link>
      </BottomBar>
      </Container1>
  );
}
