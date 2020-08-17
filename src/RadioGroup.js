import React from 'react';

const RadioGroup = (props) => {

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
          />
          <label className='form__label' htmlFor={`${props.id}-${i}`}>{value}</label>
        </div>
      )}
    </fieldset>
  );
}

export default RadioGroup;