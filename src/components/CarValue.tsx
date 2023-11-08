import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';

type CarValueProps = {};

const CarValue: React.FC<CarValueProps> = () => {

  const items = useAppSelector(state => state.cars.items);

  const total = useMemo(() => {
    return items.reduce((acc, currentValue) => {
      return acc + currentValue.value
    }, 0);
  }, [items]);

  return (
    <h1>Total value: {total}</h1>
  );
};

export default CarValue;
