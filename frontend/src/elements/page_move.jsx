import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { FaBaby } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const PageMove = (props) => {

    const history = useHistory();

    //페이지 이동

    const goToMain = () => {
        history.push('./mainpage');
    }

    const goToMoni = () => {
        history.push('./monitoring');
    }

    const goToResi = () => {
        history.push('./resgister');
    }

    return (
        <BottomBar>
            <FaBaby size="30" color="#FFD3C3" onClick={goToMain}/>
            <FiMonitor className="monitor" size="30" color="black" onClick={goToMoni}/>
            <FaUserCircle size="35" color="black" onClick={goToResi}/>
        </BottomBar>
    );
}

export default PageMove;

const BottomBar = styled.nav`
  height: 28px;
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
  margin-top: 80%;
  .monitor {
    margin-left: 5%;
  }
`;