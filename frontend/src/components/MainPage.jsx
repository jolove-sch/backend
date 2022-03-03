import React from 'react';
import styled from 'styled-components';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { RiCelsiusFill } from 'react-icons/ri';
import { SiOxygen } from 'react-icons/si';
import { ImCrying } from 'react-icons/im';
import { MdBabyChangingStation } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Container1 = styled.div`
  display: flex;
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
    width: 100%;
    
   .baby {
     font-size: 25px;
     color: #FFD3C3;
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

const StatusContainer = styled.div`
  width: 100vw;
  height: calc( 100vh - 6rem );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusForm = styled.div`
    width: 25rem;
    height: 300px; 
    border-radius: 10px;
    background-color: #f8f1f1;
    
`;

const InsideLogo = styled.div`
    width: 5rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAF427;
    border-radius: 10px;
    float: left;

    .insidebaby {
        font-size: 50px;
        color: #FFD3C3;
    }
`;

const Insidestatus = styled.div`
  margin-top: 2rem;
  float: right;
  width: 18rem;
  height: 30rem;
`;

const HeartBeatContainer = styled.div`
  width: 200px;
  height: 50px;
`;

const HeartBeat = styled.span`
  width: 30px;
  height: 30px;

  .Heartbeat {
    color: #f56464;
    font-size: 25px;
  }
`;

const HearBeatRate = styled.span` // 서버에서 심장박동수 받아올 부분
  width: 220px;
  height: 20px;
`;

const OxygenContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Oxygen = styled.span`
  width: 250px;

  .Oxygen {
    color: #220bf5;
    font-size: 25px;
  }
`;

const OxygenRate = styled.span` // 서버에서 산소포화도 받아올 부분
  width: 220px;
`;

const TemperaturetContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Temperature = styled.span`
  width: 250px;

  .Temperature {
    color: #0c0000;
    font-size: 25px;
  }
`;

const TemperatureRate = styled.span` // 서버에서 체온 받아올 부분
  width: 220px;
`;

const CryingContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Crying = styled.span`
  width: 250px;

  .Crying {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectCrying = styled.span` // 서버에서 울음을 감지할 부분
  width: 220px;
`;

const OverturnContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Overturn = styled.span`
  width: 250px;

  .Overturn {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectingOverturn = styled.span` // 서버에서 뒤집힘을 감지할 부분
  width: 220px;
`;

const BottomBar = styled.nav`
  height: 3rem;
  width: 100vw;
  /* padding: 1rem; */
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

export default function MainPage() {
  return ( 
    <Container1>
      <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" />
          </Logout>
        </Link>
          <Title>실시간 아이정보
            <FaBaby className="baby" />
          </Title>
      </TopBar>
      <StatusContainer>
        <StatusForm>
        <InsideLogo>
          <FaBaby className="insidebaby" />
        </InsideLogo>
        <Insidestatus>
        <HeartBeatContainer>
        <HeartBeat> 
          <FaHeartbeat className="Heartbeat" />
          <HearBeatRate>심장박동수</HearBeatRate>
        </HeartBeat>
        </HeartBeatContainer>
        <OxygenContainer>
        <Oxygen>
          <SiOxygen className="Oxygen" />
          <OxygenRate>산소포화도</OxygenRate>
        </Oxygen>
        </OxygenContainer>
        <TemperaturetContainer>
        <Temperature>
          <RiCelsiusFill className="Temperature" />
          <TemperatureRate>체온</TemperatureRate>
        </Temperature>
        </TemperaturetContainer>
        <CryingContainer>
        <Crying>
          <ImCrying className="Crying" />
          <DetectCrying>울음감지</DetectCrying>
        </Crying>
        </CryingContainer>
        <OverturnContainer>
        <Overturn>
          <MdBabyChangingStation className="Overturn" />
          <DetectingOverturn>뒤집힘감지</DetectingOverturn>
        </Overturn>
        </OverturnContainer>
        </Insidestatus>
      </StatusForm>
      </StatusContainer>
      <BottomBar>
        <BottomLogoContainer>
        <BottomBaby>
        <Link to="/mainpage">
          <FaBaby className="bottombaby" />
        </Link>
        </BottomBaby>
        <BottomMonitor>
        <Link to="/monitoringpage">
          <FiMonitor className="bottommonitor"/>
        </Link>
        </BottomMonitor>
        <BottomUser>
        <Link to="/bandregisterpage">
          <FaUserCircle className="bottomuser"/>
        </Link>
        </BottomUser>
        </BottomLogoContainer>
      </BottomBar>
    </Container1>
  );
}


