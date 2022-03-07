import React, {useState} from 'react';
import styled from 'styled-components';
import StateBox from './stateBox';

const AddBox = () => {
  const [count, setCount] = useState([0]);
    
  const onAddBox = () => {
    let countArr = [...count];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCount(countArr);
  }

  return (
    <StatusContainer>
      <StateBox count={count}/>
      <button onClick={onAddBox}>+</button>
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
`;
