import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

type CarListProps = {};

const CarList: React.FC<CarListProps> = () => {

  const { items, searchTerm } = useAppSelector(state => state.cars);
  const name = useAppSelector(state => state.form.name);

  const { deleteCar } = useActions();

  const cars = useMemo(() => {
    return items.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [items, searchTerm]);

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
