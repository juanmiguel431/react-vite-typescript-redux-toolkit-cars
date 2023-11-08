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
  const { name, cars} = useAppSelector(filteredCarsSelector);

  const { deleteCar } = useActions();

  return (
    <div>
      <h1>Cars</h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        {cars.map(c => {
          const bold = !!name && c.name.toLowerCase().includes(name.toLowerCase());
          return (
            <tr key={c.id}>
              <td>
                <span style={{ fontWeight: bold ? 'bold' : '' }}>
                  {c.name}
                </span>
              </td>
              <td>{c.value}</td>
              <td>
                <button onClick={() => deleteCar(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
