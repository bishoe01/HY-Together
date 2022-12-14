import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../../App.scss';
import ScrollBtn from '../scroll';
import PublicLayout from './PublicLayout';
import { Container } from '@chakra-ui/react'
export default function Navigation() {
    const navigate = useNavigate();
    return (
        <Container maxW={'container.xl'} >
        <nav className="nav">
            <img className="img" onClick={() => {
                navigate('/');
            }} src="/imgs/HY-Together/logotext.png" alt="" />
            <ul className="links">
                <li><Link to="/"  onClick={() => { }}>HOME</Link></li>
                <li><Link to="/about" >ABOUT</Link></li>
                <li><Link to="/profile">PROFILE</Link></li >
                <li><Link to="/settings"  >SETTINGS</Link></li>
            </ul>
            <div className="nav__btn">
                <button className="reserve">예약 확인</button>
                <button className="profile">프로필 수정</button>
            </div>
            <div className="subnav">
            {/* <ScrollBtn/> */}
            </div>
        </nav>
        </Container>
    )
}
