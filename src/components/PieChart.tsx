import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { ChartDataType } from '../types/index';

const PieChart = ({
  chartData,
  chartLegendData,
}: {
  chartData: ChartDataType[];
  chartLegendData: string[];
}) => {
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
  return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default PieChart;
