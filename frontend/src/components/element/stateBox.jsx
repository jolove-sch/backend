import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaBaby } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { RiCelsiusFill } from 'react-icons/ri';
import { SiOxygen } from 'react-icons/si';
import { ImCrying } from 'react-icons/im';
import { MdBabyChangingStation } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';

const StateBox = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get('http://jolove.kro.kr/api/band/status/testSeiral')
    .then(response => {
      setState(response.data.data);
    });
  }, []);

  useEffect(() => {
    console.log(state)
  }, [state]);



  return (
    <>
      {props.count && props.count.map((item, i) => (
      <StatusForm key={i}>
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
          <DetectCrying>
            {
              state.cry=== 'false'
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
              state.flipped === 'false'
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