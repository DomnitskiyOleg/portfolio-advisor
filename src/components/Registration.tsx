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
import registImage from '../assets/registImage.png';
import useAuth from '../hooks/index';
import { useNavigate } from 'react-router-dom';
import { fireBaseApi } from '../firebase/firebase';
import { setEmail } from '../slices/emailSlice';
import { useAppDispatch } from '../stateHooks/hooks';

const LogIn = () => {
  const dispatch = useAppDispatch();
  const { Formik } = formik;
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const registrationShema = yup.object().shape({
    email: yup.string().email('Введите валидный email адрес'),
    password: yup
      .string()
      .required('Это обязательное поле')
      .min(6, 'Минимальная длина пароля 6 символов'),
    confirm_password: yup
      .string()
      .label('confirm password')
      .required('Это обязательное поле')
      .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать'),
  });

  return (
    <Container className='my-2'>
      <Row className='justify-content-center'>
        <Col className='col-12 col-sm-8'>
          <Card className='text-center shadow'>
            <Card.Header className='p-1 bg-info' />
            <Card.Body className='row px-4 py-2'>
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                <Image width='290' height='250' src={registImage} />
              </div>
              <Formik
                validationSchema={registrationShema}
                onSubmit={async ({ email }) => {
                  try {
                    // firebase key expired
                    // await fireBaseApi.saveEmail(email);
                    // dispatch(setEmail(email));
                    logIn();
                    navigate('/create');
                  } catch (e) {
                    console.log(e);
                  }
                }}
                initialValues={{
                  email: '',
                  password: '',
                  confirm_password: '',
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form
                    noValidate
                    className='col-12 col-lg-6 my-3'
                    onSubmit={handleSubmit}
                  >
                    <h1 className='h3 mb-4'>Регистрация</h1>
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
                      controlId='validationFormik102'
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
                    <Form.Group
                      className='mb-3'
                      controlId='validationFormik103'
                    >
                      <FloatingLabel
                        controlId='floatingConfirm_password'
                        label='Подтвердите пароль'
                      >
                        <Form.Control
                          type='password'
                          name='confirm_password'
                          onChange={handleChange}
                          isInvalid={!!errors.confirm_password}
                          value={values.confirm_password}
                          placeholder='Пароль'
                          autoComplete='newPassword'
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                          {errors.confirm_password}
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
