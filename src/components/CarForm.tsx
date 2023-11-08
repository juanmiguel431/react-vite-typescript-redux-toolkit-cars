import React from 'react';
import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';

type CarFormProps = {};

const CarForm: React.FC<CarFormProps> = () => {

  const { name, value } = useAppSelector(state => state.form);

  const { changeName, changeValue, addCar } = useActions();

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={e => changeName(e.target.value)}
            />
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label className="label">Value</label>
            <input
              className="input is-expanded"
              type="number"
              value={value || ''}
              onChange={e => changeValue(+e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <button
            className="button is-link"
            onClick={e => {
              e.preventDefault();
              addCar({ name, value });
            }}>Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default CarForm;
