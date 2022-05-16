import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import StateBox from './stateBox';
import create from 'zustand';
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai';

const AddBox = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);
  
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  },[count]);

  const onAddBox = () => {
    let countArr = [...count];
    let counter = countArr.slice(-1)[0]; 
    counter += 1;
    countArr.push(counter);
    setCount(countArr);
  }


  const onDeleteBox = () => {
    let countArr = [...count];
    let counter = countArr.slice(-1)[0];
    counter -= 1;
    countArr.pop(counter);
    setCount(countArr);
  }

  // localStorage.removeItem("count")

  return (
    <StatusContainer>
      <StateBox count={count}/>
      <br />
       <ButtonContainer>
        <AiOutlinePlusSquare font-size="30" onClick={onAddBox}>+</AiOutlinePlusSquare>
        <AiOutlineMinusSquare font-size="30" onClick={onDeleteBox}>-</AiOutlineMinusSquare>
       </ButtonContainer> 
    </StatusContainer>
  );
};
export default AddBox;

const StatusContainer = styled.div`
  width: 100vw;
  height: calc( 100vh - 6rem );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

