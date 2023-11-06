import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';

const NavigationMenu = () => (
  <Navbar expand='lg' className='shadow-sm bg-body-wigth'>
    <Container>
      <Navbar.Brand href='#home'>
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
          <Nav.Link href='#home'>Главная</Nav.Link>
          <Nav.Link href='#link'>Создать портфель</Nav.Link>
          <Nav.Link href='#home'>Мой портфель</Nav.Link>
          <Nav.Link href='#link' disabled>
            Анализ портфеля
          </Nav.Link>
        </Nav>
        <Nav>
          <Button className='m-1' variant='outline-info'>
            Регистрация
          </Button>
          <Button className='m-1' variant='outline-info'>
            Войти
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationMenu;
