import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { useImmer } from 'use-immer';
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
  const [selectedBuilding, setSelectedBuilding] = useState('건물 1');
  const room = useMemo(() => Object.keys(building[selectedBuilding]), [selectedBuilding]);
  const [month, setMonth] = useState(new Date().getMonth());
  const getData = async () => {
    // await fetch("").then()
  }

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' style={{ textAlign: 'center' }}>
        <GridItem colSpan={3}>
          <Box bg={'red'} h={100}>
            <Box borderRight={'1px solid white'} bg={'#333'} color={'#fff'}>대학</Box>
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
            <Box>

            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={5}>
          <Box bg={'pink'} h={100}>
            시간
            <Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}




export default Home;