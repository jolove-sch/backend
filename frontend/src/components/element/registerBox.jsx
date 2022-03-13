import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { BsSmartwatch } from 'react-icons/bs';

const RegisterBox = (props) => {
    
    return (
      <>
        {props.count && props.count.map((item, i) => (
        // <RegisterFormContainer key={i}>
         <RegisterForm key={i}>
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
            //   ref={inputRef}
            //   onChange={handleChange}
              />
            <GetSerial 
              type="text" 
              placeholder="Serial Number Here" 
              name="serialNumber"
              minlength="6"
            //   onChange={handleChange}
              />
            <RegisterButton /*onClick={BandRegister}*/>등록</RegisterButton>
            </InsideForm>
        </RegisterForm>
    //    </RegisterFormContainer>
    ))}
    </>
  )
};

export default RegisterBox;

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
    background-color: white;
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
    margin-top: 1rem;
    margin-right: 3rem;
    float: right;
    width: 10rem;
    height: 10rem;
`;

const RegisterButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: white;
    border-color: white;
    color: #4EED8E;
    text-align: center;
    line-height: 35px;
    font-size: 17px;
    font-weight: bold;
    /* margin-left: 2rem; */
`;

const InsideTitle = styled.div`
    width: 170px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    /* margin-left: 2rem; */
`;

const GetSerial = styled.input`
    width: 150px;
    text-align: center;
`;
