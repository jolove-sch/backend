import React from 'react';
// import * as BsIcons from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { FaBaby } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';


export const SidebarData = [
  {
    title: '아이 상태확인',
    path: '/mainpage',
    icon: <FiMonitor />,
    cName: 'nav-text'
  },
  {
    title: '아이 모니터링',
    path: '/monitoringpage',
    icon: <FaBaby />,
    cName: 'nav-text'
  },
  {
    title: '사용자 등록',
    path: '/registerpage',
    icon: <FaUser />,
    cName: 'nav-text'
  },
  {
    title: '로그아웃',
    path: '/',
    icon: <CgLogOut />,
    cName: 'nav-text'
  }
];