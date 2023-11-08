import React from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

type CarSearchProps = {};

const CarSearch: React.FC<CarSearchProps> = () => {

  const searchTerm = useAppSelector(state => state.cars.searchTerm)

  const { changeTerm } = useActions();

  return (
    <form>
      <label>Search</label>
      <input
        type="text"
        value={searchTerm}
        onChange={e => changeTerm(e.target.value)}
      />
    </form>
  );
};

export default CarSearch;
