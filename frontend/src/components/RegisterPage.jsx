import React from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';
import { MdToys } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// const TopBar = styled.nav`
//    height: 40px;
//    padding: 1rem;
//    color: black;
//    background: #e574f0;
//    font-weight: bold;
//    display: flex;
//    justify-content: space-between;
//    align-items: center;

//    .logo {
//       font-size: 20px;
//       color: gray;
//   }

//   .logo2 {
//         font-size: 25px;
//         color: black;
//     }
// `;

// const Title = styled.div`
//     color: white;
//     font-weight: normal;
//     font-size: 20px;
//     width: 80%;
// `;

const MiddleBar = styled.nav`
    height: 30px;
    padding: 1rem;
    color: black;
    background: #13daf5;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;
`;

export default function RegisterPage() {
  return (
      <>    
        <MiddleBar>
            <Link to="/bandregisterpage">
                <BsSmartwatch size="27" color="black" />
            </Link>
            <Link to="/mobilregisterpage">
                <MdToys size="30" color="black" />
            </Link>
            <Link to="/userregisterpage">
                <FaUser size="27" color="black" />
            </Link>
        </MiddleBar>
      </>
  )
}