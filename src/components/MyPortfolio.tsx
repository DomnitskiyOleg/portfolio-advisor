import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../stateHooks/hooks';
import PieChart from './PieChart';
import { Row, Col, Container, Form } from 'react-bootstrap';
import EtfTable from './EtfTable';
import { etfs, strategies } from '../static/strategies';
import getEtfRates from '../utils/getEtfRates';
import getActualEtfAllocation from '../utils/getActualEtfAllocation';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
  const strategy = useAppSelector((state) => state.strategy.value);
  const isTestPassed = useAppSelector((state) => state.isTestPassed.value);
  const initialEtfRates = {
    SBGB: 0,
    SBGD: 0,
    SBRB: 0,
    SBMX: 0,
    SBHI: 0,
  };
  const [currentRates, setCurrentRates] = useState(initialEtfRates);
  const [initialCapital, setInitialCapital] = useState(100000);
  const userAllocation = strategies[strategy];
  const chartData = Object.values(userAllocation);
  const chartLegendData = Object.keys(userAllocation);
  const actualEtfAllocation = getActualEtfAllocation(
    initialCapital,
    currentRates,
    userAllocation,
  );

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInitialCapital(parseInt(value));
  };

  useEffect(() => {
    const fetchRates = async () => {
      const fetchedEtfRates = await getEtfRates(etfs);
      setCurrentRates(fetchedEtfRates);
    };
    fetchRates();
  }, []);

  return (
    <Container className='my-2'>
      <Row className='justify-content-center'>
        <Col className='col-12'>
          <Row className='justify-content-center'>
            <Col className='text-center col-12 col-lg-5 bg-white shadow-sm rounded p-4'>
              {isTestPassed === 'passed' ? (
                <>
                  <h1 className='text-muted h5 mb-4'>
                    Распределение по классам активов
                  </h1>
                  <div className='d-flex text-left'>
                    <Form.Label htmlFor='capital'>Стартовый капитал</Form.Label>
                  </div>
                  <Form.Control
                    type='text'
                    placeholder='стартовый капитал'
                    name='capital'
                    value={initialCapital}
                    disabled={true}
                    id='capital'
                  />
                  <Form.Range
                    defaultValue={initialCapital}
                    name='capital'
                    onChange={onRangeChange}
                    min='100000'
                    max='1000000'
                    step='50000'
                  />
                  <PieChart
                    chartData={chartData}
                    chartLegendData={chartLegendData}
                  />
                </>
              ) : (
                <div>
                  Вы еще не создали портфель{' '}
                  <Link to={'/create'}>Создать портфель</Link>
                </div>
              )}
            </Col>
            <Col className='text-center col-12 col-lg-3 bg-white shadow-sm mx-1 rounded p-4'>
              <h1 className='text-muted h5 mb-4'>Текущий портфель</h1>
              <EtfTable etfAllocation={actualEtfAllocation} />
            </Col>
            <Col className='text-center col-12 col-lg-3 bg-white shadow-sm rounded p-4'>
              <h1 className='text-muted h5 mb-4'>Сохраненный портфель</h1>
              <EtfTable etfAllocation={actualEtfAllocation} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPortfolio;
