import React, {Fragment} from 'react';

const RadioGroup = (props) => {

  return (
    <fieldset className='form__item form__item--radio'>
      <legend className='form__legend'>{props.label}</legend>
      {props.values.map((value, i) => 
        <Fragment key={i}>
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
        </Fragment>
      )}
    </fieldset>
  );
}

export default RadioGroup;