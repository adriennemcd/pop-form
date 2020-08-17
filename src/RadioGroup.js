import React, { forwardRef } from 'react';

const RadioGroup = (props, ref) => {

  return (
    <fieldset className='form__item form__item--radio' aria-required={props.isRequired} required={props.isRequired}>
      <legend className='form__legend'>
        {props.label}
        {props.isRequired && <span aria-hidden='true'>*</span>}
      </legend>
      {props.instructions && <span id={`${props.id}-instructions`} className='form__label form__label--instructions'>{props.instructions}</span>}
      {props.values.map((value, i) => 
        <div key={i} className='form__radio-button-item'>
          <input
            id={`${props.id}-${i}`}
            className='form__radio-button'
            type="radio"
            name={props.name}
            value={value}
            checked={props.checked === value}
            onChange={props.handleChange}
            ref={ref}
            aria-describedby={`${props.id}-instructions ${props.id}-error`}
            aria-invalid={props.invalid}
          />
          <label className='form__label' htmlFor={`${props.id}-${i}`}>{value}</label>
        </div>
      )}
      {props.invalid && <span id={`${props.id}-error`} className='form__label form__label--error'>This field is required</span>}
    </fieldset>
  );
}

RadioGroup.displayName = 'RadioGroup';
export default forwardRef(RadioGroup);