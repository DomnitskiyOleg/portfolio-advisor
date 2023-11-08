import React from 'react';
import { useAppSelector } from '../stateHooks/hooks';
import ReactECharts from 'echarts-for-react';
import { Row, Col, Container, Table } from 'react-bootstrap';

const MyPortfolio = () => {
  const count = useAppSelector((state) => state.portfolio.value);
  console.log(count);

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
      data: ['акции', 'облигации', 'золото'],
    },
    series: [
      {
        name: 'доля',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 60, name: 'акции' },
          { value: 30, name: 'облигации' },
          { value: 10, name: 'золото' },
        ],
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
        <Col className='col-12 col-sm-10'>
          <Row className='justify-content-center'>
            <Col className='text-center col-12 col-xl-6 bg-white shadow-sm rounded p-4'>
              <h1 className='text-muted h5 mb-4'>Распределение по классам активов</h1>
              <ReactECharts option={option} style={{ height: 400 }} />
            </Col>
            <Col className='text-center col-12 col-xl-3 bg-white shadow-sm rounded p-4'>
              <h1 className='text-muted h5 mb-4'>Текущий портфель</h1>
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
            <Col className='text-center col-12 col-xl-3 bg-white shadow-sm rounded p-4'>
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
