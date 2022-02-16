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

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -40px;
`;

const TopBar = styled.nav`
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
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    /* align-items: center; */
    color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    margin-right: 5%;

   .baby {
     font-size: 25px;
     color: #FFD3C3;
   }
`;

// const LogoBox = styled.div`
//    /* margin-right: 100px; */

//   .baby {
//         font-size: 25px;
//         color: #FFD3C3;
//     }
// `;

const Logout = styled.div`
  margin-left: -10px;
  height: 30px;
  width: 30px;

  .logout {
    font-size: 25px;
    color: black;
  }
`;

const StatusForm = styled.div`

    width: 350px;
    height: 230px; 
    margin-left: 9%;
    margin-top: 30%;
    border-radius: 10px;
    background-color: #f8f1f1;
`;

const InsideLogo = styled.div`
    width: 100px;
    height: 230px;
    margin-right: 0;
    background-color: #FAF427;
    border-radius: 10px;

    .insidebaby {
        margin-left: 25%;
        margin-top: 90%;
        font-size: 50px;
        color: #FFD3C3;
    }
`;

const HeartBeat = styled.div`
  width: 30px;
  margin-left: 110px;
  margin-top: -60%;

  .Heartbeat {
    color: #f56464;
    font-size: 25px;
  }
`;

const HearBeatRate = styled.div` // 서버에서 심장박동수 받아올 부분
  width: 220px;
  margin-top: -100%;
  margin-left: 110%;
`;

const Oxygen = styled.div`
  width: 250px;
  margin-left: 110px;
  margin-top: 0%;

  .Oxygen {
    color: #220bf5;
    font-size: 25px;
  }
`;

const OxygenRate = styled.div` // 서버에서 산소포화도 받아올 부분
  width: 220px;
  margin-top: -10%;
  margin-left: 14%;
`;

const Temperature = styled.div`
  width: 250px;
  margin-left: 110px;
  margin-top: 0%;

  .Temperature {
    color: #0c0000;
    font-size: 25px;
  }
`;

const TemperatureRate = styled.div` // 서버에서 체온 받아올 부분
  width: 220px;
  margin-top: -10%;
  margin-left: 14%;
`;


const Crying = styled.div`
  width: 250px;
  margin-left: 110px;
  margin-top: 0%;

  .Crying {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectCrying = styled.div` // 서버에서 울음을 감지할 부분
  width: 220px;
  margin-top: -10%;
  margin-left: 14%;
`;

const Overturn = styled.div`
  width: 250px;
  margin-left: 110px;
  margin-top: 0%;

  .Overturn {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectingOverturn = styled.div` // 서버에서 뒤집힘을 감지할 부분
  width: 220px;
  margin-top: -10%;
  margin-left: 14%;
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
  /* bottom: 0;
  left: 0;
  right: 0;  */
  margin-top: 74%;

  .monitor {
    margin-left: -50%;
  }
  .user {
    margin-left: -80%;
  }
`;

export default function MainPage() {
  return ( 
    <>
      <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" />
          </Logout>
        </Link>
          <Title>실시간 아이정보
            <FaBaby className="baby" />
          </Title>
          {/* <LogoBox>
            <FaBaby className="baby" />
          </LogoBox> */}
      </TopBar>
      <Container>
        <StatusForm>
        <InsideLogo>
          <FaBaby className="insidebaby" />
        </InsideLogo>
        <HeartBeat> 
          <FaHeartbeat className="Heartbeat" />
          <HearBeatRate>심장박동수</HearBeatRate>
        </HeartBeat>
         <br />
        <Oxygen>
          <SiOxygen className="Oxygen" />
          <OxygenRate>산소포화도</OxygenRate>
        </Oxygen>
        <br />
        <Temperature>
          <RiCelsiusFill className="Temperature" />
          <TemperatureRate>체온</TemperatureRate>
        </Temperature>
        <br />
        <Crying>
          <ImCrying className="Crying" />
          <DetectCrying>울음감지</DetectCrying>
        </Crying>
        <br />
        <Overturn>
          <MdBabyChangingStation className="Overturn" />
          <DetectingOverturn>뒤집힘감지</DetectingOverturn>
        </Overturn>
      </StatusForm>
      </Container>
      <BottomBar>
      <Link to="/mainpage">
          <FaBaby size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor className="monitor" size="30" color="black"/>
        </Link>
        <Link to="/bandregisterpage">
          <FaUserCircle className="user" size="35" color="black"/>
        </Link>
      </BottomBar>
    </>
  );
}


