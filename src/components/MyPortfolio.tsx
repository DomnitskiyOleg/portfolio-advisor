import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../stateHooks/hooks';
import ReactECharts from 'echarts-for-react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import EtfTable from './EtfTable';
import { etfs, strategies } from '../static/strategies';
import getEtfRates from '../utils/getEtfRates';

const MyPortfolio = () => {
  const strategy = useAppSelector((state) => state.strategy.value);
  const initialEtfAllocation = {
    SBGB: 0,
    SBGD: 0,
    SBRB: 0,
    SBMX: 0,
    SBHI: 0,
  };
  const [etfAllocation, setEtfAllocation] = useState(initialEtfAllocation);
  const allocation = strategies[strategy];
  const chartData = Object.values(allocation);
  const chartLegendData = Object.keys(allocation);

  const fetchRates = async () => {
    const fetchedEtfRates = await getEtfRates(etfs);
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const option = {
    title: {
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {d}%',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: chartLegendData,
    },
    series: [
      {
        name: 'доля',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: chartData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col className='col-12'>
          <Row className='justify-content-center'>
            <Col className='text-center col-12 col-lg-5 bg-white shadow-sm rounded p-4'>
              <h1 className='text-muted h5 mb-4'>
                Распределение по классам активов
              </h1>
              <ReactECharts option={option} style={{ height: 400 }} />
            </Col>
            <Col className='text-center col-12 col-lg-3 bg-white shadow-sm mx-1 rounded p-4'>
              <h1 className='text-muted h5 mb-4'>Текущий портфель</h1>
              <EtfTable etfAllocation={etfAllocation} />
            </Col>
            <Col className='text-center col-12 col-lg-3 bg-white shadow-sm rounded p-4'>
              <h1 className='text-muted h5 mb-4'>Сохраненный портфель</h1>
              <Table className='table-sm table-info' bordered hover>
                <thead>
                  <tr>
                    <th>
                      <span className='text-muted'>Тикер бумаги</span>
                    </th>
                    <th>Количество</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPortfolio;
