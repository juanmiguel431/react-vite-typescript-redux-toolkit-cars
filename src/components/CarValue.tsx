import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';

type CarValueProps = {};

const CarValue: React.FC<CarValueProps> = () => {

  const { items, searchTerm } = useAppSelector(state => state.cars);

  const total = useMemo(() => {
    return items.filter(c => c.name.includes(searchTerm))
      .reduce((acc, currentValue) => {
        return acc + currentValue.value
      }, 0);
  }, [items, searchTerm]);

  return (
    <h1>Total value: {total}</h1>
  );
};

export default CarValue;
