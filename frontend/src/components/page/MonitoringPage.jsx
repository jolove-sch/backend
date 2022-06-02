import React, { useEffect, useRef }  from 'react';
import mobileUrl from '../../service/mobileUrl';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import axios from 'axios';
import { Helmet } from 'react-helmet'
import mobileOff_Img from '../../img/off.png'

const Container1 = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  background: white;
`;

const TopBar = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   height: 3rem;
   width: 100vw;
   color: #0e3fbd;
   background: #ecbd45;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0e3fbd;
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
    color: #0e3fbd;
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

const VideoBox = styled.img`
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
  background-color: #0e3fbd;
  color: #ecbd45;
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
    border-color: #0068FA;
    background-color: #0068FA;
    color: black;
    text-align: center;
    vertical-align: center;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      background-color: #ecbd45;
      border-color: #ecbd45;
    }
`;

const OffButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 20px;
    border-color: #FA1201;
    background-color: #FA1201;
    color: black;
    text-align: center;
    vertical-align: center;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      background-color: #ecbd45;
      border-color: #ecbd45;
    }
`;

const BottomBar = styled.nav`
  height: 3rem;
  width: 100vw;
  color: black;
  background: #ecbd45;
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
    color: #0e3fbd;
  }
`;

const BottomUser = styled.div`
  /* width: 2em;
  height: 1em; */

  .bottomuser {
    font-size: 30px;
    color: #0e3fbd;
  }
`;

const MonitoringPage = ({user, mobile}) =>{

  const setResObj = mobileUrl((state) => state.setResObj);
  const mUrl = mobileUrl((state) => state.mUrl);

  useEffect(() => {
    axios.get('https://jolove.kro.kr/api/mobile/url',
    { withCredentials: true})

    .then((response) => {
      setResObj(response.data)
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  })

  const errorHandler = (event) => {
    console.log("Mobile OFF");
    event.target.src = mobileOff_Img;

  }

  const logOut = () => {
    console.log('LogOut');
    user.logout();
    }

  const mobileOn = () => {
    console.log('On');
    mobile.mobileControl(true);
  }

  const mobileOff = () => {
    console.log('Off');
    mobile.mobileControl(false);
  }

  console.log(mUrl);
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
        <Helmet>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Helmet>
        {/* <VideoBox src={mUrl} onError={errorHandler}/> */}
        <a href={mUrl}>비디오 보기</a>
      <ControlBoxContainer>
      <ControlBox>모빌</ControlBox>
      </ControlBoxContainer>
      <ButtonContainer>
      <OnButton onClick={mobileOn}>ON</OnButton>
      <OffButton onClick={mobileOff}>OFF</OffButton>
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