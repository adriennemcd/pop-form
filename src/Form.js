import React, {Component, Fragment, createRef} from 'react';
import Select from './Select';
import RadioGroup from './RadioGroup';
import waitingList from './waitingListStatus.json';

class Form extends Component {
  state = {
    email: '',
    alreadyPlays: null,
    yearsPlaying: '',
    grade: '',
    instrument: '',
    hasWorkingInstrument: null,
    school: '',
    isInPhilly: null,
    isReturningStudent: null,
    invalidInputs: []
  }

  emailRef = createRef();
  alreadyPlaysRef = createRef();
  yearsPlayingRef = createRef();
  gradeRef = createRef();
  instrumentRef = createRef();
  hasWorkingInstrumentRef = createRef();
  schoolRef = createRef();
  isInPhillyRef = createRef();
  isReturningStudentRef = createRef();

  gradeValues = [
    'Kindergarten',
    '1st',
    '2nd',
    '3rd or 4th',
    '5th',
    '6th or 7th',
    '8th',
    '9th, 10th, 11th, or 12th'
  ];

  instrumentValues = [
    'Bass',
    'Bassoon',
    'Cello',
    'Clarinet',
    'Flute',
    'French Horn',
    'Harp',
    'Oboe',
    'Percussion',
    'Trombone',
    'Trumpet',
    'Tuba/Euphonium',
    'Viola',
    'Violin',
    'Other'
  ];

  schoolValues = [
    'Freire Charter Middle School',
    'Independence Charter School West',
    'St. Francis de Sales',
    'No, my student will be attending a different school'
  ];

  getEligibility = (grade, isReturningStudent) => {
    if (isReturningStudent) return true;

    switch(grade) {
      case 'Kindergarten':
      case '1st':
      case '3rd or 4th':
        return this.state.school === 'St. Francis de Sales' || this.state.school === 'Independence Charter School West';
      case '5th':
        return this.state.school === 'St. Francis de Sales' ||
        this.state.school === 'Independence Charter School West' ||
        this.state.school === 'Freire Charter Middle School' ||
        this.state.yearsPlaying >= 4;
      case '6th or 7th':
        return this.state.school === 'Freire Charter Middle School' ||
        this.state.yearsPlaying >= 4;
      case '8th':
      case '9th, 10th, 11th, or 12th':
        return this.state.yearsPlaying >= 4;
      default:
        return false;
    }
  }

  getDivision = (grade) => {
    const alreadyPlays = this.state.alreadyPlays === 'yes';
    const hasWorkingInstrumentOrInPhilly = this.state.hasWorkingInstrument === 'yes' || this.state.isInPhilly === 'yes';

    if (!alreadyPlays) {
      switch(grade) {
        case 'Kindergarten':
        case '1st':
        case '2nd':
          return '1A';
        case '3rd or 4th':
          return '1B';
        case '5th':
        case '6th or 7th':
          return '1C';
        default:
          return null;
      };
    } else if (this.state.instrument === 'Bass' ||
      this.state.instrument === 'Cello' ||
      this.state.instument === 'Viola' ||
      this.state.instrument === 'Violin') {
        switch(grade) {
          case '1st':
          case '2nd':
            return this.state.yearsPlaying >= 1 ? '2A' : null;
          case '3rd or 4th':
            return this.state.yearsPlaying >= 1 ? '2B' : null;
          case '5th':
          case '6th or 7th':
            return (this.state.yearsPlaying >= '4') &&
            hasWorkingInstrumentOrInPhilly ? '3A' : null;
          case '8th':
          case '9th, 10th, 11th, or 12th':
            return this.state.yearsPlaying >= 6 &&
            hasWorkingInstrumentOrInPhilly ? '3C' : null;
          default: 
            return null;
        }
    } else if (this.state.instrument === 'Bassoon' ||
    this.state.instrument === 'Clarinet' ||
    this.state.instrument === 'Flute' ||
    this.state.instrument === 'French Horn' ||
    this.state.instrument === 'Harp' ||
    this.state.instrument === 'Oboe' ||
    this.state.instrument === 'Percussion' ||
    this.state.instrument === 'Trombone' ||
    this.state.instrument === 'Trumpet' ||
    this.state.instrument === 'Tuba/Euphonium') {
      switch(grade) {
        case '3rd or 4th': // CHANGE TO ONLY 4TH
        case '5th':
        case '6th or 7th':
          return (this.state.yearsPlaying >= 1) &&
          hasWorkingInstrumentOrInPhilly ? '3B' : null;
        case '8th':
        case '9th, 10th, 11th, or 12th':
          return this.state.yearsPlaying >= 3 &&
          hasWorkingInstrumentOrInPhilly ? '3D' : null;
        default:
          return null;
      }
    }
  }

  cleanupState = () => {
    const stateObj = {};
    if (this.state.grade === 'Kindergarten') {
      stateObj.alreadyPlays = null;
      stateObj.instrument = '';
      stateObj.yearsPlaying = '';
      stateObj.hasWorkingInstrument = null;
    }

    if (this.state.alreadyPlays === 'no') {
      stateObj.instrument = '';
      stateObj.yearsPlaying = '';
      stateObj.hasWorkingInstrument = null;
    }

    if (this.state.isInPhilly === 'no') {
      stateObj.isReturningStudent = null;
      stateObj.school = '';
    }

    if (Object.keys(stateObj).length > 0) this.setState(stateObj);
  }

  validateErrors = () => {
    const {invalidInputs, ...inputState} = this.state;
    let invalidInputsNew = [];

    Object.keys(inputState).map((item, i) => {
      if (this[`${item}Ref`].current && !this.state[item]) {
        invalidInputsNew.push(item);
      }
    });

    return invalidInputsNew;
  }

  assignPlacements = () => {
    const isInPhilly = this.state.isInPhilly === 'yes';
    const isReturningStudent = this.state.isReturningStudent === 'yes';
    const inPersonEligible = this.getEligibility(this.state.grade, isReturningStudent) && isInPhilly;
    const inPersonEligibleReturning = inPersonEligible && isReturningStudent;
    const division = this.getDivision(this.state.grade);
    const link = () => {
      switch(division) {
        case '1A':
          return inPersonEligibleReturning ? 'https://airtable.com/shrmfWWAZwaFv3WyB' :
          inPersonEligible ? 'https://airtable.com/shrh1loEFwshffQZz' :
          'https://airtable.com/shr2Y58hN9RMvcgP0';
        case '1B':
          return inPersonEligibleReturning ? 'https://airtable.com/shr6xFbA2AbPWnQfM' :
          inPersonEligible ? 'https://airtable.com/shrQWZNYIcBK5Hj72' :
          'https://airtable.com/shrPI7qNdEFsJdlwI';
        case '1C':
          return inPersonEligibleReturning ? 'https://airtable.com/shrdniZDqIeVwUHvK' :
          inPersonEligible ? 'https://airtable.com/shr3NbnCPJuXWJmvG' :
          'https://airtable.com/shr0Eb1SA0oYwV8Os';
        case '2A':
          return inPersonEligibleReturning ? 'https://airtable.com/shrJX0sC6Ae3qmuIw' :
          inPersonEligible ? 'https://airtable.com/shrPVgYpJpjjFI8kE' :
          'https://airtable.com/shrtEaUe2uVOXJq4H';
        case '2B':
          return inPersonEligibleReturning ? 'https://airtable.com/shrhunOCtcMoXw7jc' :
          inPersonEligible ? 'https://airtable.com/shrTvfvrTN3XmOBbg' :
          'https://airtable.com/shrUV8gY6LiRMGG7f';
        case '3A':
          return inPersonEligibleReturning ? 'https://airtable.com/shrT1CjTnOyW6pMM8' :
          inPersonEligible ? 'https://airtable.com/shrr0oMZyB6aCnsF2' :
          'https://airtable.com/shrI4IwBQueVKS7ox';
        case '3B':
          return inPersonEligibleReturning ? 'https://airtable.com/shrevqECns168wJd5' :
          inPersonEligible ? 'https://airtable.com/shruBbtc0nLOc0nBg' :
          'https://airtable.com/shrc1pADyaOao1Ntt';
        case '3C':
          return inPersonEligibleReturning ? 'https://airtable.com/shrMZOeQnyTiJM1fH' :
          inPersonEligible ? 'https://airtable.com/shrmjKlmGZKgbf2FB' :
          'https://airtable.com/shrAnDqHG6tBICRan';
        case '3D':
          return inPersonEligibleReturning ? 'https://airtable.com/shrSt4jjLk9kkP6PU' :
          inPersonEligible ? 'https://airtable.com/shrSoDSmrfo0tXV1t' :
          'https://airtable.com/shrBt4Elc3vUpg6Sk';
        default:
          return '';
      }
    }

    return {
      link: link(),
      division,
      inPersonEligible,
      inPersonEligibleReturning
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    if (this.state.invalidInputs.includes(name)) {
      const invalidInputs = this.state.invalidInputs.filter(val => val !== name);

      this.setState({
        [name]: value,
        invalidInputs
      }, () => {
        this.cleanupState();
      });
    } else {
      this.setState({ [name]: value }, () => {
        this.cleanupState();
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ invalidInputs: [] }, () => {
      const errors = this.validateErrors();
      if (errors.length > 0) {
        this.setState({ invalidInputs: errors });
      } else {
        const placement = this.assignPlacements();
        console.log(placement);
      }
    });
  }

  render () {
    const {invalidInputs} = this.state;

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form__item'>
          <label htmlFor='email' className='form__label'>Email address</label>
          <span className='form__label' aria-hidden='true'>*</span>
          <input
            className='form__input'
            type='email'
            id='email'
            name='email'
            onChange={this.handleChange}
            aria-describedby='email-error'
            ref={this.emailRef}
            aria-invalid={invalidInputs.includes('email')} />
            {invalidInputs.includes('email') && <span id={`email-error`} className='form__label form__label--error'>This field is required</span>}
        </div>
        <Select
          name='grade'
          label='Student Grade'
          values={this.gradeValues}
          handleChange={this.handleChange}
          isRequired
          ref={this.gradeRef}
          invalid={invalidInputs.includes('grade')}
        />
        {this.state.grade && this.state.grade !== 'Kindergarten' &&
          <RadioGroup
            label='Does your student already play an instrument?'
            values={['yes', 'no']}
            id='already-play'
            name='alreadyPlays'
            checked={this.state.alreadyPlays}
            handleChange={this.handleChange}
            isRequired
            ref={this.alreadyPlaysRef}
            invalid={invalidInputs.includes('alreadyPlays')}
          />
        }
        {this.state.alreadyPlays === 'yes' &&
          <Fragment>
            <Select
              name='instrument'
              label='Select which instrument'
              values={this.instrumentValues}
              handleChange={this.handleChange}
              isRequired
              ref={this.instrumentRef}
              invalid={invalidInputs.includes('instrument')}
            />
            <div className='form__item'>
              <label htmlFor='years' className='form__label'>How long has your student been playing (# of years)?</label>
              <span className='form__label' aria-hidden='true'>*</span>
              <span id='years-instructions' className='form__label form__label--instructions'>If your student has been playing for less than a year, type 0</span>
              <input
                className='form__input'
                type='number'
                min="0"
                id='years'
                name='yearsPlaying'
                onChange={this.handleChange}
                aria-describedby='years-instructions years-error'
                ref={this.yearsPlayingRef}
                aria-invalid={invalidInputs.includes('yearsPlaying')} />
                {invalidInputs.includes('yearsPlaying') && <span id={`years-error`} className='form__label form__label--error'>This field is required</span>}
            </div>
            <RadioGroup
              label='Do you have a working instrument and the needed supplies at home?'
              values={['yes', 'no']}
              id='working-instrument'
              name='hasWorkingInstrument'
              checked={this.state.hasWorkingInstrument}
              handleChange={this.handleChange}
              isRequired
              ref={this.hasWorkingInstrumentRef}
              invalid={invalidInputs.includes('hasWorkingInstrument')}
            />
          </Fragment>
        }
        <RadioGroup
          label='Does your student live in the Philadelphia, PA region?'
          values={['yes', 'no']}
          id='in-philly'
          name='isInPhilly'
          checked={this.state.isInPhilly}
          handleChange={this.handleChange}
          isRequired
          ref={this.isInPhillyRef}
          invalid={invalidInputs.includes('isInPhilly')}
        />
        {this.state.isInPhilly === 'yes' &&
          <RadioGroup
            label='Is your student a returning POP student?'
            instructions='Includes students who have participated in our regular, school year programming'
            values={['yes', 'no']}
            id='returning-student'
            name='isReturningStudent'
            checked={this.state.isReturningStudent}
            handleChange={this.handleChange}
            isRequired
            ref={this.isReturningStudentRef}
            invalid={invalidInputs.includes('isReturningStudent')}
          />
        }
        {this.state.isInPhilly === 'yes' && this.state.grade && this.state.grade !== '9th, 10th, 11th, or 12th' &&
          <Select
            name='school'
            label='Will your student be attending any of these schools?'
            values={this.schoolValues}
            handleChange={this.handleChange}
            isRequired
            ref={this.schoolRef}
            invalid={invalidInputs.includes('school')}
          />
        }
        <input className='form__button' type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form;