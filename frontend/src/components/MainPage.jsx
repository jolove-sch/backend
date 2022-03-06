import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-left: -40px;
// `;

const Container1 = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  align-items: center;
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
    /* margin-right: 5%; */

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
  /* margin-left: -10px; */
  height: 30px;
  width: 30px;

  .logout {
    font-size: 25px;
    color: black;
  }
`;

const StatusContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusForm = styled.div`
    /* overflow: scroll; */
    width: 600px;
    height: 300px; 
    /* margin-left: 9%;
    margin-top: 30%; */
    border-radius: 10px;
    background-color: #f8f1f1;
    
`;

const InsideLogo = styled.div`
    width: 5rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: 0; */
    background-color: #FAF427;
    border-radius: 10px;
    float: left;

    .insidebaby {
        /* margin-left: 25%;
        margin-top: 90%; */
        font-size: 50px;
        color: #FFD3C3;
    }
`;

const Insidestatus = styled.div`
  margin-top: 2rem;
  float: right;
  width: 30rem;
  height: 30rem;
`;

const HeartBeatContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const HeartBeat = styled.span`
  width: 30px;
  height: 30px;
  /* margin-left: 110px;
  margin-top: -60%; */

  .Heartbeat {
    color: #f56464;
    font-size: 25px;
  }
`;

const HearBeatRate = styled.span` // 서버에서 심장박동수 받아올 부분
  width: 220px;
  height: 20px;
  /* margin-top: -100%;
  margin-left: 110%; */
`;

const OxygenContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Oxygen = styled.span`
  width: 250px;
  /* margin-left: 110px;
  margin-top: 0%; */

  .Oxygen {
    color: #220bf5;
    font-size: 25px;
  }
`;

const OxygenRate = styled.span` // 서버에서 산소포화도 받아올 부분
  width: 220px;
  /* margin-top: -10%;
  margin-left: 14%; */
`;

const TemperaturetContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Temperature = styled.span`
  width: 250px;
  /* margin-left: 110px;
  margin-top: 0%; */

  .Temperature {
    color: #0c0000;
    font-size: 25px;
  }
`;

const TemperatureRate = styled.span` // 서버에서 체온 받아올 부분
  width: 220px;
  /* margin-top: -10%;
  margin-left: 14%; */
`;

const CryingContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Crying = styled.span`
  width: 250px;
  /* margin-left: 110px;
  margin-top: 0%; */

  .Crying {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectCrying = styled.span` // 서버에서 울음을 감지할 부분
  width: 220px;
  /* margin-top: -10%;
  margin-left: 14%; */
`;

const OverturnContainer = styled.div`
  width: 250px;
  height: 50px;
`;

const Overturn = styled.span`
  width: 250px;
  /* margin-left: 110px;
  margin-top: 0%; */

  .Overturn {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectingOverturn = styled.span` // 서버에서 뒤집힘을 감지할 부분
  width: 220px;
  /* margin-top: -10%;
  margin-left: 14%; */
`;

const BottomBar = styled.nav`
  height: 28px;
  width: 100%;
  padding: 1rem;
  color: black;
  background: #4EED8E;
  font-weight: bold;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  position: fixed;
  bottom: 0;
  /* bottom: 0;
  left: 0;
  right: 0;  */
  /* margin-top: 74%; */
`;

const BottomLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomBaby = styled.div`
  width: 50px;
  height: 50px;
`;

const BottomMonitor = styled.div`
  width: 50px;
  height: 50px;
`;

const BottomUser = styled.div`
  width: 50px;
  height: 50px;
`;

const MainPage = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get('http://jolove.kro.kr/api/band/status/testSeiral')//기기 일련번호 가져오기 보류
          .then(response => {
            setState(response.data.data);
          });
  }, []);

  useEffect(() => {
    console.log(state)
  }, [state]); // state에 가져온 정보 저장됐는지 확인 용도

  return ( 
    // <>
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
          <HearBeatRate>{state.heartBeat}</HearBeatRate>
        </HeartBeat>
        </HeartBeatContainer>
        <OxygenContainer>
        <Oxygen>
          <SiOxygen className="Oxygen" />
          <OxygenRate>{state.oxygen}</OxygenRate>
        </Oxygen>
        </OxygenContainer>
        <TemperaturetContainer>
        <Temperature>
          <RiCelsiusFill className="Temperature" />
          <TemperatureRate>{state.temperature}</TemperatureRate>
        </Temperature>
        </TemperaturetContainer>
        <CryingContainer>
        <Crying>
          <ImCrying className="Crying" />
          <DetectCrying>{state.cry}</DetectCrying>
        </Crying>
        </CryingContainer>
        <OverturnContainer>
        <Overturn>
          <MdBabyChangingStation className="Overturn" />
          <DetectingOverturn>{state.flipped}</DetectingOverturn>
        </Overturn>
        </OverturnContainer>
        </Insidestatus>
      </StatusForm>
      </StatusContainer>
      <BottomBar>
        <BottomLogoContainer>
        <BottomBaby>
        <Link to="/mainpage">
          <FaBaby size="30" color="#FFD3C3"/>
        </Link>
        </BottomBaby>
        <BottomMonitor>
        <Link to="/monitoringpage">
          <FiMonitor size="30" color="black"/>
        </Link>
        </BottomMonitor>
        <BottomUser>
        <Link to="/bandregisterpage">
          <FaUserCircle size="35" color="black"/>
        </Link>
        </BottomUser>
        </BottomLogoContainer>
      </BottomBar>
    </Container1>
    // </>
  );
}

export default MainPage;

