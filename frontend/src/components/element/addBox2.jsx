import React, {useState} from 'react';
import styled from 'styled-components';
import RegisterBox from './registerBox';
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai';

const AddBox2 = () => {
  const [count, setCount] = useState([0]);
    
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

  return (
    <RegisterContainer>
        <RegisterBox count={count}/>
        <br />
         <ButtonContainer>
          <AiOutlinePlusSquare font-size="30" onClick={onAddBox}>+</AiOutlinePlusSquare>
          <AiOutlineMinusSquare font-size="30" onClick={onDeleteBox}>-</AiOutlineMinusSquare>
         </ButtonContainer> 
    </RegisterContainer>    
  );
};
export default AddBox2;

const RegisterContainer = styled.div`
  /* width: 100vw;
  height: calc( 100vh - 6rem );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto; */
  width: 100vw;
  height: calc( 100vh - 12rem );
  display: inline-flex;
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