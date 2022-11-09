import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import {useNavigate} from 'react-router-dom';
function Home(props) {
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
            } else {
                document.querySelector('.nav').classList.remove('nav__black');
            }
            
        })
    }, [])
    return (
        <div className='main'>
            <div className="mainBanner" id="1">
            <img src="imgs/banner/sky.jpg" alt="" />
            <Fade bottom>
            <h1>HY-ERICA 팀플실 예약서비스</h1>
            </Fade>
            </div>

            <div className="mainBanner" id="2">
            <img src="imgs/banner/Second.jpg" alt="" />
            </div>
            <div className="mainBanner" id="3">
            <img src="imgs/banner/Third.jpg" alt="" />
            </div>
        </div>
        
    );
}




export default Home;