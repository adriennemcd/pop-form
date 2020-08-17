import React, { forwardRef } from 'react';

const Select = (props, ref) => {
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
        ref={ref}
        aria-describedby={`${props.id}-instructions ${props.id}-error`}
        aria-invalid={props.invalid}
      >
        <option className='form__select-option' value=""></option>
        {props.values.map((option, i) =>
          <option key={i+1} className='form__select-option' value={option}>{option}</option>
        )}
      </select>
      {props.invalid && <span id={`${props.id}-error`} className='form__label form__label--error'>This field is required</span>}
    </div>
  );
}

Select.displayName = 'Select';
export default forwardRef(Select);