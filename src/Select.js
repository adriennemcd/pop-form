import React from 'react';

const Select = (props) => {
  return (
    <div className='form__item'>
      <label className='form__label' htmlFor={props.name}>{props.label}</label>
      <select id={props.name} className='form__select' name={props.name} onChange={props.handleChange}>
        <option className='form__select-option' value="">--Please choose an option--</option>
        {props.values.map((option, i) =>
          <option key={i+1} className='form__select-option' value={option}>{option}</option>
        )}
      </select>
    </div>
  );
}

export default Select;