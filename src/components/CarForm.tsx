import React from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

type CarFormProps = {};

const CarForm: React.FC<CarFormProps> = () => {

  const { name, value } = useAppSelector(state => state.form);

  const { changeName, changeValue, addCar } = useActions();

  return (
    <form>
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={e => changeName(e.target.value)}
      />

      <label>value</label>
      <input
        type="number"
        value={value || ''}
        onChange={e => changeValue(+e.target.value)}
      />

      <button onClick={e => {
        e.preventDefault();
        addCar({ name, value });
      }}>Submit</button>
    </form>
  );
};

export default CarForm;
