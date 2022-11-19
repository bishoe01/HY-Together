import React from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'
const PublicLayout = ({ children }) => {

  return (
    <Container maxW={'container.xl'} style={{ marginTop: 80, height: '100%' }}>
      {/* <Grid templateColumns='repeat(2, 1fr)'>
        <GridItem colSpan={1}>
          <div style={{ backgroundColor: 'red', width: '100%' }}>
            dfdfd
          </div>
        </GridItem>
        <GridItem colSpan={1}>
          <div style={{ backgroundColor: 'blue', width: '100%' }}>
            dfdf
          </div>
        </GridItem>
      </Grid> */}
      {children}
      
    </Container>
  )
}

export default PublicLayout