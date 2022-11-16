import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer(props) {
  return (
    <footer className="footer">
      <section className="leftContainer">
        <img className="together" src="./imgs/HY-Together/4.svg" alt="" />
        <h6 className="tel">TEL +82-10-3733-0690</h6>
        <h6 className="email">Email : contact@hanyang.ac.kr</h6>
        <span className="copyright">2022 Hanyang Univ. All Rights Reserved.</span>
      </section>
      <section className="rightContainer">
        <ul className="links" >
          <li><Link to="/" onClick={() => { }}>HOME</Link></li>
          <li><Link to="/about" >ABOUT</Link></li>
          <li><Link to="/profile" >PROFILE</Link></li >
          <li><Link to="/settings"  >SETTINGS</Link></li>
        </ul>
        <div className="logos">
          <i className="fa-solid fa-comment-dots logo"></i>
          <i className="fa-brands fa-github logo"></i>
          <i className="fa-brands fa-instagram logo"></i>
          <i className="fa-brands fa-discord logo"></i>
          <i className="fa-brands fa-facebook logo"></i>
        </div>
      </section>
    </footer>
  );
}

export default Footer;