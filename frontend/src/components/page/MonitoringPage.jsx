import React  from 'react';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Container1 = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
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
    border-radius: 20px;
    background-color: #0068FA;
    color: black;
    text-align: center;
    vertical-align: center;
    font-size: 20px;
    font-weight: bold;
`;

const OffButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 20px;
    background-color: #FA1201;
    color: black;
    text-align: center;
    vertical-align: center;
    font-size: 20px;
    font-weight: bold;
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

const MonitoringPage = ({user}) =>{

  const logOut = () => {
    console.log('LogOut');
    user.logout();
    }
  return (
      <Container1>
      <TopBar>
        <Link to="/" >
          <Logout>
            <MdLogout className="logout" onClick={logOut} />
          </Logout>
        </Link>
         <Title>아이 모니터링
           <FiMonitor className="monitor" />
         </Title>
      </TopBar>
      <VideoBoxContainer>
      <VideoBox />
      <ControlBoxContainer>
      <ControlBox>모빌</ControlBox>
      </ControlBoxContainer>
      <ButtonContainer>
      <OnButton>ON</OnButton>
      <OffButton>OFF</OffButton>
      </ButtonContainer>
      </VideoBoxContainer>
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
        <Link to="/bandregisterpage">
          <FaUserCircle className="bottomuser" />
        </Link>
        </BottomUser>
        </BottomLogoContainer>
      </BottomBar>
      </Container1>
  );
}

export default MonitoringPage;
