import React from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

type CarListProps = {};

const CarList: React.FC<CarListProps> = () => {

  const cars = useAppSelector(state => state.cars.items);

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
        {cars.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.value}</td>
            <td>
              <button onClick={() => deleteCar(c.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
