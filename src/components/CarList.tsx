import React from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CarListProps = {};

const filteredCarsSelector = createSelector([(state: RootState) => state], (state) => {
  return {
    name: state.form.name,
    cars: state.cars.items.filter(c => c.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()))
  }
});

const CarList: React.FC<CarListProps> = () => {
  const { name, cars } = useAppSelector(filteredCarsSelector);

  const { deleteCar } = useActions();

  return (
    <div className="car-list">
      {cars.map(c => {
        const bold = !!name && c.name.toLowerCase().includes(name.toLowerCase());
        return (
          <div key={c.id} className={`panel ${bold ? 'bold' : ''}`}>
            <p>
              {c.name} - ${c.value}
            </p>
            <button
              className="button is-danger"
              onClick={() => deleteCar(c.id)}>
              Delete
            </button>
          </div>
        );
      })}
      <hr/>
    </div>
  );
};

export default CarList;
