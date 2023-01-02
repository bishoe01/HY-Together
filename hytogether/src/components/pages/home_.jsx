import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from '@chakra-ui/react'

const building = {
  '건물 1': {
    '건물 1 - 방 1': {

    },
    '건물 1 - 방 2': {

    }
  },
  '건물 2': {
    '건물 2 - 방 1': {

    },
    '건물 2 - 방 2': {

    }
  }
}



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
  }


  // useEffect(() => {
  //   console.log(selectedBuilding);
  //   console.log(room)
  // }, [room, selectedBuilding]);

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' style={{ textAlign: 'center' }}>
        <GridItem colSpan={3}>
          <Box bg={'red'} h={100}>
            <Box bg={'#333'} color={'#fff'}>
              건물
            </Box>
            <Box>
              <List>
                {
                  Object.keys(building).map((v, i) => (
                    <ListItem
                      key={i}
                      style={{ cursor: 'pointer' }}
                      onClick={_ => setSelectedBuilding(v)}
                    >
                      {v}
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box bg={'blue'} h={100}>
            <Box bg={'#333'} color={'#fff'}>
              팀플실
            </Box>
            <Box>
              <List>
                {
                  room.map((v, i) => (
                    <ListItem
                      key={i}
                      style={{ cursor: 'pointer' }}
                    >
                      {v}
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box bg={'orange'} h={100}>
            날짜
          </Box>
        </GridItem>
        <GridItem colSpan={5}>
          <Box bg={'pink'} h={100}>
            시간
          </Box>
        </GridItem>
      </Grid>
    </>
    // <div className='main'>
    //   <div className="mainBanner" id="1">
    //     <img src="imgs/banner/sky.jpg" alt="" />
    //     <Fade bottom>
    //       <h1>HY-ERICA 팀플실 예약서비스</h1>
    //     </Fade>
    //   </div>

    //   <div className="mainBanner" id="2">
    //     <img src="imgs/banner/Second.jpg" alt="" />
    //   </div>
    //   <div className="mainBanner" id="3">
    //     <img src="imgs/banner/Third.jpg" alt="" />
    //   </div>
    // </div>

  );
}




export default Home;