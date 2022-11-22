import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import '../../App.scss';
import ScrollBtn from '../scroll';
import PublicLayout from './PublicLayout';
import {
  Container,
  Link,
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function Navigation() {
  //   const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  return (
    // <Container maxW={'container.xl'}>
    //   <nav className='nav'>
    //     <img
    //       className='img'
    //       onClick={() => {
    //         navigate('/');
    //       }}
    //       src='/imgs/HY-Together/logotext.png'
    //       alt=''
    //     />
    //     <ul className='links'>
    //       <li>
    //         <Link to='/' onClick={() => {}}>
    //           HOME
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to='/about'>ABOUT</Link>
    //       </li>
    //       <li>
    //         <Link to='/profile'>PROFILE</Link>
    //       </li>
    //       <li>
    //         <Link to='/settings'>SETTINGS</Link>
    //       </li>
    //     </ul>
    //     <div className='nav__btn'>
    //       <button className='reserve'>예약 확인</button>
    //       <button className='profile'>프로필 수정</button>
    //     </div>
    //     <div className='subnav'>{/* <ScrollBtn/> */}</div>
    //   </nav>
    // </Container>
    <>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 4 }}
          px={{ base: 10 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box
              style={{
                backgroundImage: `url(/imgs/HY-Together/logotext.png)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '180px',
                minHeight: '30px',
              }}></Box>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <Button as={'a'} fontSize={'md'} fontWeight={400} variant={'link'} href={'#'}>
              임시 버튼
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'md'}
              fontWeight={500}
              color={'white'}
              bg={'messenger.500'}
              href={'#'}
              _hover={{
                bg: 'messenger.400',
              }}>
              로그인
            </Button>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('#5a8dff', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={400}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                style={{ padding: '0' }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link href={href} role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'ABOUT',
    href: '#',
  },
  {
    label: 'PROFILE',
    href: '#',
  },
  {
    label: 'NOTICE',
    href: '#',
  },
  {
    label: 'SETTINGS',
    href: '#',
  },
];
