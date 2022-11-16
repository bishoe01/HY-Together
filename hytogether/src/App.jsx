import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/layout/footer';
import Navigation from './components/layout/navigation';
import Department from './components/department';
import { useEffect, useState } from 'react';
import Home from './components/layout/home';
import { Fade } from 'react-reveal';
function App() {
  const [selfInfo, setselfInfo] = useState(null);
  useEffect(() => {
    fetch("studentData.json")
      .then(res => res.json())
      .then(data => setselfInfo(data.department))
    return () => {
      console.log(selfInfo);
    };
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <Home />} />
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path={`/${selfInfo}`} element={<Department deparment={selfInfo} />} />
        {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
