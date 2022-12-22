import React from 'react'
import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const ReserveLayout = ({ children }) => {
  // console.log(props)
  const location = useLocation();
  console.log(location);

  return (
    <Box style={{ height: '100%' }}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <div style={{ width: '200px' }}>
          <div style={{
            minHeight: '500px',
            borderColor: 'blue',
            borderWidth: '3px',
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
            borderLeft: 'none',
          }}>
            <ul>
              <li>단과대 선택</li>
              <li>유형 선택</li>
              <li>장소 선택</li>
              <li>예약 완료</li>
            </ul>
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: '30px' }}>
          {children}
        </div>
      </div>



    </Box >
  )
}

export default ReserveLayout