import React from 'react';
import { useAppSelector } from '../stateHooks/hooks';

const MyPortfolio = () => {
  const count = useAppSelector((state) => state);
  console.log(count);
  return <div>1</div>;
};

export default MyPortfolio;