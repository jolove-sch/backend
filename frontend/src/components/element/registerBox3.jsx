import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const RegisterBox = (props) => {

    return (
        <>
        {props.count && props.count.map((item, i) => (
        <RegisterForm key={i}>
        <InsideLogo>
            <FaUserCircle className="logo3" size="45" />
        </InsideLogo>
        <InsideForm>
            <br />
            <InsideTitle>사용자 아이디, 비밀번호</InsideTitle>
            <GetId type="text" placeholder="User Id Here" />
            <GetPassword type="password" placeholder="User Password Here" />
            <RegisterButton>등록</RegisterButton>
        </InsideForm>
    </RegisterForm>
    ))}
    </>
    )
};

export default RegisterBox;

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
    margin-top: 0.2rem;
    margin-right: 2rem;
    float: right;
    width: 12rem;
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
    width: 190px;
    color: black;
    font-size: 17px;
    font-weight: bold;
`;

const GetId = styled.input`
    width: 150px;
    text-align: center;
`;

const GetPassword = styled.input`
    width: 150px;
    text-align: center;
`;