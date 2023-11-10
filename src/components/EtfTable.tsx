import React from 'react';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import type { EtfRatesType } from '../types/index';

const EtfTable = ({ etfAllocation }: { etfAllocation: EtfRatesType }) => {
  const etfList = Object.entries(etfAllocation);
  
  const rows = etfList.map(([ticker, price]) => (
    <tr key={_.uniqueId()}>
      <td>{ticker}</td>
      <td>{price}</td>
    </tr>
  ));

  return (
    <Table className='table-sm table-info' bordered hover>
      <thead>
        <tr>
          <th>
            <span className='text-muted'>Тикер бумаги</span>
          </th>
          <th>
            <span className='text-muted'>Количество</span>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default EtfTable;
