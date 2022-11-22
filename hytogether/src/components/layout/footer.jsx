import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, chakra, Container, Button, Link, SimpleGrid, Stack, Text, VisuallyHidden, Input, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaCommentDots, FaInstagram, FaDiscord, FaGithub, FaFacebook } from 'react-icons/fa';
function Footer(props) {
  return (
    <>
      {/* <footer className='footer'>
        <section className='leftContainer'>
          <img className='together' src='./imgs/HY-Together/4.svg' alt='' />
          <h6 className='tel'>TEL +82-10-3733-0690</h6>
          <h6 className='email'>Email : contact@hanyang.ac.kr</h6>
          <span className='copyright'>2022 Hanyang Univ. All Rights Reserved.</span>
        </section>
        <section className='rightContainer'>
          <ul className='links'>
            <li>
              <Link to='/' onClick={() => {}}>
                HOME
              </Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/profile'>PROFILE</Link>
            </li>
            <li>
              <Link to='/settings'>SETTINGS</Link>
            </li>
          </ul>
          <div className='logos'>
            <i className='fa-solid fa-comment-dots logo'></i>
            <i className='fa-brands fa-github logo'></i>
            <i className='fa-brands fa-instagram logo'></i>
            <i className='fa-brands fa-discord logo'></i>
            <i className='fa-brands fa-facebook logo'></i>
          </div>
        </section>
      </footer> */}

      <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')} display='flex' justifyContent='space-between'>
        <Container as={Stack} maxW={'9xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={6}>
            <Stack spacing={6} direction={'row'}>
              <Box>
                <Logo />
              </Box>
              <Stack direction={'column'}>
                <Stack spacing={3}>
                  <Text fontSize={'md'} color='#5A8DFF'>
                    TEL +82-10-3733-0690
                  </Text>
                  <Text fontSize={'md'} color='#5A8DFF'>
                    Email : contact@hanyang.ac.kr
                  </Text>
                  <Text fontSize={'md'} color='#5A8DFF'>
                    2022 Hanyang Univ. All Rights Reserved.
                  </Text>
                </Stack>
                <Stack direction={'row'} spacing={5}>
                  <SocialButton label={'CommentDots'} href={'#'}>
                    <FaCommentDots />
                  </SocialButton>
                  <SocialButton label={'Github'} href={'#'}>
                    <FaGithub />
                  </SocialButton>
                  <SocialButton label={'Instagram'} href={'#'}>
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton label={'Discord'} href={'#'}>
                    <FaDiscord />
                  </SocialButton>
                  <SocialButton label={'Facebook'} href={'#'}>
                    <FaFacebook />
                  </SocialButton>
                </Stack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
const Logo = (props) => {
  return (
    <Box boxSize={'180px'}>
      <img src='./imgs/HY-Together/4.svg' alt='' />
    </Box>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        transform: 'scale(1.1)',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default Footer;
