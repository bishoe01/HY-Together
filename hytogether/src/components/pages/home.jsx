import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { Grid, GridItem, List, ListItem, ListIcon, OrderedList, UnorderedList, Box } from '@chakra-ui/react';

const building = {
  '건물 1': {
    '건물 1 - 방 1': {},
    '건물 1 - 방 2': {},
  },
  '건물 2': {
    '건물 2 - 방 1': {},
    '건물 2 - 방 2': {},
  },
};

function Home(props) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 100) {
  //     } else {
  //       document.querySelector('.nav').classList.remove('nav__black');
  //     }
  //   })
  // }, []);

  const [selectedBuilding, setSelectedBuilding] = useState('건물 1');
  const room = useMemo(() => Object.keys(building[selectedBuilding]), [selectedBuilding]);

  const getData = async () => {
    // await fetch("").then()
  };

  // useEffect(() => {
  //   console.log(selectedBuilding);
  //   console.log(room)
  // }, [room, selectedBuilding]);

  return (
    <>
      <Box style={{ textAlign: 'center' }}>
        <button>장소대여 시작하기</button>
        <Box style={{ marginTop: '500px' }}>데이터 관련</Box>
      </Box>
    </>
  );
}

export default Home;
