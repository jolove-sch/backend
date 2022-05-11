import React, {useEffect} from 'react';
import styled from 'styled-components';
import useStore from '../../service/store';
import axios from 'axios';
import { FaBaby } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { RiCelsiusFill } from 'react-icons/ri';
import { SiOxygen } from 'react-icons/si';
import { ImCrying } from 'react-icons/im';
import { MdBabyChangingStation } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { MdLogout } from 'react-icons/md';

axios.defaults.withCredentials = true;

const StateBox = (props) => {
  const setResObj = useStore((state) => state.setResObj);
  const heartBeat = useStore((state) => state.heartBeat);
  const oxygen = useStore((state) => state.oxygen);
  const temperature = useStore((state) => state.temperature);
  const cry = useStore((state) => state.cry);
  const flipped = useStore((state) => state.flipped);
  const nickname = useStore((state) => state.nickname);
  const id = useStore((state) => state.id)
  
  useEffect(() => {
    axios
      .get('https://jolove.kro.kr/api/band/list',
      { withCredentials: true})
      
      .then((response) => {
        setResObj(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error); 
      });
  },[])

  
  return (
    <>
      {props.count && props.count.map((item, i) => (
      
      <StatusForm key={i}>
        <InsideLogo>
        <Link to= {{
          pathname: '/heartpage',
          state: {
            id:id[i]
          }
        }}>
          <FaBaby className="insidebaby" />
        </Link>
        {/* {nickname} */}
        <Nickname>{nickname[i]}</Nickname>
        </InsideLogo>
        <Insidestatus>
        <HeartBeatContainer>
        <HeartBeat>
          <FaHeartbeat className="Heartbeat" />
          <HearBeatRate>{heartBeat[i]}</HearBeatRate>
        </HeartBeat>
        </HeartBeatContainer>
        <OxygenContainer>
        <Oxygen>
          <SiOxygen className="Oxygen" />
          <OxygenRate>{oxygen[i]}</OxygenRate>
        </Oxygen>
        </OxygenContainer>
        <TemperaturetContainer>
        <Temperature>
          <RiCelsiusFill className="Temperature" />
          <TemperatureRate>{temperature[i]}</TemperatureRate>
        </Temperature>
        </TemperaturetContainer>
        <CryingContainer>
        <Crying>
          <ImCrying className="Crying" />
          <DetectCrying>
            {
              cry[i] == 'false'
              ? <span>OFF</span> : <span>ON</span>
            }
          </DetectCrying>
        </Crying>
        </CryingContainer>
        <OverturnContainer>
        <Overturn>
          <MdBabyChangingStation className="Overturn" />
          <DetectingOverturn>
            {
              flipped[i] == 'false'
              ? <span>OFF</span> : <span>ON</span>
            }
            </DetectingOverturn>
        </Overturn>
        </OverturnContainer>
        </Insidestatus>
      </StatusForm>
      ))}
      </>
  )
};

export default StateBox;
const StatusForm = styled.div`
    width: 25rem;
    height: 300px; 
    border-radius: 10px;
    background: linear-gradient(to right, #e1eec3, #f07c7e)
`;

const InsideLogo = styled.div`
    width: 5rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: #e1eec3; */
    border-radius: 10px;
    float: left;
    .insidebaby {
        font-size: 50px;
        /* color: #FFD3C3; */
        color: #f07c7e;
    }
`;

const Nickname = styled.div`
    width: 5rem;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Insidestatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  float: right;
  width: 20rem;
  height: 17rem;
`;

const HeartBeatContainer = styled.div`
  width: 150px;
  height: 50px;
  /* text-align: left;
  margin-left: 1rem; */
`;

const HeartBeat = styled.span`
  width: 30px;
  height: 30px;
  .Heartbeat {
    color: #f56464;
    font-size: 25px;
  }
`;

const HearBeatRate = styled.span` 
  width: 220px;
  height: 20px;
`;

const OxygenContainer = styled.div`
  width: 150px;
  height: 50px;
  /* text-align: center;
  margin-left: 1rem; */
`;

const Oxygen = styled.span`
  width: 250px;
  .Oxygen {
    color: #220bf5;
    font-size: 25px;
  }
`;

const OxygenRate = styled.span`
  width: 220px;
`;

const TemperaturetContainer = styled.div`
  width: 150px;
  height: 50px;
  /* text-align: center;
  margin-left: 1rem; */
`;

const Temperature = styled.span`
  width: 250px;
  .Temperature {
    color: #0c0000;
    font-size: 25px;
  }
`;

const TemperatureRate = styled.span` 
  width: 220px;
`;

const CryingContainer = styled.div`
  width: 150px;
  height: 50px;
  /* text-align: center;
  margin-left: 1rem; */
`;

const Crying = styled.span`
  width: 250px;
  .Crying {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectCrying = styled.span`
  width: 200px;
`;

const OverturnContainer = styled.div`
  width: 150px;
  height: 50px;
  /* text-align: center;
  margin-left: 1rem; */
`;

const Overturn = styled.span`
  width: 250px;
  .Overturn {
    color: #0c0000;
    font-size: 25px;
  }
`;

const DetectingOverturn = styled.span`
  width: 220px;
`;