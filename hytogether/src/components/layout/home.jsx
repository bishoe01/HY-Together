import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

function Home(props) {
    return (
        <div className='main'>
            <div className="mainBanner" id="1">
            <img src="imgs/banner/First.jpg" alt="" />
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