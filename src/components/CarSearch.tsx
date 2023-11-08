import React from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

type CarSearchProps = {};

const CarSearch: React.FC<CarSearchProps> = () => {

  const searchTerm = useAppSelector(state => state.cars.searchTerm)

  const { changeTerm } = useActions();

  return (
    <div  className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={e => changeTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CarSearch;
