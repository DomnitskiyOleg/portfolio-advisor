import type { UserAnswers } from '../types/index';

const getAgePoints = (age: UserAnswers['age']): number => {
  if (age >= 60) return 1;
  if (age <= 40) return 10;
  else return 5;
};

const getInvestTimePoints = (investTime: UserAnswers['investTime']): number => {
  if (investTime >= 15) return 10;
  if (investTime <= 4) return 1;
  else return 5;
};

const getTypeByPoints = ( points: number ): 'aggressive' | 'conservative' | 'common' => {
  if (points >= 40) return 'aggressive';
  if (points <= 20) return 'conservative';
  else return 'common';
};

const getStrategyType = (userAnswers: UserAnswers): 'aggressive' | 'conservative' | 'common' => {
  const { investTime, age, ...stringAnswers } = userAnswers;

  const pointsMapSystem = {
    ptotect: 1,
    medGrow: 5,
    grow: 10,
    spendAll: 1,
    spendPart: 5,
    reinvest: 10,
    earn5: 1,
    earn10: 5,
    earn15: 10,
    deposits: 1,
    bonds: 5,
    stocks: 10,
    '': 1,
  };

  const stringAnswersPoints = Object.values(stringAnswers)
    .map((value): number => pointsMapSystem[value])
    .reduce((acc, item): number => acc + item, 0);
  const agePoints = getAgePoints(age);
  const investTimePoints = getInvestTimePoints(investTime);
  const totalPoints = stringAnswersPoints + agePoints + investTimePoints;
  const result = getTypeByPoints(totalPoints);

  return result;
};

export default getStrategyType;