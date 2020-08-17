import React from 'react';

const Select = (props) => {
  return (
    <div className='form__item form__item--select'>
      <label className='form__label' htmlFor={props.name}>{props.label}</label>
      {props.isRequired && <span className='form__label' aria-hidden='true'>*</span>}
      <select
        id={props.name}
        className='form__select'
        name={props.name}
        onChange={props.handleChange}
        aria-required={props.isRequired}
        required={props.isRequired}
      >
        <option className='form__select-option' value=""></option>
        {props.values.map((option, i) =>
          <option key={i+1} className='form__select-option' value={option}>{option}</option>
        )}
      </select>
    </div>
  );
}

export default Select;