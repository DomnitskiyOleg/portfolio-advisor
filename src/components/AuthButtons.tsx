import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../hooks/index';

const AuthButtons = () => {
  const { loggedIn, logOut } = useAuth();
  console.log(loggedIn);
  const onClick = (): void => {
    if (logOut) logOut();
    console.log('logOut');
  }
  const navigate = useNavigate();
  return loggedIn ? (
    <Button  variant='outline-info' onClick={onClick}>Выйти</Button>
  ) : (
    <>
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
    </>
  );
};

export default AuthButtons;
