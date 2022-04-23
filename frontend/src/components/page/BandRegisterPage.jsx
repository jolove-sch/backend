import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';
import { MdToys } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';


const Container1 = styled.div`
  display: inline-flex;
  justify-content: center;
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
    width: 100vw;

    .watch {
      margin-left: 0.3rem;
      font-size: 25px;
      color: #0e3fbd;
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

const MiddleBarContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: start;
  width: 100vw; 
`;

const MiddleBar = styled.nav`
    position: fixed;
    top: 3rem;
    width: 100vw;
    height: 3rem;
    color: black;
    background: #ecbd45;
    font-weight: bold;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;

const BandIconContainer = styled.div`
  
`;
const MobilIconContainer = styled.div`
  
`;
const UserIconContainer = styled.div`
 
`;

const RegisterFormContainer = styled.div`
  width: 100vw;
  height: calc( 100vh - 12rem );
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const RegisterForm = styled.div`
    width: 350px;
    height: 170px;
    border-radius: 10px;
    background-color: #0e3fbd;
    font-size: 20px;
    box-shadow: 4px 4px 0px #e9dadad7;
`;

const InsideLogo = styled.div`
    width: 6rem;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    border-radius: 10px;
    float: left;
`;

const InsideForm = styled.div`
    margin-top: 0rem;
    margin-right: 3rem;
    float: right;
    width: 10rem;
    height: 10rem;
`;

const RegisterButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: #ecbd45;
    border-color: #ecbd45;
    border-radius: 10px;
    color: #0e3fbd;
    text-align: center;
    line-height: 35px;
    font-size: 17px;
    font-weight: bold;
    margin-top: 0.5rem;
`;

const InsideTitle = styled.div`
    width: 170px;
    color: #ecbd45;
    font-size: 17px;
    font-weight: bold;
`;

const GetSerial = styled.input`
    width: 150px;
    text-align: center;
    background-color: #ecbd45;
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

const SetBottom = styled.div` 
  height: 3rem;
  width: 100vw;
  background-color: white;
  color: white;
  position: fixed;
  bottom: 3rem;
`;

const BottomLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-top: 10px;
`;

const BottomBaby = styled.div`

  .bottombaby {
    font-size: 30px;
    color: #FFD3C3;
  }
`;

const BottomMonitor = styled.div`

  .bottommonitor {
    font-size: 30px;
    color: #0e3fbd;
  }
`;

const BottomUser = styled.div`

  .bottomuser {
    font-size: 30px;
    color: #0e3fbd;
  }
`;

const BandRegisterPage = ({register1}) => {
  const history = useHistory();
  const inputRef = useRef();

  const [email, setEmail] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const BandRegister = event => {
    event.preventDefault();
    if(email === "" || serialNumber === ""){
        window.alert("Email과 밴드의 일련번호를 입력해주세요.");
        return;
    }
    console.log('Band Register');
    register1.bandRegister(email, serialNumber);
        
};


  const handleChange = (event) => {
    const type = event.target.name;
    if (type === 'email') {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
    } else if (type === 'serialNumber') {
        const inputserialNumber= event.target.value;
        setSerialNumber(inputserialNumber);
    }
  }

  const goToMain = () => {
      history.push('./mainpage');
    }



  return (
    <Container1>
    <TopBar>
        <Link to="/">
          <Logout>
            <MdLogout className="logout" onClick={goToMain}/>
          </Logout>
        </Link>
        <Title>밴드 등록
          <BsSmartwatch className="watch" />
        </Title>
    </TopBar>
    <MiddleBarContainer>
    <MiddleBar>
        <Link to="/bandregisterpage">
          <BandIconContainer>
            <BsSmartwatch size="27" color="red" />
          </BandIconContainer>
        </Link>
        <Link to="/mobilregisterpage">
          <MobilIconContainer>
            <MdToys className="mobil" size="30" color="#0e3fbd" />
          </MobilIconContainer>
        </Link>
        <Link to="/userregisterpage">
          <UserIconContainer>
            <FaUserCircle className="user" size="28"color="#0e3fbd" />
          </UserIconContainer>
        </Link>
    </MiddleBar>
    <RegisterFormContainer>
    <RegisterForm>
        <InsideLogo>
            <BsSmartwatch className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            <InsideTitle>기기 일련번호</InsideTitle>
            <GetSerial 
              type="text" 
              placeholder="Email" 
              name="email"
              ref={inputRef}
              onChange={handleChange}
              />
            <GetSerial 
              type="text" 
              placeholder="Serial Number Here" 
              name="serialNumber"
              minlength="6"
              onChange={handleChange}
              />
            <RegisterButton onClick={BandRegister}>등록</RegisterButton>
        </InsideForm>
    </RegisterForm>
    </RegisterFormContainer> 
    </MiddleBarContainer>
    <SetBottom />
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
          <FaUserCircle className="bottomuser" />
        </BottomUser>
      </BottomLogoContainer>
    </BottomBar>
    </Container1>
  );
}

export default BandRegisterPage;
