import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Department from './components/pages/department';
import { useEffect, useState } from 'react';
import Home from './components/pages/home';
import { Fade } from 'react-reveal';
import PublicLayout from './components/layout/PublicLayout';
import ReserveLayout from './components/layout/ReserveLayout';

import { ChakraProvider } from '@chakra-ui/react';
import ChoiceCollage from './components/pages/ChoiceCollage';

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
      <ChakraProvider>
        <Header />
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
          <Route
            path={`/reserve/collage`}
            element={
              <ReserveLayout>
                <ChoiceCollage />
              </ReserveLayout>
            }
          />
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
        {/* <Footer /> */}
      </ChakraProvider>
    </>
  );
}

export default App;
