import React from 'react';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';

const NavigationMenu = () => {
  const navigate = useNavigate();
  const onEnter = ({ currentTarget }: { currentTarget: HTMLElement }): void => {
    gsap.to(currentTarget, { backgroundColor: '#F2F2F2', scale: 1.07 });
  };

  const onLeave = ({ currentTarget }: { currentTarget: HTMLElement }): void => {
    gsap.to(currentTarget, { backgroundColor: '#ffff', scale: 1 });
  };
  return (
    <Navbar expand='lg' className='shadow-sm bg-body-wigth'>
      <Container>
        <Navbar.Brand
          as={Link}
          to='/'
          className='rounded-3 m-1 p-2'
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Portfolio Advisor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className='rounded-3 m-1'
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              Главная
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/create'
              href='#create'
              className='rounded-3 m-1'
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              Создать портфель
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/login'
              className='rounded-3 m-1'
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              Мой портфель
            </Nav.Link>
            <Nav.Link
              href='#link'
              className='rounded-3 m-1'
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              disabled={true}
            >
              Анализ портфеля
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              className='m-1'
              onClick={() => navigate('/registration')}
              variant='outline-info'
            >
              Регистрация
            </Button>
            <Button
              className='m-1'
              onClick={() => navigate('/login')}
              variant='outline-info'
            >
              Войти
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
