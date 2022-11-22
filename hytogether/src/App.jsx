import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/layout/footer';
import Navigation from './components/layout/navigation';
import Department from './components/pages/department';
import { useEffect, useState } from 'react';
import Home from './components/pages/home';
import { Fade } from 'react-reveal';
import PublicLayout from './components/layout/PublicLayout';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [selfInfo, setselfInfo] = useState(null);
  useEffect(() => {
    fetch('studentData.json')
      .then((res) => res.json())
      .then((data) => setselfInfo(data.department));
    return () => {
      console.log(selfInfo);
    };
  }, []);
  return (
    <>
      <ChakraProvider style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          {/* <Route path="/about" element={<About/>}/> */}
          <Route
            path={`/${selfInfo}`}
            element={
              <PublicLayout>
                <Department deparment={selfInfo} />
              </PublicLayout>
            }
          />
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
