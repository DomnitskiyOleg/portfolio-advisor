import React from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import type { UserAnswers } from '../types/index';
import getStrategyType from '../utils/getStrategyType';
import { setStrategy } from '../slices/strategySlice';
import { setTestPassed } from '../slices/testPassedSlice';
import { useAppDispatch } from '../stateHooks/hooks';

const CreatePortfolio = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { Formik } = formik;
  const feedback = {
    required: 'Это обязательное поле',
  };
  const testingShema = yup.object().shape({
    investGoal: yup.string().required(feedback.required),
    investTime: yup.number().required(feedback.required),
    spendIncome: yup.string().required(feedback.required),
    expectedProfit: yup.string().required(feedback.required),
    investType: yup.string().required(feedback.required),
    age: yup.number().required(feedback.required),
  });

  return (
    <Container className='my-2'>
      <Row className='justify-content-center'>
        <Col className='col-12 col-sm-8'>
          <Card className='shadow'>
            <Card.Header className='p-1 bg-info' />
            <Card.Body className='row px-4 py-4'>
              <Formik
                validationSchema={testingShema}
                onSubmit={(values: UserAnswers) => {
                  const strategyType = getStrategyType(values);
                  dispatch(setStrategy(strategyType));
                  dispatch(setTestPassed('passed'));
                  navigate('/myportfolio');
                }}
                initialValues={{
                  spendIncome: '',
                  investGoal: '',
                  investTime: 3,
                  expectedProfit: '',
                  investType: '',
                  age: 18,
                }}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik01'
                      >
                        <Form.Label>Выберете цель инвестирования</Form.Label>
                        <Form.Select
                          name='investGoal'
                          value={values.investGoal}
                          onChange={handleChange}
                          isInvalid={!!errors.investGoal}
                          aria-label='invest goal'
                        >
                          <option></option>
                          <option value='ptotect'>
                            Защита основного капитала
                          </option>
                          <option value='medGrow'>
                            Умеренный рост активов
                          </option>
                          <option value='grow'>
                            Большей частью рост активов
                          </option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                          {errors.investGoal}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik02'
                      >
                        <Form.Label>
                          Как Вы планируете распоряжаться доходом?
                        </Form.Label>
                        <Form.Select
                          name='spendIncome'
                          value={values.spendIncome}
                          onChange={handleChange}
                          isInvalid={!!errors.spendIncome}
                          aria-label='spend income'
                        >
                          <option></option>
                          <option value='spendAll'>Снимать весь доход</option>
                          <option value='spendPart'>
                            Часть снимать, часть реинвестировать
                          </option>
                          <option value='reinvest'>Всё реинвестировать</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                          {errors.spendIncome}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik03'
                      >
                        <Form.Label>
                          Выберете ожидаемую доходность портфеля
                        </Form.Label>
                        <Form.Select
                          name='expectedProfit'
                          value={values.expectedProfit}
                          onChange={handleChange}
                          isInvalid={!!errors.expectedProfit}
                          aria-label='spend income'
                        >
                          <option></option>
                          <option value='earn5'>До 5% годовых</option>
                          <option value='earn10'>До 10% годовых</option>
                          <option value='earn15'>15% годовых и более</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                          {errors.expectedProfit}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik04'
                      >
                        <Form.Label>
                          Какой тип инвестиций для Вас комфортен?
                        </Form.Label>
                        <Form.Select
                          name='investType'
                          value={values.investType}
                          onChange={handleChange}
                          isInvalid={!!errors.investType}
                          aria-label='invest type'
                        >
                          <option></option>
                          <option value='deposits'>Депозиты</option>
                          <option value='bonds'>Облигации</option>
                          <option value='stocks'>Акции</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>
                          {errors.investType}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik05'
                      >
                        <Form.Label>Выберете Ваш возраст</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='age'
                          name='age'
                          value={values.age}
                          onChange={handleChange}
                          isInvalid={!!errors.age}
                          disabled={true}
                        />
                        <Form.Range
                          value={values.age}
                          onChange={handleChange}
                          name='age'
                          min='18'
                          max='70'
                          step='1'
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.age}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik06'
                      >
                        <Form.Label>
                          Сколько лет Вы планируeте инвестировать
                        </Form.Label>
                        <Form.Control
                          disabled={true}
                          type='text'
                          placeholder='State'
                          value={values.investTime}
                          onChange={handleChange}
                          isInvalid={!!errors.investTime}
                        />
                        <Form.Range
                          value={values.investTime}
                          onChange={handleChange}
                          name='investTime'
                          min='3'
                          max='25'
                          step='1'
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.investTime}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button variant='outline-info' type='submit'>
                      Пройти тест
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

export default CreatePortfolio;
