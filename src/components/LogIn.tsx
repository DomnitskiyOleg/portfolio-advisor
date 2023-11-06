import React from 'react';
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Container,
  FloatingLabel,
  Image,
} from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';

const LogIn = () => {
  const { Formik } = formik;
  const loginShema = yup.object().shape({
    email: yup.string().email('Введите валидный email адрес'),
    password: yup.string().required('Это обязательное поле').min(6, 'Минимальная длина пароля 6 символов'),
  });

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col className='col-12 col-sm-8'>
          <Card className='text-center shadow-sm'>
            <Card.Body className='row p-5'>
              <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
                <Image width='200' height='250' src='3.png' />
              </div>
              <Formik
                validationSchema={loginShema}
                onSubmit={() => {
                    console.log('bingo');
                }}
                initialValues={{
                  email: '',
                  password: '',
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form
                    noValidate
                    className='col-12 col-md-6 my-3'
                    onSubmit={handleSubmit}
                  >
                    <h1 className='mb-4'>Войти</h1>
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
              Нет аккаунта? <a href='a'>Регистрация</a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
