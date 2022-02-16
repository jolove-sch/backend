import React  from 'react';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -40px;
`;

const Container2 = styled.div`
  /* display: flex;
  justify-content: center;
  margin-top: 35%; */
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const Container3 = styled.div`
  /* display: flex;
  justify-content: center;
  margin-bottom: -30%; */
  display: flex;
  justify-content: center;
  margin-top: 10%;
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
    margin-left: 110px;
    margin-bottom: 4px; */
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    /* align-items: center; */
    color: #EF564D;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    margin-right: 10%;

    .monitor {
      font-size: 25px;
      color: black;
      margin-left: 1%;
    }
`;

const Logout = styled.div`
  height: 30px;
  width: 30px;

  .logout {
    margin-left: -35%;
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

const VideoBox = styled.div`
    width: 370px;
    height: 250px;
    margin-left: 9%;
    margin-top: 20%;
    border-radius: 10px;
    background-color: #d1cccc;
`;

const ControlBox = styled.div`
  width: 130px;
  height: 35px;
  margin-top: 10%;
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
    /* margin-left: 25%;
    margin-top: 5%; */
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
    /* margin-left: 3%;
    margin-top: 5%; */
    border-radius: 20px;
    background-color: #FA1201;
    color: black;
    text-align: center;
    line-height: 35px;
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
  margin-top: 34%;

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

export default function MonitoringPage() {
  return (
      <>
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
      <Container>
      <VideoBox />
      </Container>
      <Container2>
      <ControlBox>모빌</ControlBox>
      </Container2>
      <Container3>
      <OnButton>ON</OnButton>
      <OffButton>OFF</OffButton>
      </Container3>
      <BottomBar>
        <Link to="/mainpage">
          <FaBaby className="baby" size="30" color="#FFD3C3"/>
        </Link>
        <Link to="/monitoringpage">
          <FiMonitor className="monitor2" size="30" color="black"/>
        </Link>
        <Link to="/bandregisterpage">
          <FaUserCircle className="user" size="35" color="black"/>
        </Link>
      </BottomBar>
    </>
  );
}
