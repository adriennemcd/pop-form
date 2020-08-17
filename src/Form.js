import React, {Component, Fragment} from 'react';
import Select from './Select';
import RadioGroup from './RadioGroup';

class Form extends Component {
  state = {
    alreadyPlays: null,
    grade: '',
    instrument: '',
    hasWorkingInstrument: null,
    school: '',
    isInPhilly: null,
    isReturningStudent: null
  }

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

  getEligibility = (grade) => {
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
            return (this.state.yearsPlaying === '4' || this.state.yearsPlaying === '5') &&
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
        case '3rd or 4th':
        case '5th':
        case '6th or 7th':
          return (this.state.yearsPlaying === 1 || this.state.yearsPlaying === 2) &&
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    const isInPhilly = this.state.isInPhilly === 'yes';
    const isReturningStudent = this.state.isReturningStudent === 'yes';
    const inPersonEligible = isInPhilly && this.getEligibility(this.state.grade);
    const inPersonEligibleReturning = inPersonEligible && isReturningStudent;
    const division = this.getDivision(this.state.grade);

    e.preventDefault();
    console.log(inPersonEligible, inPersonEligibleReturning, division);
  }

  render () {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <Select
          name='grade'
          label='Student Grade'
          values={this.gradeValues}
          handleChange={this.handleChange}
        />
        <RadioGroup
          label='Does your student already play an instrument?'
          values={['yes', 'no']}
          id='already-play'
          name='alreadyPlays'
          checked={this.state.alreadyPlays}
          handleChange={this.handleChange}
        />
        {this.state.alreadyPlays === 'yes' &&
          <Select
            name='instrument'
            label='Select which instrument'
            values={this.instrumentValues}
            handleChange={this.handleChange}
          />
        }
        {this.state.alreadyPlays === 'yes' && this.state.instrument === 'Other' &&
          <div className='form__item'>
            <label htmlFor='instrument-other' className='form__label'>Please specify:</label>
            <input className='form__input' id='instrument-other' type='text' name='instrumentOther' onChange={this.handleChange}></input>
          </div>
        }
        {this.state.alreadyPlays === 'yes' &&
          <Fragment>
            <div className='form__item'>
              <label htmlFor='years' className='form__label'>How long has your student been playing (# of years)?</label>
              <input className='form__input' type='number' id='years' name='yearsPlaying' onChange={this.handleChange}></input>
            </div>
            <RadioGroup
              label='Do you have a working instrument and the needed supplies at home?'
              values={['yes', 'no']}
              id='working-instrument'
              name='hasWorkingInstrument'
              checked={this.state.hasWorkingInstrument}
              handleChange={this.handleChange}
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
        />
        {this.state.isInPhilly === 'yes' &&
          <RadioGroup
            label='Is your student a returning POP student? (includes students who have participated in our regular, school year programming)'
            values={['yes', 'no']}
            id='returning-student'
            name='isReturningStudent'
            checked={this.state.isReturningStudent}
            handleChange={this.handleChange}
          />
        }
        {this.state.isInPhilly === 'yes' && this.state.grade && this.state.grade !== '9th, 10th, 11th, or 12th' &&
          <Select
            name='school'
            label='Will your student be attending any of these schools?'
            values={this.schoolValues}
            handleChange={this.handleChange}
          />
        }
        <input className='form__button' type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form;