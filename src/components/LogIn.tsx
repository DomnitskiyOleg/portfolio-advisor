import React from 'react';
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Container,
  FloatingLabel,
  Image
} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import useAuth from '../hooks/index';
import loginImage from '../assets/loginImage.png';

const LogIn = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const { Formik } = formik;
  const loginShema = yup.object().shape({
    email: yup
      .string()
      .email('Введите валидный email адрес')
      .required('Это обязательное поле'),
    password: yup.string().required('Это обязательное поле').min(6),
  });

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col className='col-12 col-sm-8'>
          <Card className='text-center shadow'>
            <Card.Header className='p-1 bg-info' />
            <Card.Body className='row px-4 py-2'>
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                <Image width='270' height='290' src={loginImage} />
              </div>
              <Formik
                validationSchema={loginShema}
                onSubmit={() => {
                  console.log('bingo');
                  logIn();
                  navigate('/create');
                }}
                initialValues={{
                  email: '',
                  password: '',
                  investGoal: '',
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form
                    noValidate
                    className='col-12 col-lg-6 my-3'
                    onSubmit={handleSubmit}
                  >
                    <h1 className='h3 mb-4'>Войти</h1>
                    <Form.Group
                      className='mb-3'
                      controlId='validationFormik101'
                    >
                      <FloatingLabel
                        controlId='floatingEmail'
                        label='Ваш e-mail'
                      >
                        <Form.Control
                          type='email'
                          name='email'
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          value={values.email}
                          placeholder='Ваш email'
                          autoComplete='email'
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='validationFormik101'
                    >
                      <FloatingLabel
                        controlId='floatingPassword'
                        label='Пароль'
                      >
                        <Form.Control
                          type='password'
                          name='password'
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          value={values.password}
                          placeholder='Пароль'
                          autoComplete='newPassword'
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                          {errors.password}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Button
                      className='w-100 mb-3'
                      variant='outline-info'
                      type='submit'
                    >
                      Войти
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
            <Card.Footer className='text-muted p-2'>
               Нет аккаунта?
               {' '}
              <Link to='/registration'>Регистрация</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
