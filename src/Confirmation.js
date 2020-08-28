import React, { Fragment } from 'react';
import confirmationMessages from './data/confirmationMessages.json';
import waitingListStatus from './data/waitingListStatus.json';
import schedules from './data/schedules.json';

const getDivision = (division) => {
  switch(division) {
    case '1A':
      return '1: Pre-Instrumental K-2';
    case '1B':
      return '1: Pre-Instrumental 3-4';
    case '1C':
      return '1: Pre-Instrumental 5-7';
    case '2A':
      return '2: Early Instrumental 1-2';
    case '2B':
      return '2: Early Instrumental 3-4';
    case '3A':
      return '3: Strings 5-7';
    case '3B':
      return '3: Winds, Brass, Percussion 4-7';
    case '3C':
      return '3: Strings 8-12';
    case '3D':
      return '3: Winds, Brass, Percussion 8-12';
    default:
      return null
  }
}

function Confirmation(props) {
  const { division, link, inPersonEligible } = props.placement;
  const { ieTitle, ineligibility } = confirmationMessages.ineligible;
  const { title, eligibility1, eligibility2, schedule, inPerson, register } = confirmationMessages.eligible;
  const { wlTitle, wlEligibility1, wlEligibility2, message, CTA, wlLink } = confirmationMessages.waitingList;

  return (
    <div className='confirmation'>
      {!division &&
        <Fragment>
          <p className='confirmation__title'>{ieTitle}</p>
          <p className='confirmation__text'>{ineligibility} <a href='mailto:michael@playonphilly.org' target='_top'>michael@playonphilly.org</a>.</p>
        </Fragment>
      }
      {division && !waitingListStatus[division] &&
        <Fragment>
          <p className='confirmation__title'>{title}</p>
          <p className='confirmation__text'>{eligibility1} <span className='confirmation__text confirmation__text--emphasis'>Division {getDivision(division)}</span> {eligibility2}.</p>
          <p className='confirmation__text'>{schedule}<br />
            <span className='confirmation__text confirmation__text--emphasis'>
              {schedules[division].days}<br />
              {schedules[division].time}
            </span>
          </p>
          {inPersonEligible &&
            <p className='confirmation__text'>{inPerson}</p>
          }
          <a href={link} target='_parent' className='confirmation__button'>{register}</a>
        </Fragment>
      }
      { division && waitingListStatus[division] &&
        <Fragment>
          <p className='confirmation__title'>{wlTitle}</p>
          <p className='confirmation__text'>{wlEligibility1} <span className='confirmation__text confirmation__text--emphasis'>Division {getDivision(division)}</span> {wlEligibility2}.</p>
          <p className='confirmation__text'>{message}</p>
          <a href={`${wlLink}`} target='_parent' className='confirmation__button'>{CTA}</a>
        </Fragment>
      }
    </div>
  );
}

export default Confirmation;